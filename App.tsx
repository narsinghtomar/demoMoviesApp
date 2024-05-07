import React, {useEffect, useState, useRef} from 'react';
import {enableFreeze} from 'react-native-screens';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {DefaultLanguage, setI18nConfig} from './src/i18n';
import {PersistGate} from 'redux-persist/integration/react';
import {loadLanguageCode, saveLanguage} from './src/utils/storage';
import {isNonEmptyString} from './src/utils/helper';

/***********************************************************************************/
/**
 * App
 */
const App: React.FC = () => {
  const [loadUi, setLoadUi] = useState(false);
  const navigationRef = useRef<any>(null);

  const _setNavigationRef = (ref: any) => {
    navigationRef.current = ref;
  };

  // This option can be used to control whether components rendered under Freeze should or should not re-render. If set to true, all renders for components from Freeze subtree will be suspended until the prop changes to false.
  enableFreeze(true);

  /**
   * getAppConfig
   */
  useEffect(() => {
    const getAppConfig = async () => {
      const userLanguage = await loadLanguageCode();
      const lang = isNonEmptyString(userLanguage)
        ? userLanguage
        : DefaultLanguage;
      setI18nConfig(lang);
      await saveLanguage(lang);
      setLoadUi(true);
    };
    getAppConfig();
  }, []);

  return <>{loadUi && <Navigator setNavigationRef={_setNavigationRef} />}</>;
};

/***********************************************************************************/
/**
 * RootWrapper
 */
const RootWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default RootWrapper;
