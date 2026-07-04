/**
 * Tests for the useAuth hook: session bootstrap, auth state changes, sign out.
 */
import { renderHook, waitFor, act } from '@testing-library/react-native';

type AuthListener = (event: string, session: unknown) => void;

const listeners: AuthListener[] = [];
const mockGetSession = jest.fn();
const mockSignOut = jest.fn();
const mockUnsubscribe = jest.fn();

jest.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      getSession: (...args: unknown[]) => mockGetSession(...args),
      onAuthStateChange: (cb: AuthListener) => {
        listeners.push(cb);
        return { data: { subscription: { unsubscribe: mockUnsubscribe } } };
      },
      signOut: (...args: unknown[]) => mockSignOut(...args),
    },
  },
}));

// Import after the mock so the hook picks it up
import { useAuth } from '../useAuth';

const fakeUser = { id: 'user-123', email: 'dancer@example.com' };

describe('useAuth', () => {
  beforeEach(() => {
    listeners.length = 0;
    mockGetSession.mockReset();
    mockSignOut.mockReset();
    mockUnsubscribe.mockReset();
  });

  it('starts unauthenticated when there is no session', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null } });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('restores an existing session on mount', async () => {
    mockGetSession.mockResolvedValue({ data: { session: { user: fakeUser } } });

    const { result } = renderHook(() => useAuth());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.user).toEqual(fakeUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('updates user when auth state changes', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null } });

    const { result } = renderHook(() => useAuth());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      listeners.forEach((cb) => cb('SIGNED_IN', { user: fakeUser }));
    });

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(fakeUser);

    act(() => {
      listeners.forEach((cb) => cb('SIGNED_OUT', null));
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it('delegates signOut to supabase', async () => {
    mockGetSession.mockResolvedValue({ data: { session: { user: fakeUser } } });
    mockSignOut.mockResolvedValue({ error: null });

    const { result } = renderHook(() => useAuth());
    await waitFor(() => expect(result.current.loading).toBe(false));

    await act(async () => {
      await result.current.signOut();
    });

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  it('unsubscribes from auth changes on unmount', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null } });

    const { unmount, result } = renderHook(() => useAuth());
    await waitFor(() => expect(result.current.loading).toBe(false));

    unmount();
    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });
});
