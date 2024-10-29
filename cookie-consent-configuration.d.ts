export declare const CookieConsentConfig: CookieConsentConfig;

export declare interface CookieConsentConfig {
  categories: {
    [key: string]: { enabled: boolean; readOnly?: boolean };
  };
  guiOptions: {
    consentModal: {
      position: string;
    };
  };
  onConsent: ({ cookie }) => void;
  onChange: ({ cookie }) => void;
  language: {
    default: string;
    translations: {
      [key: string]: {
        consentModal: {
          title: string;
          description: string;
          acceptAllBtn: string;
          acceptNecessaryBtn: string;
          showPreferencesBtn: string;
        };
        preferencesModal: {
          title: string;
          acceptAllBtn: string;
          acceptNecessaryBtn: string;
          savePreferencesBtn: string;
          closeIconLabel: string;
          sections: {
            title: string;
            description: string;
            linkedCategory?: string;
          }[];
        };
      };
    };
  };
}
