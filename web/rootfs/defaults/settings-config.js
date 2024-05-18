{{ $DEPLOYMENTINFO_USERREGION := .Env.DEPLOYMENTINFO_USERREGION | default "" -}}
{{ $ENABLE_AUDIO_PROCESSING := .Env.ENABLE_AUDIO_PROCESSING | default "true" | toBool -}}
{{ $ENABLE_BREAKOUT_ROOMS := .Env.ENABLE_BREAKOUT_ROOMS | default "true" | toBool -}}
{{ $ENABLE_CALENDAR := .Env.ENABLE_CALENDAR | default "false" | toBool -}}
{{ $ENABLE_FILE_RECORDING_SHARING := .Env.ENABLE_FILE_RECORDING_SHARING | default "false" | toBool -}}
{{ $ENABLE_NO_AUDIO_DETECTION := .Env.ENABLE_NO_AUDIO_DETECTION | default "true" | toBool -}}
{{ $ENABLE_P2P := .Env.ENABLE_P2P | default "true" | toBool -}}
{{ $ENABLE_PREJOIN_PAGE := .Env.ENABLE_PREJOIN_PAGE | default "true" | toBool -}}
{{ $ENABLE_WELCOME_PAGE := .Env.ENABLE_WELCOME_PAGE | default "true" | toBool -}}
{{ $ENABLE_CLOSE_PAGE := .Env.ENABLE_CLOSE_PAGE | default "false" | toBool -}}
{{ $ENABLE_RECORDING := .Env.ENABLE_RECORDING | default "false" | toBool -}}
{{ $ENABLE_SERVICE_RECORDING := .Env.ENABLE_SERVICE_RECORDING | default ($ENABLE_RECORDING | printf "%t") | toBool -}}
{{ $ENABLE_LIVESTREAMING := .Env.ENABLE_LIVESTREAMING | default "false" | toBool -}}
{{ $ENABLE_LIVESTREAMING_DATA_PRIVACY_LINK := .Env.ENABLE_LIVESTREAMING_DATA_PRIVACY_LINK | default "https://policies.google.com/privacy" -}}
{{ $ENABLE_LIVESTREAMING_HELP_LINK := .Env.ENABLE_LIVESTREAMING_HELP_LINK | default "https://jitsi.org/live" -}}
{{ $ENABLE_LIVESTREAMING_TERMS_LINK := .Env.ENABLE_LIVESTREAMING_TERMS_LINK | default "https://www.youtube.com/t/terms" -}}
{{ $ENABLE_LIVESTREAMING_VALIDATOR_REGEXP_STRING := .Env.ENABLE_LIVESTREAMING_VALIDATOR_REGEXP_STRING | default "^(?:[a-zA-Z0-9]{4}(?:-(?!$)|$)){4}" -}}
{{ $ENABLE_REMB := .Env.ENABLE_REMB | default "true" | toBool -}}
{{ $ENABLE_REQUIRE_DISPLAY_NAME := .Env.ENABLE_REQUIRE_DISPLAY_NAME | default "false" | toBool -}}
{{ $ENABLE_SIMULCAST := .Env.ENABLE_SIMULCAST | default "true" | toBool -}}
{{ $ENABLE_STEREO := .Env.ENABLE_STEREO | default "false" | toBool -}}
{{ $ENABLE_OPUS_RED := .Env.ENABLE_OPUS_RED | default "false" | toBool -}}
{{ $ENABLE_TALK_WHILE_MUTED := .Env.ENABLE_TALK_WHILE_MUTED | default "false" | toBool -}}
{{ $ENABLE_TCC := .Env.ENABLE_TCC | default "true" | toBool -}}
{{ $ENABLE_TRANSCRIPTIONS := .Env.ENABLE_TRANSCRIPTIONS | default "false" | toBool -}}
{{ $TRANSLATION_LANGUAGES := .Env.TRANSLATION_LANGUAGES | default "[]" -}}
{{ $TRANSLATION_LANGUAGES_HEAD := .Env.TRANSLATION_LANGUAGES_HEAD | default "['en']" -}}
{{ $USE_APP_LANGUAGE := .Env.USE_APP_LANGUAGE | default "true" | toBool -}}
{{ $PREFERRED_LANGUAGE := .Env.PREFERRED_LANGUAGE | default "en-US" -}}
{{ $DISABLE_START_FOR_ALL := .Env.DISABLE_START_FOR_ALL | default "false" | toBool -}}
{{ $AUTO_CAPTION_ON_RECORD := .Env.AUTO_CAPTION_ON_RECORD | default "false" | toBool -}}
{{ $ENABLE_JAAS_COMPONENTS := .Env.ENABLE_JAAS_COMPONENTS | default "0" | toBool }}
{{ $HIDE_PREJOIN_DISPLAY_NAME := .Env.HIDE_PREJOIN_DISPLAY_NAME | default "false" | toBool -}}
{{ $PUBLIC_URL := .Env.PUBLIC_URL | default "https://localhost:8443" -}}
{{ $RESOLUTION := .Env.RESOLUTION | default "720" -}}
{{ $RESOLUTION_MIN := .Env.RESOLUTION_MIN | default "180" -}}
{{ $RESOLUTION_WIDTH := .Env.RESOLUTION_WIDTH | default "1280" -}}
{{ $RESOLUTION_WIDTH_MIN := .Env.RESOLUTION_WIDTH_MIN | default "320" -}}
{{ $START_AUDIO_ONLY := .Env.START_AUDIO_ONLY | default "false" | toBool -}}
{{ $START_AUDIO_MUTED := .Env.START_AUDIO_MUTED | default 10 -}}
{{ $START_WITH_AUDIO_MUTED := .Env.START_WITH_AUDIO_MUTED | default "false" | toBool -}}
{{ $START_SILENT := .Env.START_SILENT | default "false" | toBool -}}
{{ $DISABLE_AUDIO_LEVELS := .Env.DISABLE_AUDIO_LEVELS | default "false" | toBool -}}
{{ $ENABLE_NOISY_MIC_DETECTION := .Env.ENABLE_NOISY_MIC_DETECTION | default "true" | toBool -}}
{{ $START_VIDEO_MUTED := .Env.START_VIDEO_MUTED | default 10 -}}
{{ $START_WITH_VIDEO_MUTED := .Env.START_WITH_VIDEO_MUTED | default "false" | toBool -}}
{{ $DESKTOP_SHARING_FRAMERATE_AUTO := .Env.DESKTOP_SHARING_FRAMERATE_AUTO | default "true" | toBool -}}
{{ $DESKTOP_SHARING_FRAMERATE_MIN := .Env.DESKTOP_SHARING_FRAMERATE_MIN | default 5 -}}
{{ $DESKTOP_SHARING_FRAMERATE_MAX := .Env.DESKTOP_SHARING_FRAMERATE_MAX | default 5 -}}
{{ $XMPP_DOMAIN := .Env.XMPP_DOMAIN | default "meet.jitsi" -}}
{{ $XMPP_RECORDER_DOMAIN := .Env.XMPP_RECORDER_DOMAIN | default "recorder.meet.jitsi" -}}
{{ $DISABLE_DEEP_LINKING  := .Env.DISABLE_DEEP_LINKING | default "false" | toBool -}}
{{ $DISABLE_POLLS := .Env.DISABLE_POLLS | default "false" | toBool -}}
{{ $DISABLE_REACTIONS := .Env.DISABLE_REACTIONS | default "false" | toBool -}}
{{ $DISABLE_REMOTE_VIDEO_MENU := .Env.DISABLE_REMOTE_VIDEO_MENU | default "false" | toBool -}}
{{ $DISABLE_PRIVATE_CHAT:= .Env.DISABLE_PRIVATE_CHAT | default "false" | toBool -}}
{{ $DISABLE_KICKOUT := .Env.DISABLE_KICKOUT | default "false" | toBool -}}
{{ $DISABLE_GRANT_MODERATOR := .Env.DISABLE_GRANT_MODERATOR | default "false" | toBool -}}
{{ $ENABLE_E2EPING := .Env.ENABLE_E2EPING | default "false" | toBool -}}
{{ $DISABLE_LOCAL_RECORDING := .Env.DISABLE_LOCAL_RECORDING | default "false" | toBool -}}
{{ $ENABLE_LOCAL_RECORDING_NOTIFY_ALL_PARTICIPANT := .Env.ENABLE_LOCAL_RECORDING_NOTIFY_ALL_PARTICIPANT | default "false" | toBool -}}
{{ $ENABLE_LOCAL_RECORDING_SELF_START := .Env.ENABLE_LOCAL_RECORDING_SELF_START | default "false" | toBool -}}
{{ $DISABLE_PROFILE := .Env.DISABLE_PROFILE | default "false" | toBool -}}
{{ $ROOM_PASSWORD_DIGITS := .Env.ROOM_PASSWORD_DIGITS | default "false" -}}
{{ $WHITEBOARD_COLLAB_SERVER_PUBLIC_URL := .Env.WHITEBOARD_COLLAB_SERVER_PUBLIC_URL | default "" -}}
{{ $WHITEBOARD_ENABLED := .Env.WHITEBOARD_ENABLED | default "false" | toBool -}}
{{ $TESTING_AV1_SUPPORT := .Env.TESTING_AV1_SUPPORT | default "false" | toBool -}}
{{ $BRAND_WATERMARK_LINK := .Env.BRAND_WATERMARK_LINK | default "" -}}
{{ $JITSI_WATERMARK_LINK := .Env.JITSI_WATERMARK_LINK | default "" -}}

// Video configuration.
//

customConfig.resolution = {{ $RESOLUTION }};
customConfig.constraints = {
    video: {
        height: { ideal: {{ $RESOLUTION }}, max: {{ $RESOLUTION }}, min: {{ $RESOLUTION_MIN }} },
        width: { ideal: {{ $RESOLUTION_WIDTH }}, max: {{ $RESOLUTION_WIDTH }}, min: {{ $RESOLUTION_WIDTH_MIN }}},
    }
};

{{ if not $ENABLE_SIMULCAST -}}
customConfig.disableSimulcast = true;
{{ end -}}
customConfig.startVideoMuted = {{ $START_VIDEO_MUTED }};
customConfig.startWithVideoMuted = {{ $START_WITH_VIDEO_MUTED }};

customConfig.flags = {
    sourceNameSignaling: true,
    sendMultipleVideoStreams: true,
    receiveMultipleVideoStreams: true
};

// ScreenShare Configuration.
//

{{ if not $DESKTOP_SHARING_FRAMERATE_AUTO -}}
customConfig.desktopSharingFrameRate = {
    min: {{ $DESKTOP_SHARING_FRAMERATE_MIN }},
    max: {{ $DESKTOP_SHARING_FRAMERATE_MAX }}
};
{{ end -}}

// Audio configuration.
//

customConfig.enableNoAudioDetection = {{ $ENABLE_NO_AUDIO_DETECTION }};
customConfig.enableTalkWhileMuted = {{ $ENABLE_TALK_WHILE_MUTED }};
customConfig.disableAP = {{ not $ENABLE_AUDIO_PROCESSING }};

customConfig.audioQuality = {
    stereo: {{ $ENABLE_STEREO }}
};

{{ if .Env.AUDIO_QUALITY_OPUS_BITRATE -}}
customConfig.audioQuality.opusMaxAverageBitrate = '{{ .Env.AUDIO_QUALITY_OPUS_BITRATE }}';
{{ end -}}

customConfig.startAudioOnly = {{ $START_AUDIO_ONLY }};
customConfig.startAudioMuted = {{ $START_AUDIO_MUTED }};
customConfig.startWithAudioMuted = {{ $START_WITH_AUDIO_MUTED }};
customConfig.startSilent = {{ $START_SILENT }};
customConfig.enableOpusRed = {{ $ENABLE_OPUS_RED }};
customConfig.disableAudioLevels = {{ $DISABLE_AUDIO_LEVELS }};
customConfig.enableNoisyMicDetection = {{ $ENABLE_NOISY_MIC_DETECTION }};


// Peer-to-Peer options.
//

customConfig.p2p = {
    enabled: {{ $ENABLE_P2P }}
};


// Breakout Rooms
//

customConfig.hideAddRoomButton = {{ $ENABLE_BREAKOUT_ROOMS | not }};


// Etherpad
//

{{ if .Env.ETHERPAD_PUBLIC_URL -}}
customConfig.etherpad_base = '{{ .Env.ETHERPAD_PUBLIC_URL }}';
{{ else if .Env.ETHERPAD_URL_BASE -}}
customConfig.etherpad_base = '{{ $PUBLIC_URL }}/etherpad/p/';
{{ end -}}


// Recording.
//

{{ if $ENABLE_RECORDING  -}}

customConfig.hiddenDomain = '{{ $XMPP_RECORDER_DOMAIN }}';

customConfig.recordingService = {
    // Whether to enable file recording or not using the "service" defined by the finalizer in Jibri
    enabled: {{ $ENABLE_SERVICE_RECORDING }},

    // Whether to show the possibility to share file recording with other people
    // (e.g. meeting participants), based on the actual implementation
    // on the backend.
    sharingEnabled: {{ $ENABLE_FILE_RECORDING_SHARING }}
};

// Live streaming configuration.
customConfig.liveStreaming = {
    enabled: {{ $ENABLE_LIVESTREAMING }},
    dataPrivacyLink: '{{ $ENABLE_LIVESTREAMING_DATA_PRIVACY_LINK }}',
    helpLink: '{{ $ENABLE_LIVESTREAMING_HELP_LINK }}',
    termsLink: '{{ $ENABLE_LIVESTREAMING_TERMS_LINK }}',
    validatorRegExpString: '{{ $ENABLE_LIVESTREAMING_VALIDATOR_REGEXP_STRING }}'
};


{{ if .Env.DROPBOX_APPKEY -}}
// Enable the dropbox integration.
customConfig.dropbox = {
    appKey: '{{ .Env.DROPBOX_APPKEY }}'
};

{{ if .Env.DROPBOX_REDIRECT_URI -}}
// A URL to redirect the user to, after authenticating
// by default uses:
// 'https://jitsi-meet.example.com/static/oauth.html'
customConfig.dropbox.redirectURI = '{{ .Env.DROPBOX_REDIRECT_URI }}';
{{ end -}}
{{ end -}}

{{ end -}}

// Local recording configuration.
customConfig.localRecording = {
    disable: {{ $DISABLE_LOCAL_RECORDING }},
    notifyAllParticipants: {{ $ENABLE_LOCAL_RECORDING_NOTIFY_ALL_PARTICIPANT }},
    disableSelfRecording: {{ $ENABLE_LOCAL_RECORDING_SELF_START }}
};


// Analytics.
//

customConfig.analytics = {};

{{ if .Env.AMPLITUDE_ID -}}
// The Amplitude APP Key:
customConfig.analytics.amplitudeAPPKey = '{{ .Env.AMPLITUDE_ID }}';
{{ end -}}

{{ if .Env.GOOGLE_ANALYTICS_ID -}}
// The Google Analytics Tracking ID:
customConfig.analytics.googleAnalyticsTrackingId = '{{ .Env.GOOGLE_ANALYTICS_ID }}';
{{ end -}}

{{ if .Env.MATOMO_ENDPOINT -}}
// Matomo endpoint:
customConfig.analytics.matomoEndpoint = '{{ .Env.MATOMO_ENDPOINT }}';
{{ end -}}

{{ if .Env.MATOMO_SITE_ID -}}
// Matomo site ID:
customConfig.analytics.matomoSiteID = '{{ .Env.MATOMO_SITE_ID }}';
{{ end -}}

{{ if .Env.ANALYTICS_SCRIPT_URLS -}}
// Array of script URLs to load as lib-jitsi-meet "analytics handlers".
customConfig.analytics.scriptURLs = [ '{{ join "','" (splitList "," .Env.ANALYTICS_SCRIPT_URLS) }}' ];
{{ end -}}

{{ if .Env.ANALYTICS_WHITELISTED_EVENTS -}}
customConfig.analytics.whiteListedEvents = [ '{{ join "','" (splitList "," .Env.ANALYTICS_WHITELISTED_EVENTS) }}' ];
{{ end -}}


// Dial in/out services.
//

{{ if $ENABLE_JAAS_COMPONENTS }}
customConfig.dialInConfCodeUrl = 'https://conference-mapper.jitsi.net/v1/access';
customConfig.dialInNumbersUrl = 'https://conference-mapper.jitsi.net/v1/access/dids';
{{ else }}
{{ if .Env.CONFCODE_URL -}}
customConfig.dialInConfCodeUrl = '{{ .Env.CONFCODE_URL }}';
{{ end -}}
{{ if .Env.DIALIN_NUMBERS_URL -}}
customConfig.dialInNumbersUrl = '{{ .Env.DIALIN_NUMBERS_URL }}';
{{ end -}}
{{ end -}}

{{ if .Env.DIALOUT_AUTH_URL -}}
customConfig.dialOutAuthUrl = '{{ .Env.DIALOUT_AUTH_URL }}';
{{ end -}}

{{ if .Env.DIALOUT_CODES_URL -}}
customConfig.dialOutCodesUrl = '{{ .Env.DIALOUT_CODES_URL }}';
{{ end -}}


// Calendar service integration.
//

customConfig.enableCalendarIntegration = {{ $ENABLE_CALENDAR }};

{{ if .Env.GOOGLE_API_APP_CLIENT_ID -}}
customConfig.googleApiApplicationClientID = '{{ .Env.GOOGLE_API_APP_CLIENT_ID }}';
{{ end -}}

{{ if .Env.MICROSOFT_API_APP_CLIENT_ID -}}
customConfig.microsoftApiApplicationClientID = '{{ .Env.MICROSOFT_API_APP_CLIENT_ID }}';
{{ end -}}


// Invitation service.
//

{{ if .Env.INVITE_SERVICE_URL -}}
customConfig.inviteServiceUrl = '{{ .Env.INVITE_SERVICE_URL }}';
{{ end -}}

{{ if .Env.PEOPLE_SEARCH_URL -}}
customConfig.peopleSearchUrl = '{{ .Env.PEOPLE_SEARCH_URL }}';
customConfig.peopleSearchQueryTypes = ['user','conferenceRooms'];
{{ end -}}


// Miscellaneous.
//

// Prejoin page.
customConfig.prejoinConfig = {
    enabled: {{ $ENABLE_PREJOIN_PAGE }},

    // Hides the participant name editing field in the prejoin screen.
    hideDisplayName: {{ $HIDE_PREJOIN_DISPLAY_NAME }}
};

// List of buttons to hide from the extra join options dropdown on prejoin screen.
{{ if .Env.HIDE_PREJOIN_EXTRA_BUTTONS -}}
customConfig.prejoinConfig.hideExtraJoinButtons = [ '{{ join "','" (splitList "," .Env.HIDE_PREJOIN_EXTRA_BUTTONS) }}' ];
{{ end -}}

// Welcome page.
customConfig.welcomePage = {
    disabled: {{ not $ENABLE_WELCOME_PAGE }}
};

// Close page.
customConfig.enableClosePage = {{ $ENABLE_CLOSE_PAGE }};

// Default language.
{{ if .Env.DEFAULT_LANGUAGE -}}
customConfig.defaultLanguage = '{{ .Env.DEFAULT_LANGUAGE }}';
{{ end -}}

// Require users to always specify a display name.
customConfig.requireDisplayName = {{ $ENABLE_REQUIRE_DISPLAY_NAME }};

// Chrome extension banner.
{{ if .Env.CHROME_EXTENSION_BANNER_JSON -}}
customConfig.chromeExtensionBanner = {{ .Env.CHROME_EXTENSION_BANNER_JSON }};
{{ end -}}

// Disables profile and the edit of all fields from the profile settings (display name and email)
customConfig.disableProfile = {{ $DISABLE_PROFILE }};

// Room password (false for anything, number for max digits)
{{ if $ENABLE_JAAS_COMPONENTS -}}
customConfig.roomPasswordNumberOfDigits = 10;
{{ else -}}
customConfig.roomPasswordNumberOfDigits = {{ $ROOM_PASSWORD_DIGITS }};
{{ end -}}

// Advanced.
//

{{ if not $ENABLE_REMB -}}
customConfig.enableRemb = false;
{{ end -}}
{{ if not $ENABLE_TCC -}}
customConfig.enableTcc = false;
{{ end -}}


// Transcriptions (subtitles and buttons can be configured in interface_config)
customConfig.transcription = {
    enabled: {{ $ENABLE_TRANSCRIPTIONS }},
    translationLanguages: {{ $TRANSLATION_LANGUAGES }},
    translationLanguagesHead: {{ $TRANSLATION_LANGUAGES_HEAD }},
    useAppLanguage: {{ $USE_APP_LANGUAGE }},
    preferredLanguage: '{{ $PREFERRED_LANGUAGE }}',
    disableStartForAll: {{ $DISABLE_START_FOR_ALL }},
    autoCaptionOnRecord: {{ $AUTO_CAPTION_ON_RECORD }},
};

// Dynamic branding
{{ if .Env.DYNAMIC_BRANDING_URL -}}
// External API url used to receive branding specific information.
customConfig.dynamicBrandingUrl = '{{ .Env.DYNAMIC_BRANDING_URL }}';
{{ else if .Env.BRANDING_DATA_URL  -}}
customConfig.brandingDataUrl = '{{ .Env.BRANDING_DATA_URL }}';
{{ end -}}

{{ if .Env.TOKEN_AUTH_URL -}}
// Authenticate using external service
customConfig.tokenAuthUrl = '{{ .Env.TOKEN_AUTH_URL }}';
{{ end -}}


// Deployment information.
//

customConfig.deploymentInfo = {};

{{ if .Env.DEPLOYMENTINFO_ENVIRONMENT -}}
customConfig.deploymentInfo.environment = '{{ .Env.DEPLOYMENTINFO_ENVIRONMENT }}';
{{ end -}}

{{ if .Env.DEPLOYMENTINFO_SHARD -}}
customConfig.deploymentInfo.shard = '{{ .Env.DEPLOYMENTINFO_SHARD }}';
{{ end -}}

{{ if .Env.DEPLOYMENTINFO_ENVIRONMENT_TYPE -}}
customConfig.deploymentInfo.envType = '{{ .Env.DEPLOYMENTINFO_ENVIRONMENT_TYPE }}';
{{ end -}}

{{ if .Env.DEPLOYMENTINFO_REGION -}}
customConfig.deploymentInfo.region = '{{ .Env.DEPLOYMENTINFO_REGION }}';
{{ end -}}

{{ if $DEPLOYMENTINFO_USERREGION -}}
customConfig.deploymentInfo.userRegion = '{{ $DEPLOYMENTINFO_USERREGION }}';
{{ end -}}

// Deep Linking
customConfig.disableDeepLinking = {{ $DISABLE_DEEP_LINKING }};

// P2P preferred codec
{{ if .Env.P2P_PREFERRED_CODEC -}}
customConfig.p2p.preferredCodec = '{{ .Env.P2P_PREFERRED_CODEC }}';
{{ end -}}

// Video quality settings.
//

customConfig.videoQuality = {};
{{ if .Env.VIDEOQUALITY_PREFERRED_CODEC -}}
customConfig.videoQuality.preferredCodec = '{{ .Env.VIDEOQUALITY_PREFERRED_CODEC }}';
{{ end -}}

customConfig.videoQuality.av1 = {};

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_LOW }}
customConfig.videoQuality.av1.low = {{ .Env.VIDEOQUALITY_BITRATE_AV1_LOW }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_STANDARD }}
customConfig.videoQuality.av1.standard = {{ .Env.VIDEOQUALITY_BITRATE_AV1_STANDARD }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_HIGH }}
customConfig.videoQuality.av1.high = {{ .Env.VIDEOQUALITY_BITRATE_AV1_HIGH }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_FULL }}
customConfig.videoQuality.av1.fullHd = {{ .Env.VIDEOQUALITY_BITRATE_AV1_FULL }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_ULTRA }}
customConfig.videoQuality.av1.ultraHd = {{ .Env.VIDEOQUALITY_BITRATE_AV1_ULTRA }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_AV1_SS_HIGH }}
customConfig.videoQuality.av1.ssHigh = {{ .Env.VIDEOQUALITY_BITRATE_AV1_SS_HIGH }};
{{ end -}}

customConfig.videoQuality.h264 = {};

{{ if .Env.VIDEOQUALITY_BITRATE_H264_LOW }}
customConfig.videoQuality.h264.low = {{ .Env.VIDEOQUALITY_BITRATE_H264_LOW }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_H264_STANDARD }}
customConfig.videoQuality.h264.standard = {{ .Env.VIDEOQUALITY_BITRATE_H264_STANDARD }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_H264_HIGH }}
customConfig.videoQuality.h264.high = {{ .Env.VIDEOQUALITY_BITRATE_H264_HIGH }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_H264_FULL }}
customConfig.videoQuality.h264.fullHd = {{ .Env.VIDEOQUALITY_BITRATE_H264_FULL }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_H264_ULTRA }}
customConfig.videoQuality.h264.ultraHd = {{ .Env.VIDEOQUALITY_BITRATE_H264_ULTRA }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_H264_SS_HIGH }}
customConfig.videoQuality.h264.ssHigh = {{ .Env.VIDEOQUALITY_BITRATE_H264_SS_HIGH }};
{{ end -}}

customConfig.videoQuality.vp8 = {};

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_LOW }}
customConfig.videoQuality.vp8.low = {{ .Env.VIDEOQUALITY_BITRATE_VP8_LOW }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_STANDARD }}
customConfig.videoQuality.vp8.standard = {{ .Env.VIDEOQUALITY_BITRATE_VP8_STANDARD }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_HIGH }}
customConfig.videoQuality.vp8.high = {{ .Env.VIDEOQUALITY_BITRATE_VP8_HIGH }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_FULL }}
customConfig.videoQuality.vp8.fullHd = {{ .Env.VIDEOQUALITY_BITRATE_VP8_FULL }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_ULTRA }}
customConfig.videoQuality.vp8.ultraHd = {{ .Env.VIDEOQUALITY_BITRATE_VP8_ULTRA }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP8_SS_HIGH }}
customConfig.videoQuality.vp8.ssHigh = {{ .Env.VIDEOQUALITY_BITRATE_VP8_SS_HIGH }};
{{ end -}}

customConfig.videoQuality.vp9 = {};

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_LOW }}
customConfig.videoQuality.vp9.low = {{ .Env.VIDEOQUALITY_BITRATE_VP9_LOW }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_STANDARD }}
customConfig.videoQuality.vp9.standard = {{ .Env.VIDEOQUALITY_BITRATE_VP9_STANDARD }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_HIGH }}
customConfig.videoQuality.vp9.high = {{ .Env.VIDEOQUALITY_BITRATE_VP9_HIGH }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_FULL }}
customConfig.videoQuality.vp9.fullHd = {{ .Env.VIDEOQUALITY_BITRATE_VP9_FULL }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_ULTRA }}
customConfig.videoQuality.vp9.ultraHd = {{ .Env.VIDEOQUALITY_BITRATE_VP9_ULTRA }};
{{ end -}}

{{ if .Env.VIDEOQUALITY_BITRATE_VP9_SS_HIGH }}
customConfig.videoQuality.vp9.ssHigh = {{ .Env.VIDEOQUALITY_BITRATE_VP9_SS_HIGH }};
{{ end -}}

 // Reactions
customConfig.disableReactions = {{ $DISABLE_REACTIONS }};

// Polls
customConfig.disablePolls = {{ $DISABLE_POLLS }};

// Configure toolbar buttons
{{ if .Env.TOOLBAR_BUTTONS -}}
customConfig.toolbarButtons = [ '{{ join "','" (splitList "," .Env.TOOLBAR_BUTTONS) }}' ];
{{ end -}}

// Hides the buttons at pre-join screen
{{ if .Env.HIDE_PREMEETING_BUTTONS -}}
customConfig.hiddenPremeetingButtons = [ '{{ join "','" (splitList "," .Env.HIDE_PREMEETING_BUTTONS) }}' ];
{{ end -}}

// Configure remote participant video menu
customConfig.remoteVideoMenu = {
    disabled: {{ $DISABLE_REMOTE_VIDEO_MENU }},
    disableKick: {{ $DISABLE_KICKOUT }},
    disableGrantModerator: {{ $DISABLE_GRANT_MODERATOR }},
    disablePrivateChat: {{ $DISABLE_PRIVATE_CHAT }}
};

// Configure e2eping
customConfig.e2eping = {
    enabled: {{ $ENABLE_E2EPING }}
};

{{ if .Env.E2EPING_NUM_REQUESTS -}}
customConfig.e2eping.numRequests = {{ .Env.E2EPING_NUM_REQUESTS }};
{{ end -}}
{{ if .Env.E2EPING_MAX_CONFERENCE_SIZE -}}
customConfig.e2eping.maxConferenceSize = {{ .Env.E2EPING_MAX_CONFERENCE_SIZE }};
{{ end -}}
{{ if .Env.E2EPING_MAX_MESSAGE_PER_SECOND -}}
customConfig.e2eping.maxMessagePerSecond = {{ .Env.E2EPING_MAX_MESSAGE_PER_SECOND }};
{{ end }}

// Settings for the Excalidraw whiteboard integration.
customConfig.whiteboard = {
    enabled: {{ $WHITEBOARD_ENABLED }},
    collabServerBaseUrl: '{{ $WHITEBOARD_COLLAB_SERVER_PUBLIC_URL }}'
};

// Testing
customConfig.testing = {
    enableAv1Support: {{ $TESTING_AV1_SUPPORT }}
};

