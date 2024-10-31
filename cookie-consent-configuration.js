/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */

function openWidget(event) {
  const element = event.target;
  console.log({ element });
  if (element.closest(`[data-hubspotChat]`) !== null) {
    console.log("open widget");
    window.HubspotConversations.widget.open();
  }
}

function onConversationsAPIReady() {
  console.log("ready");
  document.addEventListener("click", openWidget);
}

exports.cookieConsentConfig = {
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
      cookies: [
        { name: /^__cf/ },
        { name: /^__stripe/ },
        { name: /^_cf/ },
        { name: "cc_cookie" },
      ],
    },
    analytics: {
      enabled: true,
      cookies: [
        { name: /^_ga/ },
        { name: "_gid" },
        { name: "hubspotutk" },
        { name: "bcookie" },
        { name: "AnalyticsSyncHistory" },
      ],
    },
    advertisement: {
      enabled: true,
      cookies: [
        { name: "_fbp" },
        { name: "li_sugr" },
        { name: "_gcl_au" },
        { name: "UserMatchHistory" },
        { name: "SID" },
        { name: "NID" },
        { name: "DV" },
      ],
    },
    functionality: {
      enabled: true,
      cookies: [
        { name: /^__hs/ },
        { name: "XSRF-TOKEN" },
        { name: /^cg_/ },
        { name: "lidc" },
        { name: "SSIDCC" },
        { name: "HSID" },
      ],
    },
  },
  guiOptions: {
    consentModal: {
      position: "bottom left",
    },
  },
  onConsent: ({ cookie }) => {
    const dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "cookie_consent_updated", cookie });
  },
  onChange: ({ cookie }) => {
    const dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "cookie_consent_updated", cookie });
  },
  onModalShow: () => {
    console.log("on modal show");
    // Hook in to hubspot
    if (window.HubspotConversations) {
      onConversationsAPIReady();
    } else {
      window.hsConversationOnReady = [onConversationsAPIReady];
    }
  },
  onModalHide: () => {
    document.removeEventListener("click", openWidget);
  },
  language: {
    default: "en",
    translations: {
      en: {
        consentModal: {
          title: "",
          description:
            "This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage Individual preferences",
        },
        preferencesModal: {
          title: "Manage cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Accept current selection",
          closeIconLabel: "Close modal",
          sections: [
            {
              title: "",
              description:
                "When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). ",
            },
            {
              title: "Necessary",
              description:
                "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics",
              description:
                "These cookies help us to understand how visitors engage with the website. We may use a set of cookies to collect information and report site usage statistics. In addition to reporting site usage statistics, data collected may also be used, together with some of the advertising cookies described, to help show more relevant ads across the web and to measure interactions with the ads we show.",
              linkedCategory: "analytics",
            },
            {
              title: "Advertisement",
              description:
                "We use cookies to make our ads more engaging and valuable to site visitors. Some common applications of cookies are to select advertising based on what’s relevant to a user; to improve reporting on ad campaign performance; and to avoid showing ads the user has already seen.",
              linkedCategory: "advertisement",
            },
            {
              title: "Functionality",
              description:
                "We use a set of cookies that are optional for the website to function. They are usually only set in response to information provided to the website to personalize and optimize your experience as well as remember your chat history.",
              linkedCategory: "functionality",
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <button class="link" type="button" data-hubspotChat>contact us</a>',
            },
          ],
        },
      },
    },
  },
};
