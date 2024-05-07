
import userAuthReducer, { setUserInfo, setAuthCompleted, resetAuthCompleted } from '../../../../src/redux/reducers/authReducer';
import { AnyAction } from '@reduxjs/toolkit';


describe('userAuthSlice reducer', () => {
  // Initial state
  const initialState: UserInfoState = {
    isAuthDone: false,
    userInfo: null,
  };

  it('should handle setting user info', () => {
    const loginData = { id: 1, username: 'user1' };
    const newState = userAuthReducer(
      initialState,
      setUserInfo({ loginData })
    );
    expect(newState.userInfo).toEqual(loginData);
  });

  it('should handle setting auth completed', () => {
    const newState = userAuthReducer(initialState, setAuthCompleted());
    expect(newState.isAuthDone).toEqual(true);
  });

  it('should handle resetting auth completed', () => {
    const stateWithAuth: UserInfoState = {
      isAuthDone: true,
      userInfo: { id: 1, username: 'user1' },
    };
    const newState = userAuthReducer(stateWithAuth, resetAuthCompleted());
    expect(newState.isAuthDone).toEqual(false);
    expect(newState.userInfo).toBeNull();
  });

  it('should return the initial state for unknown action', () => {
    const newState = userAuthReducer(initialState, {} as AnyAction);
    expect(newState).toEqual(initialState);
  });
});
