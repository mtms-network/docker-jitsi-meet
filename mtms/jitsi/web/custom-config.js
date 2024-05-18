// Jitsi Meet configuration.
var customConfig = {};

customConfig.hosts = {};

customConfig.hosts.domain = 'meet.jitsi';
customConfig.focusUserJid = 'focus@auth.meet.jitsi';

var subdir = '';
var subdomain = '';
if (subdir.startsWith('<!--')) {
    subdir = '';
}
if (subdomain) {
    subdomain = subdomain.substring(0,subdomain.length-1).split('.').join('_').toLowerCase() + '.';
}
customConfig.hosts.muc = 'muc.' + subdomain + 'meet.jitsi';
customConfig.bosh = 'https://player.globoroom.com/' + subdir + 'http-bind';
customConfig.websocket = 'wss://player.globoroom.com/' + subdir + 'xmpp-websocket';

// Video configuration.
//

customConfig.resolution = 720;
customConfig.constraints = {
    video: {
        height: { ideal: 720, max: 720, min: 180 },
        width: { ideal: 1280, max: 1280, min: 320},
    }
};

customConfig.startVideoMuted = 10;
customConfig.startWithVideoMuted = false;

customConfig.flags = {
    sourceNameSignaling: true,
    sendMultipleVideoStreams: true,
    receiveMultipleVideoStreams: true
};

// ScreenShare Configuration.
//

// Audio configuration.
//

customConfig.enableNoAudioDetection = true;
customConfig.enableTalkWhileMuted = false;
customConfig.disableAP = false;

customConfig.audioQuality = {
    stereo: false
};

customConfig.startAudioOnly = false;
customConfig.startAudioMuted = 10;
customConfig.startWithAudioMuted = false;
customConfig.startSilent = false;
customConfig.enableOpusRed = false;
customConfig.disableAudioLevels = false;
customConfig.enableNoisyMicDetection = true;


// Peer-to-Peer options.
//

customConfig.p2p = {
    enabled: true
};


// Breakout Rooms
//

customConfig.hideAddRoomButton = false;


// Etherpad
//

customConfig.etherpad_base = 'https://player.globoroom.com/etherpad/p/';
// Recording.
//

// Local recording configuration.
customConfig.localRecording = {
    disable: false,
    notifyAllParticipants: false,
    disableSelfRecording: false
};


// Analytics.
//

customConfig.analytics = {};

// Dial in/out services.
//


// Calendar service integration.
//

customConfig.enableCalendarIntegration = false;

// Invitation service.
//

// Miscellaneous.
//

// Prejoin page.
customConfig.prejoinConfig = {
    enabled: true,

    // Hides the participant name editing field in the prejoin screen.
    hideDisplayName: false
};

// List of buttons to hide from the extra join options dropdown on prejoin screen.
// Welcome page.
customConfig.welcomePage = {
    disabled: false
};

// Close page.
customConfig.enableClosePage = false;

// Default language.
// Require users to always specify a display name.
customConfig.requireDisplayName = false;

// Chrome extension banner.
// Disables profile and the edit of all fields from the profile settings (display name and email)
customConfig.disableProfile = false;

// Room password (false for anything, number for max digits)
customConfig.roomPasswordNumberOfDigits = false;
// Advanced.
//

// Transcriptions (subtitles and buttons can be configured in interface_config)
customConfig.transcription = {
    enabled: false,
    translationLanguages: [],
    translationLanguagesHead: ['en'],
    useAppLanguage: true,
    preferredLanguage: 'en-US',
    disableStartForAll: false,
    autoCaptionOnRecord: false,
};

// Dynamic branding
// Deployment information.
//

customConfig.deploymentInfo = {};

// Deep Linking
customConfig.disableDeepLinking = false;

// P2P preferred codec
// Video quality settings.
//

customConfig.videoQuality = {};
customConfig.videoQuality.av1 = {};

customConfig.videoQuality.h264 = {};

customConfig.videoQuality.vp8 = {};

customConfig.videoQuality.vp9 = {};

// Reactions
customConfig.disableReactions = false;

// Polls
customConfig.disablePolls = false;

// Configure toolbar buttons
// Hides the buttons at pre-join screen
// Configure remote participant video menu
customConfig.remoteVideoMenu = {
    disabled: false,
    disableKick: false,
    disableGrantModerator: false,
    disablePrivateChat: false
};

// Configure e2eping
customConfig.e2eping = {
    enabled: false
};



// Settings for the Excalidraw whiteboard integration.
customConfig.whiteboard = {
    enabled: false,
    collabServerBaseUrl: ''
};

// Testing
customConfig.testing = {
    enableAv1Support: false
};

customConfig.defaultLogoUrl = 'images/mtms-logo.png';
customConfig.logoUrl = 'images/mtms-logo.png';
