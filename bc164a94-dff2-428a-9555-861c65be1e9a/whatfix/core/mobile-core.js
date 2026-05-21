/*! createdTime: Wed Dec 17 2025 17:01:24 GMT+0000 (Coordinated Universal Time) */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ (function() {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var filteredHierarchy = {};
var flattenedHierarchy = {};
var flattenedHierarchyArray = [];
var intervalTime = 2000;
var delayTimer = undefined;
var platform = "ANDROID";
var subPlatform = "";
var sdkVersion = 22;
var appApiKey = "";
var configBaseUrl = "";
var appVersionName = "";
var appVersionCode = 0;
var selectedLanguage = "";
var coreSdkVersionCode = "";
var appSessionId = "";
var totalHierarchyCount = 0;
var totalHierarchySizeSum = 0;
var maxHierarchySize = 0;
var avgHierarchySizeCalcInterval = undefined;
var lastProfileUpdatedAt = null;
var lastUpdatedConfigAt = undefined;
var lastUpdatedEmbedConfigAt = undefined;
var sortedProjectArray = [];
var allProjectStatus = {};
var embedProject = [];
var flowWalkthroughs = {};
var LiveFeatures = {};
var LiveMetaConfigs = {};
var features = {};
var metaConfigs = {};
var loggerConfig = {};
var customProperties = {};
var defaultProperties = {};
var flowShown = false;
var inPreviewMode = false;
var currentlyRunningFlow = {
    id: "",
    active: false,
};
var timer = undefined;
var tackProjectBeingIdentified = (/* unused pure expression or super */ null && ([]));
var prevMatchedIdentifiers = [];
var currentMatchedWebIdentifiers = {};
var previousBoundState = {};
var isSelfHosted = 0;
var segmentConfigMap = {};
var appObserverBaseUrl = "https://whatfix.com/";
var wfAppId = "";
var parentDeploymentVersion = "";
var connectProjectsParentMap = {};
var wfOrgId = "";
var jsMetadata = {};
var activeStep = {
    id: "",
    step: {},
    isAnchoredElement: false,
};
var activeProject = {
    id: "",
    projectType: "",
    iconSetting: {},
    isShowing: false,
    isAnchoredElement: false,
    standAlone: false,
    isAFlow: false,
    isAFlowMenu: false,
};
var currentStaticFlow = {
    id: undefined,
    status: undefined,
    completed: undefined,
    autoStart: false,
    stepsStatus: [],
};
var completedProjectsInFlow = {};
var finderObserverEvents = [];
var PLATFORMS = {
    DASHBOARD: "DASHBOARD",
    IOS: "IOS",
    REACT_NATIVE_IOS: "REACT_NATIVE_IOS",
    REACT_NATIVE_ANDROID: "REACT_NATIVE_ANDROID",
    ANDROID: "ANDROID",
    XAMARIN_ANDROID: "XAMARIN_ANDROID",
    XAMARIN_IOS: "XAMARIN_IOS",
    CORDOVA_ANDROID: "CORDOVA_ANDROID",
    CORDOVA_IOS: "CORDOVA_IOS",
    IONIC_ANDROID: "IONIC_ANDROID",
    IONIC_IOS: "IONIC_IOS",
    FLUTTER: "FLUTTER",
    JETPACK_COMPOSE_ANDROID: "JETPACK_COMPOSE_ANDROID",
    MAUI_ANDROID: "MAUI_ANDROID",
};
var SENDING_COMMANDS = {
    ON_CONFIG_FETCH: "ON_CONFIG_FETCH",
    WEB_SCRIPT: "WEB_SCRIPT",
    PROJECT_COMPLETED: "PROJECT_COMPLETED",
    SAVE_USER_STATE: "SAVE_USER_STATE",
    ANALYTICS_EVENT: "ANALYTICS_EVENT",
    EVENT_CALLBACK: "EVENT_CALLBACK",
    OBSERVER_LOG: "OBSERVER_LOG",
    NO_CONTEXT_FOUND: "NO_CONTEXT_FOUND",
    WALKTHROUGH_FOUND: "WALKTHROUGH_FOUND",
    UPDATE_ASSIST_BOUNDS: "UPDATE_ASSIST_BOUNDS",
    UPDATE_STEP_BOUNDS: "UPDATE_STEP_BOUNDS",
    STEP_FOUND: "STEP_FOUND",
    ASSIST_FOUND: "ASSIST_FOUND",
    HIERARCHY: "HIERARCHY",
    SAVE_USER_PROPS: "SAVE_USER_PROPS",
    OBSERVER_EVENT_LEVELS: "OBSERVER_EVENT_LEVELS",
    FLUSH_CACHED_EVENTS: "FLUSH_CACHED_EVENTS",
    CLEAR_ANALYTICS_PENDING_QUEUE: "CLEAR_ANALYTICS_PENDING_QUEUE",
    GET_PREF: "GET_PREF",
    SAVE_PREF: "SAVE_PREF",
    CLEAR_PREF: "CLEAR_PREF",
};
var RECEIVING_COMMANDS = {
    START: "START",
    SCREEN_HIERARCHY: "SCREEN_HIERARCHY",
    ASSIST_INTERACTION: "ASSIST_INTERACTION",
    WEB_IDENTIFIERS: "WEB_IDENTIFIERS",
    LANGUAGE_SELECTED: "LANGUAGE_SELECTED",
    ACTIVITY_PAUSE: "ACTIVITY_PAUSE",
    ACTIVITY_RESUME: "ACTIVITY_RESUME",
    ICON_STOP: "ICON_STOP",
    ICON_CLICK: "ICON_CLICK",
    ASSIST_VISIBLE: "ASSIST_VISIBLE",
    USER_PROPERTIES: "USER_PROPERTIES",
    EMBED_PROJECT: "EMBED_PROJECT",
    APP_LOCALE: "APP_LOCALE",
    PREVIEW_CONFIG: "PREVIEW_CONFIG",
    DISABLE_PANEL_EVENT: "DISABLE_PANEL_EVENT",
    STOP_PREVIEW: "STOP_PREVIEW",
    SET_USER_ID: "SET_USER_ID",
    LOGOUT: "LOGOUT",
    SURVEY_INFO: "SURVEY_INFO",
    PREF_RESPONSE: "PREF_RESPONSE",
    OBSERVER_LOG: "OBSERVER_LOG",
    NETWORK_SWITCH: "NETWORK_SWITCH",
};
var OBSERVER_EVENT_CATEGORIES = {
    NETWORK: "network",
    FINDER: "finder",
    USER: "user",
    PROJECT: "project",
    OPERATION: "operation",
    SDK: "sdk",
    ICON: "icon",
    ERROR: "error"
};
var OBSERVER_EVENTS = {
    NETWORK: {
        CONFIG_FETCH_STARTED: "config_fetch_started",
        CONFIG_FETCH_COMPLETED: "config_fetch_completed",
        CONFIG_FETCH_FAILED: "config_fetch_failed",
        USER_PROFILE_UPDATE_STARTED: "user_profile_update_started",
        USER_PROFILE_UPDATE_FINISHED: "user_profile_update_finished",
        USER_PROFILE_UPDATE_FAILED: "user_profile_update_failed",
        FETCH_OBSERVER_METADATA_STARTED: "fetch_observer_metadata_started",
        FETCH_OBSERVER_METADATA_FAILED: "fetch_observer_metadata_failed",
        FAILURE_IN_SENDING_SURVEY_ANALYTICS: "failure_in_sending_survey_analytics"
    },
    OPERATION: {
        AVG_HIERARCHY_SIZE: "AVG_HIERARCHY_SIZE",
    },
    FINDER: {
        RUNNING_DETECTION_LOGIC_FOR_PROJECTS: "running_detection_logic_for_projects",
        RUNNING_DETECTION_LOGIC_FOR_STEPS: "running_detection_logic_for_steps",
        SKIPPING_PROJECT_DUE_TO_OFFLINE_MODE: "skipping_project_due_to_offline_mode",
        SKIPPING_WEBVIEW_PROJECT_DUE_TO_EMPTY_MATCHED_WEB_IDENTIFIERS: "skipping_webview_project_due_to_empty_matched_web_identifiers",
        SKIPPING_WEBVIEW_STEP_DUE_TO_EMPTY_MATCHED_WEB_IDENTIFIERS: "skipping_webview_step_due_to_empty_matched_web_identifiers",
        SKIPPING_PROJECT_DUE_TO_COMPLETION: "skipping_project_due_to_completion",
        SKIPPING_PROJECT_DUE_TO_TERMINATION: "skipping_project_due_to_termination",
        STARTING_IDENTIFIER_MATCHING_FOR_PROJECT: "starting_identifier_matching_for_project",
        NATIVE_IDENTIFIER_MATCHING_STATUS: "native_identifier_matching_status",
        PROJECT_DETECTION_LOGIC_STATUS: "project_detection_logic_status",
        STEP_DETECTION_LOGIC_STATUS: "step_detection_logic_status",
        PAGE_IDENTIFIERS_MATCHING_STATUS: "page_identifiers_matching_status",
        IDENTIFIER_NOT_MATCHED: "identifier_not_matched",
        RENDERED_PROJECT_DETECTED: "rendered_project_detected",
        RENDERED_STEP_DETECTED: "rendered_step_detected",
        UPDATING_BOUNDS: "updating_bounds",
        PROJECT_DETECTED: "project_detected",
        NO_PROJECT_DETECTED: "no_project_detected",
        STEP_DETECTED: "step_detected",
        NO_STEP_DETECTED: "no_step_detected",
        ASSIST_VISIBLE: "assist_visible"
    },
    USER: {
        LOGIN: "login",
        ENQUEUING_PROFILE_UPDATE: "enqueuing_profile_update",
        LOGOUT: "logout"
    },
    PROJECT: {
        ONLY_CONSUMING_SAVED_STATE: "only_consuming_saved_state",
        ORGANIZE_PROJECT_METHOD_CALLED: "organize_project_method_called",
        ORGANIZING_PROJECT_DATA: "organizing_project_data",
        STARTING_FETCH_HIERARCHY_LOOP: "starting_fetch_hierarchy_loop",
        UPDATING_PROJECT_STATUS: "updating_project_status",
        UPDATING_PROJECT_TERMINATION_STATUS: "updating_project_termination_status",
        NO_ACTIVE_PROJECTS_FOUND: "no_active_projects_found"
    },
    SDK: {
        START_JS: "start_js",
        SDK_LOGGED: "sdk_logged",
        SENDING_ASSET_URLS_AND_CONFIG: "sending_asset_urls_and_config",
        SENDING_WEBSCRIPT: "sending_webscript",
        RECEIVING_WEB_IDENTIFIERS_STATUS: "receiving_web_identifiers_status",
        RECEIVING_COMMAND_FROM_NATIVE: "receiving_command_from_native",
        SENDING_COMMAND_TO_NATIVE: "sending_command_to_native",
        PREVIEW_STARTED: "preview_started",
        PREVIEW_STOP: "preview_stop",
    },
    ICON: {
        ICON_CLICK: "icon_click",
        ICON_STOP: "icon_stop",
        ICON_ASSIST_VISIBLE: "icon_assist_visible",
    },
    ERROR: {
        START_JS_FAILED_ERROR: "start_js_failed_error",
        CONFIG_READ_ERROR: "config_read_error",
        PROFILE_UPDATE_ENQUEUE_ERROR: "profile_update_enqueue_error",
        LOGIN_FAILED_ERROR: "login_failed_error",
        LOGOUT_FAILED_ERROR: "logout_failed_error",
        FAILURE_IN_EXECUTING_COMMAND_FROM_NATIVE: "failure_in_executing_command_from_native",
        FETCH_OBSERVER_METADATA_ERROR: "fetch_observer_metadata_error",
        UNHANDLED_JS_ERROR: "unhandled_js_error",
        UNHANDLED_PROMISE_REJECTION_ERROR: "unhandled_promise_rejection_error",
        SAVED_ANALYTICS_EVENTS_PARSING_ERROR: "saved_analytics_events_parsing_error",
        UNABLE_TO_PARSE_DATA_FROM_SHARED_PREFERENCES_ERROR: "unable_to_parse_data_from_shared_preferences_error",
        ERROR_IN_FILTERING_HIERARCHY: "error_in_filtering_hierarchy",
        ERROR_IN_FLATTENING_HIERARCHY: "error_in_flattening_hierarchy",
        ERROR_WHILE_PROCESSING_HIERARCHY_AND_RUNNING_FINDER_LOGIC: "error_while_processing_hierarchy_and_running_finder_logic",
    }
};
var ANALYTICS_EVENTS = {
    FLOW_START: "flow_start",
    FLOW_MENU_START: "flow_menu_start",
    FLOW_STOP: "flow_stop",
    FLOW_OPT_IN: "flow_opt_in",
    FLOW_OPT_OUT: "flow_opt_out",
    ELEMENT_SEEN: "element_seen",
    ELEMENT_ACTION: "element_action",
    FLOW_LANGUAGE_CHANGE: "flow_language_change",
    FLOW_SUCCESS: "flow_success",
    FLOW_DISABLE: "flow_disable",
    PROJECT_TERMINATION: "project_termination",
    PUBLIC_EVENTS_DISABLE: "public_events_disable",
    PUBLIC_EVENTS_START: "public_events_start",
    PUBLIC_EVENTS_USER_ID: "public_events_userid",
    PUBLIC_EVENTS_APP_LOCALE: "public_events_applocale",
    PUBLIC_EVENTS_LOGOUT: "public_events_logout",
    PUBLIC_EVENTS_PROJECT_ID: "public_events_embedproject",
    PUBLIC_EVENTS_PROPERTIES_FLUSH: "public_events_flush",
};
var ACTION_EVENT_TYPES = {
    DEEP_LINK: "deep_link",
    EXTERNAL_LINK: "external_link",
    CLOSE: "close",
};
var observerEventLevels = {
    on_sdk_started: 600,
    on_sdk_started_with_properties: 600,
    on_sdk_embed_project_called: 600,
    on_set_app_locale_called: 600,
    on_logout_called: 600,
    on_set_unique_user_id_called: 600,
    on_user_properties_flush_called: 600,
    config_fetch_started: 200,
    config_fetch_completed: 600,
    config_fetch_failed: 500,
    on_asset_download_started: 200,
    on_asset_download_completed: 200,
    on_screen_capture_started: 600,
    on_screen_capture_completed: 600,
    on_log_file_upload_started: 600,
    on_log_file_upload_completed: 600,
    on_preview_config_download_started: 600,
    on_preview_config_download_completed: 600,
    on_no_page_detected: 200,
    on_page_detected: 200,
    step_detected: 600,
    no_step_detected: 600,
    no_project_detected: 600,
    project_detected: 600,
    identifier_not_matched: 200,
    on_identifier_matched: 200,
    on_device_orientation_changed: 200,
    on_activity_resume: 200,
    on_activity_pause: 200,
    on_context_detection_started: 200,
    on_context_detection_stopped: 200,
    on_button_action_performed: 600,
    on_project_start_opt_in_action_performed: 600,
    on_close_button_action_performed: 600,
    on_project_start_dismiss_action_performed: 600,
    on_outside_click_action_performed: 600,
    on_anchor_click_action_performed: 600,
    on_project_step_end_flow_action_performed: 600,
    on_project_step_external_link_redirection_action_performed: 600,
    on_project_step_deep_link_redirection_action_performed: 600,
    on_project_start_external_link_redirection_action_performed: 600,
    on_project_start_deep_link_redirection_action_performed: 600,
    on_project_step_next_action_performed: 600,
    on_project_success_action_performed: 600,
    on_carousel_arrow_action_performed: 600,
    on_carousel_swipe_action_performed: 600,
    on_project_preview_started: 600,
    on_project_preview_cancelled: 600,
    on_project_selection_action_performed: 600,
    on_project_start_loaded: 200,
    on_project_step_loaded: 200,
    on_language_panel_loaded: 200,
    on_project_start_animation_started: 200,
    on_project_step_animation_started: 200,
    on_language_panel_animation_started: 200,
    on_project_start_animation_completed: 200,
    on_project_step_animation_completed: 200,
    on_language_panel_animation_completed: 200,
    on_project_start_render_completed: 600,
    on_project_step_render_completed: 600,
    on_language_panel_render_completed: 600,
    on_carousel_slide_render_completed: 600,
};
var LeapDataType = {
    INTEGER: "INTEGER",
    TIME: "TIME",
    STRING: "STRING",
    APP_VERSION_CODE: "APP_VERSION_CODE",
    APP_VERSION_NAME: "APP_VERSION_NAME",
};
var LeapOperatorKey = {
    IS: "IS",
    IS_NOT: "IS_NOT",
    IS_EQUAL_TO: "IS_EQUAL_TO",
    IS_NOT_EQUAL_TO: "IS_NOT_EQUAL_TO",
    LESS_THAN: "LESS_THAN",
    LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
    GREATER_THAN: "GREATER_THAN",
    GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
    TIME_ELAPSED_LESS_THAN: "TIME_ELAPSED_LESS_THAN",
    TIME_ELAPSED_GREATER_THAN: "TIME_ELAPSED_GREATER_THAN",
};
var selfHostingEndPoints = {
    SELF_HOSTING: "/whatfix",
    SEGMENT_CONFIG_FOLDER: "/config/segments/",
};
var appLocale = "";
var forceSendObserverLogs = false;
var jsVersionNumber = 5081;
var userSessionId;
var isUserLoggedIn = false;
var defaultLanguage = "";
var disableObserverLogging = false;
var hierarchyCommandLastSentAt = 0;
var hierarchyCommandLastResponseAt = 0;
var waitingForResponse = false;
var hierarchyCommandFallbackTimeout = 10000;
var hierarchyFetchTimeTakenLogBuffer = 50;
var ObserverLogLevel = {
    ALL: 100,
    DEBUG: 200,
    WARNING: 300,
    PERFORMANCE: 400,
    ERROR: 500,
    INFO: 600,
    NFR: 700
};
var observerDataSize = {
    numberOfEvents: 0,
    totalSize: 0,
    avgSize: 0,
    keys: {}
};
var webviewScrollThresholds = {
    WIDTH: 0,
    HEIGHT: 0.1,
    TOP: 50,
    LEFT: 0,
};
var CacheStore = (function () {
    function CacheStore() {
    }
    CacheStore.prototype.save = function (preferenceKey, dataQueue) {
        if (dataQueue === void 0) { dataQueue = []; }
        if (!preferenceKey)
            return;
        sendMessageToNative({
            command: SENDING_COMMANDS.SAVE_PREF,
            data: {
                key: preferenceKey,
                value: JSON.stringify(dataQueue)
            }
        }, generateUUID());
        console.debug("cacheStore.save() preferenceKey-", preferenceKey, " dataQueue-", JSON.stringify(dataQueue));
        console.info("cacheStore.save() preferenceKey-", preferenceKey, " data Size-", dataQueue.length);
    };
    CacheStore.prototype.clear = function (preferenceKey) {
        if (!preferenceKey)
            return;
        sendMessageToNative({
            command: SENDING_COMMANDS.CLEAR_PREF,
            data: {
                key: preferenceKey,
            }
        }, generateUUID());
        console.info("cacheStore.clear() preferenceKey-", JSON.stringify(preferenceKey));
    };
    CacheStore.prototype.get = function (preferenceKey) {
        if (!preferenceKey)
            return;
        sendMessageToNative({
            command: SENDING_COMMANDS.GET_PREF,
            data: {
                key: preferenceKey,
            }
        }, generateUUID());
        console.info("cacheStore.clear() preferenceKey-", JSON.stringify(preferenceKey));
    };
    return CacheStore;
}());
var getBoundingArea = function (bound) {
    return bound !== undefined &&
        ((bound === null || bound === void 0 ? void 0 : bound.right) - (bound === null || bound === void 0 ? void 0 : bound.left)) * ((bound === null || bound === void 0 ? void 0 : bound.bottom) - (bound === null || bound === void 0 ? void 0 : bound.top));
};
function isArrayMatched(arr1, arr2) {
    if (!arr1 || !arr2) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    var sortedArr1 = arr1.slice().sort();
    var sortedArr2 = arr2.slice().sort();
    for (var i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}
function decompressGzipString(gzippedBase64) {
    return __awaiter(this, void 0, void 0, function () {
        var compressedData, compressedBlob, dsInstance, decompressedStream, decompressedBlob, decompressedText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compressedData = Uint8Array.from(atob(gzippedBase64), function (c) {
                        return c.charCodeAt(0);
                    });
                    compressedBlob = new Blob([compressedData]);
                    dsInstance = new DecompressionStream("gzip");
                    decompressedStream = compressedBlob.stream().pipeThrough(dsInstance);
                    return [4, new Response(decompressedStream).blob()];
                case 1:
                    decompressedBlob = _a.sent();
                    return [4, decompressedBlob.text()];
                case 2:
                    decompressedText = _a.sent();
                    return [2, decompressedText];
            }
        });
    });
}
function hasAllValidKeys(project) {
    var requiredKeys = [
        "id",
        "projectType",
        "shownOnce",
        "isShown",
        "isCompleted",
        "isFlowTriggered",
        "isTerminated",
        "triggerCase",
        "initialTerminationStatus",
        "terminationStatus",
    ];
    var hasKeys = requiredKeys.every(function (key) { return key in project; });
    var hasValidObjects = typeof project.initialTerminationStatus === "object" &&
        project.initialTerminationStatus !== null &&
        typeof project.terminationStatus === "object" &&
        project.terminationStatus !== null;
    return hasKeys && hasValidObjects;
}
function noActiveProjects() {
    return (!(activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) &&
        (sortedProjectArray === null || sortedProjectArray === void 0 ? void 0 : sortedProjectArray.every(function (project) {
            var _a, _b, _c;
            if ((allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) && !hasAllValidKeys(allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]))
                return false;
            if ((_a = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _a === void 0 ? void 0 : _a.isTerminated) {
                return true;
            }
            if (!((_b = project.id) === null || _b === void 0 ? void 0 : _b.includes("discovery")) && ((_c = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _c === void 0 ? void 0 : _c.isCompleted)) {
                return true;
            }
            return !checkToShowProject(project === null || project === void 0 ? void 0 : project.id);
        })));
}
function calculateAvgHierarchySize(screenHierarchy, traceId) {
    var _a;
    if (!screenHierarchy)
        return;
    totalHierarchyCount++;
    var stringifiedHierarchy = JSON.stringify(screenHierarchy);
    maxHierarchySize = Math.max(maxHierarchySize, stringifiedHierarchy.length);
    totalHierarchySizeSum += stringifiedHierarchy.length;
    if (!avgHierarchySizeCalcInterval) {
        avgHierarchySizeCalcInterval = setTimeout(function () {
            var _a, _b;
            if (!totalHierarchyCount)
                return;
            var avgHierarchySize = Math.round(totalHierarchySizeSum / totalHierarchyCount);
            if ((avgHierarchySize > (((_a = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _a === void 0 ? void 0 : _a.avgSizeThreshold) || 0)) ||
                (maxHierarchySize > (((_b = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _b === void 0 ? void 0 : _b.maxSizeThreshold) || 0))) {
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.OPERATION,
                    event_name: OBSERVER_EVENTS.OPERATION.AVG_HIERARCHY_SIZE,
                    properties: {
                        avg_hierarchy_size: avgHierarchySize,
                        max_hierarchy_size: maxHierarchySize,
                        hierarchy_count: totalHierarchyCount,
                    },
                    level: ObserverLogLevel.INFO,
                }, traceId);
            }
            totalHierarchyCount = 0;
            totalHierarchySizeSum = 0;
            maxHierarchySize = 0;
            avgHierarchySizeCalcInterval = undefined;
        }, ((_a = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) === null || _a === void 0 ? void 0 : _a.loopInterval) || 60000);
    }
}
function compareVersions(version1, version2) {
    var v1 = version1.split(".").map(Number);
    var v2 = version2.split(".").map(Number);
    for (var i = 0; i < Math.max(v1.length, v2.length); i++) {
        if ((v1[i] || 0) > (v2[i] || 0))
            return 1;
        if ((v1[i] || 0) < (v2[i] || 0))
            return -1;
    }
    return 0;
}
function validateAppVersionNameRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }
    var comparisonResult = compareVersions(propertyValue, value);
    switch (operatorKey) {
        case LeapOperatorKey.IS_EQUAL_TO:
            return comparisonResult === 0;
        case LeapOperatorKey.GREATER_THAN:
            return comparisonResult > 0;
        case LeapOperatorKey.GREATER_THAN_OR_EQUAL_TO:
            return comparisonResult >= 0;
        case LeapOperatorKey.LESS_THAN:
            return comparisonResult < 0;
        case LeapOperatorKey.LESS_THAN_OR_EQUAL_TO:
            return comparisonResult <= 0;
        default:
            return false;
    }
}
function validateTimeRule(propertyValue, value, operatorKey, unit) {
    if (propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)) {
        return false;
    }
    var multiplier = 1;
    if (unit) {
        switch (unit) {
            case "hours":
                multiplier = 3600;
                break;
            case "minutes":
                multiplier = 60;
                break;
            default:
                break;
        }
    }
    var intValue = parseInt(value);
    var currentTime = Math.floor(Date.now() / 1000);
    switch (operatorKey) {
        case LeapOperatorKey.TIME_ELAPSED_GREATER_THAN:
            return currentTime - propertyValue > intValue * multiplier;
        case LeapOperatorKey.TIME_ELAPSED_LESS_THAN:
            return currentTime - propertyValue < intValue * multiplier;
        default:
            return false;
    }
}
function validateIntegerRule(propertyValue, value, operatorKey) {
    if (propertyValue == null ||
        value == null ||
        isNaN(propertyValue) ||
        isNaN(value)) {
        return false;
    }
    var intValue = parseInt(value);
    switch (operatorKey) {
        case LeapOperatorKey.IS_EQUAL_TO:
            return propertyValue === intValue;
        case LeapOperatorKey.IS_NOT_EQUAL_TO:
            return propertyValue !== intValue;
        case LeapOperatorKey.GREATER_THAN:
            return propertyValue > intValue;
        case LeapOperatorKey.LESS_THAN:
            return propertyValue < intValue;
        case LeapOperatorKey.GREATER_THAN_OR_EQUAL_TO:
            return propertyValue >= intValue;
        case LeapOperatorKey.LESS_THAN_OR_EQUAL_TO:
            return propertyValue <= intValue;
        default:
            return false;
    }
}
function validateStringRule(propertyValue, value, operatorKey) {
    if (propertyValue == null || value == null) {
        return false;
    }
    if (operatorKey === LeapOperatorKey.IS) {
        return propertyValue === value;
    }
    else if (operatorKey === LeapOperatorKey.IS_NOT) {
        return propertyValue !== value;
    }
    return false;
}
function isRuleValid(rule) {
    var dataType = rule.dataType, propertyKey = rule.propertyKey, operator = rule.operator, value = rule.value, unit = rule.unit;
    var allProperties = __assign(__assign({}, defaultProperties), customProperties);
    switch (dataType) {
        case LeapDataType.STRING:
            return validateStringRule(allProperties[propertyKey], value, operator);
        case LeapDataType.INTEGER:
            return validateIntegerRule(allProperties[propertyKey], value, operator);
        case LeapDataType.TIME:
            return validateTimeRule(allProperties[propertyKey], value, operator, unit);
        case LeapDataType.APP_VERSION_CODE:
            return (platform === PLATFORMS.ANDROID &&
                validateIntegerRule(appVersionCode, value, operator));
        case LeapDataType.APP_VERSION_NAME:
            return (platform === PLATFORMS.IOS &&
                validateAppVersionNameRule(appVersionName, value, operator));
        default:
            return false;
    }
}
function isSegmentValid(segmentOrBlocks) {
    var e_1, _a, e_2, _b;
    if (!segmentOrBlocks || segmentOrBlocks.length === 0) {
        return true;
    }
    try {
        for (var segmentOrBlocks_1 = __values(segmentOrBlocks), segmentOrBlocks_1_1 = segmentOrBlocks_1.next(); !segmentOrBlocks_1_1.done; segmentOrBlocks_1_1 = segmentOrBlocks_1.next()) {
            var orBlock = segmentOrBlocks_1_1.value;
            var isAllTrue = true;
            try {
                for (var _c = (e_2 = void 0, __values(orBlock.andBlocks || [])), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var andBlock = _d.value;
                    if (!isRuleValid(andBlock)) {
                        isAllTrue = false;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (isAllTrue)
                return true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (segmentOrBlocks_1_1 && !segmentOrBlocks_1_1.done && (_a = segmentOrBlocks_1.return)) _a.call(segmentOrBlocks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
function getJavaType(value) {
    if (typeof value === "number") {
        if (value > 2147483647)
            return "long";
        return "int";
    }
    return typeof value;
}
function appendTypesToKeys(body) {
    var updatedBody = {};
    Object.keys(body).forEach(function (key) {
        if (["max_hierarchy_size", "avg_hierarchy_size", "timestamp"].includes(key)) {
            updatedBody["long.".concat(key)] = body[key];
        }
        else {
            updatedBody["".concat(getJavaType(body[key]), ".").concat(key)] = body[key];
        }
    });
    return updatedBody;
}
function isInsideBounds(nodeABounds, nodeBBounds) {
    return (nodeABounds &&
        nodeBBounds &&
        nodeABounds.left < nodeABounds.right &&
        nodeABounds.top < nodeABounds.bottom &&
        nodeABounds.top <= nodeBBounds.top &&
        nodeABounds.left <= nodeBBounds.left &&
        nodeABounds.right >= nodeBBounds.right &&
        nodeABounds.bottom >= nodeBBounds.bottom);
}
function isAClickableNode(bounds) {
    return ((this === null || this === void 0 ? void 0 : this.left) < (this === null || this === void 0 ? void 0 : this.right) &&
        (this === null || this === void 0 ? void 0 : this.top) < (this === null || this === void 0 ? void 0 : this.bottom) &&
        (this === null || this === void 0 ? void 0 : this.left) <= (bounds === null || bounds === void 0 ? void 0 : bounds.left) &&
        (this === null || this === void 0 ? void 0 : this.top) <= (bounds === null || bounds === void 0 ? void 0 : bounds.top) &&
        (this === null || this === void 0 ? void 0 : this.right) >= (bounds === null || bounds === void 0 ? void 0 : bounds.right) &&
        (this === null || this === void 0 ? void 0 : this.bottom) >= (bounds === null || bounds === void 0 ? void 0 : bounds.bottom));
}
function checkIfIdentifierMatch(matchedIdentifier, identifierToMatch) {
    var set1 = new Set(matchedIdentifier);
    return identifierToMatch === null || identifierToMatch === void 0 ? void 0 : identifierToMatch.every(function (element) { return set1.has(element); });
}
function generateUUID() {
    function randomHexDigit() {
        return Math.floor(Math.random() * 16).toString(16);
    }
    function replacePlaceholders(char) {
        var random = randomHexDigit();
        if (char === "x") {
            return random;
        }
        else if (char === "y") {
            return ((parseInt(random, 16) & 0x3) | 0x8).toString(16);
        }
        return char;
    }
    var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    return template.replace(/[xy]/g, replacePlaceholders);
}
function isValidDateString(dateString) {
    var gmtRegex = /^[A-Za-z]{3}\s[A-Za-z]{3}\s\d{1,2}\s\d{2}:\d{2}:\d{2}\s(GMT|GMT[+-]\d{2}(:\d{2})?)\s\d{4}$/;
    var isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (isoRegex.test(dateString) || gmtRegex.test(dateString)) {
        var date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            return true;
        }
    }
    return false;
}
var getWidth = function (element) { return parseInt(element.right) - parseInt(element.left); };
var getHeight = function (element) { return parseInt(element.bottom) - parseInt(element.top); };
var checkForEmptyBounds = function (bounds) {
    return getWidth(bounds) <= 0 || getHeight(bounds) <= 0;
};
function findTerminationStatuses(project, savedAllProjectStatus) {
    var _a, _b, _c, _d, _e, _f;
    var terminationTemplate = {
        perSession: 0,
        perApp: 0,
        untilAllFlowsAreCompleted: false,
        nSession: 0,
        nDismissedByUser: 0,
    };
    var objKey = ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].uniqueID) || ((_b = project.assists) === null || _b === void 0 ? void 0 : _b[0].uniqueID);
    var initialTerminationStatus = ((_c = project.discoveryList) === null || _c === void 0 ? void 0 : _c[0].uniqueID) !== undefined
        ? (_d = project.discoveryList) === null || _d === void 0 ? void 0 : _d[0].flowTerminationFrequency
        : (_e = project.assists) === null || _e === void 0 ? void 0 : _e[0].terminationFrequency;
    var isTerminationStatusObjectExisting = (savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) && ((_f = savedAllProjectStatus[objKey]) === null || _f === void 0 ? void 0 : _f.terminationStatus);
    var terminationStatus = isTerminationStatusObjectExisting ? savedAllProjectStatus[objKey].terminationStatus
        : __assign({}, terminationTemplate);
    if (!initialTerminationStatus) {
        initialTerminationStatus = {
            perSession: -1,
            perApp: -1,
            untilAllFlowsAreCompleted: false,
            nSession: -1,
            nDismissedByUser: -1,
        };
    }
    return {
        objKey: objKey,
        initialTerminationStatus: initialTerminationStatus,
        terminationStatus: terminationStatus,
    };
}
function organizeProject(project, objKey, initialTerminationStatus, terminationStatus) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    return {
        id: objKey,
        isAFlow: objKey.includes("discovery"),
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(project.projectParameters.projectType),
        isWebView: objKey.includes("discovery")
            ? ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].webIdentifiers) !== undefined
            : project.webIdentifiers !== undefined,
        assist: objKey.includes("discovery")
            ? (_b = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _b === void 0 ? void 0 : _b[0]
            : (_c = project === null || project === void 0 ? void 0 : project.assists) === null || _c === void 0 ? void 0 : _c[0],
        flows: project.flows,
        isAnchoredElement: objKey.includes("discovery")
            ? false
            : !!((_f = (_e = (_d = project === null || project === void 0 ? void 0 : project.assists) === null || _d === void 0 ? void 0 : _d[0].instruction) === null || _e === void 0 ? void 0 : _e.assistInfo) === null || _f === void 0 ? void 0 : _f.identifier),
        targetId: objKey.includes("discovery")
            ? ""
            : (_j = (_h = (_g = project === null || project === void 0 ? void 0 : project.assists) === null || _g === void 0 ? void 0 : _g[0].instruction) === null || _h === void 0 ? void 0 : _h.assistInfo) === null || _j === void 0 ? void 0 : _j.identifier,
        triggerDelay: objKey.includes("discovery")
            ? ((_k = project.discoveryList) === null || _k === void 0 ? void 0 : _k[0].trigger.type) === "instant"
                ? 0
                : (_l = project.discoveryList) === null || _l === void 0 ? void 0 : _l[0].trigger.delay
            : ((_m = project === null || project === void 0 ? void 0 : project.assists) === null || _m === void 0 ? void 0 : _m[0].trigger.type) === "instant"
                ? 0
                : (_o = project === null || project === void 0 ? void 0 : project.assists) === null || _o === void 0 ? void 0 : _o[0].trigger.delay,
        initialTerminationStatus: initialTerminationStatus,
        terminationStatus: terminationStatus,
        nativeIdentifiers: project.nativeIdentifiers,
        webIdentifiers: project.webIdentifiers,
        auiContent: project.auiContent,
        localeSounds: project.localeSounds,
        projectParameters: project.projectParameters,
        webViewList: project.webViewList,
        languages: project.languages,
        connectedProjects: (project === null || project === void 0 ? void 0 : project.connectedProjects) || [],
        triggerCase: (_r = (_q = (_p = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.triggerFrequency) === null || _r === void 0 ? void 0 : _r.type,
        isIconEnabled: !!((_t = (_s = project.discoveryList) === null || _s === void 0 ? void 0 : _s[0]) === null || _t === void 0 ? void 0 : _t.enableIcon),
        iconSetting: __assign(__assign({}, (_u = Object.values((project === null || project === void 0 ? void 0 : project.iconSetting) || {})) === null || _u === void 0 ? void 0 : _u[0]), { stopEnabled: typeof ((_v = features === null || features === void 0 ? void 0 : features.iconOptions) === null || _v === void 0 ? void 0 : _v.stopEnabled) === "boolean"
                ? (_w = features === null || features === void 0 ? void 0 : features.iconOptions) === null || _w === void 0 ? void 0 : _w.stopEnabled
                : true }),
    };
}
function sortAndOrganizeProjects(projects, embedProject, savedAllProjectStatus, savedCompletedProjectsInFlow) {
    if (embedProject === void 0) { embedProject = false; }
    var specifiedOrder = [
        "STATIC_FLOW",
        "STATIC_FLOW_MENU",
        "STATIC_FLOW_CHECKLIST",
    ];
    var projectTypeOrder = new Map(specifiedOrder.map(function (type, index) { return [type, index]; }));
    var priorityOrder = [];
    var priorityLessOrder = [];
    var flowWalkthroughs = [];
    projects.forEach(function (project) {
        connectProjectsParentMap = initialiseConnectedProjectsParentObjectMap(project);
        if (project.projectParameters.deploymentType === "LINK") {
            flowWalkthroughs.push(project);
            return;
        }
        if (project.projectParameters.priority === null) {
            priorityLessOrder.push(project);
        }
        else {
            priorityOrder.push(project);
        }
    });
    priorityOrder.sort(function (a, b) { return a.projectParameters.priority - b.projectParameters.priority; });
    priorityLessOrder.sort(function (a, b) {
        var typeA = projectTypeOrder.has(a.projectParameters.projectType)
            ? projectTypeOrder.get(a.projectParameters.projectType)
            : -1;
        var typeB = projectTypeOrder.has(b.projectParameters.projectType)
            ? projectTypeOrder.get(b.projectParameters.projectType)
            : -1;
        return typeA - typeB;
    });
    var sortedProjects = __spreadArray(__spreadArray([], __read(priorityOrder), false), __read(priorityLessOrder), false);
    var organizedProjects = [];
    var flowsWalkthroughProjects = {};
    var projectStatus = {};
    var initialCompletedProjectsInFlow = {};
    sortedProjects === null || sortedProjects === void 0 ? void 0 : sortedProjects.forEach(function (project) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _j = findTerminationStatuses(project, savedAllProjectStatus), objKey = _j.objKey, initialTerminationStatus = _j.initialTerminationStatus, terminationStatus = _j.terminationStatus;
        organizedProjects.push(organizeProject(project, objKey, initialTerminationStatus, terminationStatus));
        if (project.connectedProjects !== undefined) {
            computeCompletedProjectsInFlow(project, objKey, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow);
        }
        projectStatus[objKey] = {
            id: objKey,
            projectType: project.projectParameters.projectType,
            shownOnce: ((_a = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _a === void 0 ? void 0 : _a.shownOnce) || false,
            isShown: ((_b = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _b === void 0 ? void 0 : _b.isShown) || false,
            isCompleted: ((_c = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _c === void 0 ? void 0 : _c.isCompleted) || false,
            isFlowTriggered: ((_d = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _d === void 0 ? void 0 : _d.isFlowTriggered) || false,
            isTerminated: ((_e = savedAllProjectStatus === null || savedAllProjectStatus === void 0 ? void 0 : savedAllProjectStatus[objKey]) === null || _e === void 0 ? void 0 : _e.isTerminated) || false,
            triggerCase: (_h = (_g = (_f = project === null || project === void 0 ? void 0 : project.discoveryList) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.triggerFrequency) === null || _h === void 0 ? void 0 : _h.type,
            initialTerminationStatus: initialTerminationStatus,
            terminationStatus: terminationStatus,
        };
    });
    flowWalkthroughs === null || flowWalkthroughs === void 0 ? void 0 : flowWalkthroughs.forEach(function (project) {
        var _a, _b, _c, _d, _e;
        var _f = findTerminationStatuses(project, savedAllProjectStatus), objKey = _f.objKey, initialTerminationStatus = _f.initialTerminationStatus, terminationStatus = _f.terminationStatus;
        flowsWalkthroughProjects[project.projectParameters.deploymentId] =
            organizeProject(project, objKey, initialTerminationStatus, terminationStatus);
        if (embedProject) {
            projectStatus[objKey] = {
                id: objKey,
                projectType: project.projectParameters.projectType,
                shownOnce: false,
                isShown: false,
                isCompleted: false,
                isFlowTriggered: false,
                isTerminated: false,
                triggerCase: ((_a = project.discoveryList) === null || _a === void 0 ? void 0 : _a[0].uniqueID) !== undefined
                    ? (_c = (_b = project.discoveryList) === null || _b === void 0 ? void 0 : _b[0].triggerFrequency) === null || _c === void 0 ? void 0 : _c.type
                    : (_e = (_d = project.assists) === null || _d === void 0 ? void 0 : _d[0].triggerFrequency) === null || _e === void 0 ? void 0 : _e.type,
                initialTerminationStatus: initialTerminationStatus,
                terminationStatus: terminationStatus,
                connectProjectsParentMap: connectProjectsParentMap
            };
        }
    });
    return {
        sortedProjects: organizedProjects,
        projectStatus: projectStatus,
        flowsWalkthroughProjects: flowsWalkthroughProjects,
        initialCompletedProjectsInFlow: initialCompletedProjectsInFlow,
    };
}
function initialiseConnectedProjectsParentObjectMap(project) {
    var _a;
    try {
        var projectId = (_a = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _a === void 0 ? void 0 : _a.projectId;
        var map_1 = (connectProjectsParentMap || {});
        if ((project === null || project === void 0 ? void 0 : project.connectedProjects) && (project === null || project === void 0 ? void 0 : project.connectedProjects.length) > 0 && projectId) {
            var projectDetails_1 = {};
            projectDetails_1.projectType = project === null || project === void 0 ? void 0 : project.projectParameters.projectType;
            projectDetails_1.projectId = project === null || project === void 0 ? void 0 : project.projectParameters.projectId;
            projectDetails_1.deploymentId = project === null || project === void 0 ? void 0 : project.projectParameters.deploymentId;
            projectDetails_1.deploymentVersion = project === null || project === void 0 ? void 0 : project.projectParameters.deploymentVersion;
            projectDetails_1.deploymentName = project === null || project === void 0 ? void 0 : project.projectParameters.deploymentName;
            projectDetails_1.projectName = project === null || project === void 0 ? void 0 : project.projectParameters.projectName;
            project === null || project === void 0 ? void 0 : project.connectedProjects.forEach(function (connectedProject) {
                map_1[connectedProject.projectId] = projectDetails_1;
            });
            return map_1;
        }
        return map_1;
    }
    catch (error) {
        console.error(error);
        return ({});
    }
}
function checkToShowProject(id) {
    var project = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[id];
    if (!project)
        return false;
    var initialTerminationStatus = project === null || project === void 0 ? void 0 : project.initialTerminationStatus;
    var terminationStatus = project === null || project === void 0 ? void 0 : project.terminationStatus;
    if (!terminationStatus)
        return true;
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nSession) !== -1) {
        return !!(terminationStatus.nSession < initialTerminationStatus.nSession ||
            allProjectStatus[project.id].shownOnce);
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nDismissedByUser) !== -1 &&
        (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.nDismissedByUser) === 0) {
        return true;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.perApp) !== -1) {
        return terminationStatus.perApp < initialTerminationStatus.perApp;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted) &&
        !(terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.untilAllFlowsAreCompleted)) {
        return true;
    }
    if ((initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nSession) === -1 &&
        (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nDismissedByUser) === -1 &&
        (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.perApp) === -1 &&
        !(initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted)) {
        return true;
    }
    else {
        return false;
    }
}
function removeProjectFromStatusArray(_a, traceId) {
    var _b;
    var _c = _a.id, id = _c === void 0 ? undefined : _c, _d = _a.isTerminated, isTerminated = _d === void 0 ? false : _d, _e = _a.terminatedByIcon, terminatedByIcon = _e === void 0 ? false : _e, _f = _a.saveState, saveState = _f === void 0 ? true : _f;
    var activeProjectId = id
        ? id
        : (currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id) === ""
            ? activeProject === null || activeProject === void 0 ? void 0 : activeProject.id
            : currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id;
    var index = embedProject
        .concat(sortedProjectArray)
        .findIndex(function (s) { return s.id === activeProjectId; });
    if (index !== -1 && ((_b = embedProject === null || embedProject === void 0 ? void 0 : embedProject[0]) === null || _b === void 0 ? void 0 : _b.id) === activeProjectId)
        embedProject = [];
    updateProjectStatus({
        id: activeProjectId,
        isCompleted: !isTerminated,
        isTerminated: isTerminated,
        terminatedByIcon: isTerminated && terminatedByIcon,
    }, traceId);
    if (saveState) {
        updateUserProfile(traceId);
    }
}
function updateViewStatusForTheProject(activeProjectId, key, traceId) {
    if (activeProjectId !== undefined) {
        var project = allProjectStatus[activeProjectId];
        var initialTerminationStatus = project === null || project === void 0 ? void 0 : project.initialTerminationStatus;
        var terminationStatus = project === null || project === void 0 ? void 0 : project.terminationStatus;
        var updated = void 0;
        if (terminationStatus === undefined)
            return;
        if ((project === null || project === void 0 ? void 0 : project.triggerCase) === "PLAY_ONCE")
            updateProjectStatus({ id: project.id, isFlowTriggered: true }, traceId);
        if (key === "nSession" && project.shownOnce === false) {
            ++terminationStatus.nSession;
            updated = {
                nSession: terminationStatus.nSession
            };
            if (terminationStatus.nSession >= initialTerminationStatus.nSession) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: "nSession: ".concat(initialTerminationStatus.nSession),
                }, traceId);
            }
            allProjectStatus[project.id] = __assign(__assign({}, allProjectStatus[project.id]), { shownOnce: true });
        }
        else if (key === "nDismissedByUser") {
            terminationStatus.nDismissedByUser = 1;
            updated = {
                nDismissedByUser: terminationStatus.nDismissedByUser
            };
            if (initialTerminationStatus.nDismissedByUser !== -1) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: "nDismissedByUser: ".concat(initialTerminationStatus.nDismissedByUser),
                }, traceId);
                removeProjectFromStatusArray({ saveState: false }, traceId);
            }
        }
        else if (key === "perApp") {
            ++terminationStatus.perApp;
            updated = {
                perApp: terminationStatus.perApp
            };
            if (terminationStatus.perApp >= initialTerminationStatus.perApp) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: "perApp: ".concat(initialTerminationStatus.perApp),
                }, traceId);
                removeProjectFromStatusArray({ saveState: false }, traceId);
            }
        }
        else if (key === "untilAllFlowsAreCompleted") {
            terminationStatus.untilAllFlowsAreCompleted = true;
            updated = {
                untilAllFlowsAreCompleted: terminationStatus.untilAllFlowsAreCompleted
            };
            if (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.untilAllFlowsAreCompleted) {
                sendAnalyticEvent(ANALYTICS_EVENTS.PROJECT_TERMINATION, {
                    terminationRule: "untilAllFlowsAreCompleted: ".concat(initialTerminationStatus.untilAllFlowsAreCompleted),
                }, traceId);
                removeProjectFromStatusArray({ saveState: false }, traceId);
            }
        }
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.PROJECT.UPDATING_PROJECT_TERMINATION_STATUS,
            category: OBSERVER_EVENT_CATEGORIES.PROJECT,
            properties: __assign({ project_id: activeProjectId }, updated),
            level: ObserverLogLevel.DEBUG,
        }, traceId);
        updateUserProfile(traceId);
    }
}
function areAllProjectsCompleted(data) {
    var e_3, _a;
    try {
        for (var _b = __values(data.projects), _c = _b.next(); !_c.done; _c = _b.next()) {
            var project = _c.value;
            if (!project.completed) {
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return true;
}
function getTriggerConditionForStaticFlow(condition, isShown, triggeredAlready) {
    switch (condition) {
        case "EVERY_SESSION":
        case "PLAY_ONCE":
        case "EVERY_SESSION_UNTIL_DISMISSED":
        case "EVERY_SESSION_UNTIL_FLOW_COMPLETE":
        case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED": {
            return triggeredAlready ? "ICON" : isShown ? "ICON" : "SHOW";
        }
        case "MANUAL_TRIGGER": {
            return "ICON";
        }
    }
}
function setSelectedLanguage(languages, languageCode) {
    if (languageCode) {
        var found = languages.find(function (l) { return l.localeId === languageCode; });
        if (found) {
            return found.localeId;
        }
    }
    var codeToUse = languages.length === 1 ? languages[0].localeId : "";
    return codeToUse || defaultLanguage;
}
function logCat(data) {
    var pattern = /"http[s]?:\/\/[^"]*"/g;
    return JSON.stringify(data).replace(pattern, '""');
}
function parseRegexString(regexString) {
    var match = regexString.match(/^\/(.*)\/([gimsuy]*)$/);
    if (match) {
        var pattern = match[1];
        var flags = match[2];
        return new RegExp(pattern, flags);
    }
    else {
        return new RegExp(regexString);
    }
}
function getElapsedTimeInSeconds(timestamp) {
    var currentTime = new Date(new Date().toUTCString()).getTime();
    var timeStampToDateTime = new Date(new Date(timestamp).toUTCString()).getTime();
    var elapsedTime = currentTime - timeStampToDateTime;
    var elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
    return elapsedTimeInSeconds;
}
var SequentialExecutor = (function () {
    function SequentialExecutor() {
        this.queue = [];
        this.isRunning = false;
    }
    SequentialExecutor.prototype.addTask = function (task) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queue.push({ task: task, resolve: resolve, reject: reject });
            _this.executeNext();
        });
    };
    SequentialExecutor.prototype.executeNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, task, resolve, reject, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isRunning || this.queue.length === 0) {
                            return [2];
                        }
                        this.isRunning = true;
                        _a = this.queue.shift(), task = _a.task, resolve = _a.resolve, reject = _a.reject;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4, task()];
                    case 2:
                        result = _b.sent();
                        resolve(result);
                        return [3, 5];
                    case 3:
                        error_1 = _b.sent();
                        reject(error_1);
                        return [3, 5];
                    case 4:
                        this.isRunning = false;
                        this.executeNext();
                        return [7];
                    case 5: return [2];
                }
            });
        });
    };
    return SequentialExecutor;
}());
var executor = new SequentialExecutor();
function isEmptyObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}
function reComputeIsFlowTriggered() {
    var e_4, _a;
    if (allProjectStatus == undefined)
        return;
    try {
        for (var _b = __values(Object.values(allProjectStatus)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var projectStatus = _c.value;
            var triggerCase = projectStatus.triggerCase, terminationStatus = projectStatus.terminationStatus;
            switch (triggerCase) {
                case "EVERY_SESSION":
                    projectStatus.isFlowTriggered = false;
                    break;
                case "MANUAL_TRIGGER":
                    projectStatus.isFlowTriggered = true;
                    break;
                case "PLAY_ONCE":
                    projectStatus.isFlowTriggered = (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.nSession) > 0;
                    break;
                case "EVERY_SESSION_UNTIL_DISMISSED":
                    projectStatus.isFlowTriggered = (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.nDismissedByUser) > 0;
                    break;
                case "EVERY_SESSION_UNTIL_FLOW_COMPLETE":
                    projectStatus.isFlowTriggered = (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.perApp) > 0;
                    break;
                case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED":
                    projectStatus.isFlowTriggered = !!(terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.untilAllFlowsAreCompleted);
                    break;
                default:
                    projectStatus.isFlowTriggered = false;
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
function reCalculateCompletedProjectsInFlow(sortedProjects, savedCompletedProjectsInFlow) {
    completedProjectsInFlow = {};
    sortedProjects === null || sortedProjects === void 0 ? void 0 : sortedProjects.forEach(function (project) {
        var _a;
        if (((_a = project.connectedProjects) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            computeCompletedProjectsInFlow(project, project.id, savedCompletedProjectsInFlow, completedProjectsInFlow);
        }
    });
}
function computeCompletedProjectsInFlow(project, flowMenuProjectId, savedCompletedProjectsInFlow, initialCompletedProjectsInFlow) {
    var _a;
    var projects = [];
    var savedConnectedProjectStatus = {};
    if (savedCompletedProjectsInFlow === null || savedCompletedProjectsInFlow === void 0 ? void 0 : savedCompletedProjectsInFlow[flowMenuProjectId]) {
        (_a = savedCompletedProjectsInFlow[flowMenuProjectId].projects) === null || _a === void 0 ? void 0 : _a.forEach(function (proj) {
            savedConnectedProjectStatus[proj.id] = proj.completed;
        });
    }
    project.connectedProjects.forEach(function (s) {
        projects.push({
            id: s.projectId,
            completed: savedConnectedProjectStatus[s.projectId] || false,
        });
    });
    initialCompletedProjectsInFlow[flowMenuProjectId] = {
        id: flowMenuProjectId,
        projects: projects,
    };
}
var SDK_STATE_VERSION = 1;
var sdkStateService = {
    init: function (storedSdkStateString) {
        if (storedSdkStateString === void 0) { storedSdkStateString = "{}"; }
        var storedSdkState = safeParse(storedSdkStateString);
        var isFirstStart = isEmptyObject(storedSdkState);
        var sdkState = sdkStateVersionConverter.validateAndConvert(storedSdkState);
        this.version = SDK_STATE_VERSION;
        console.warn("sdkStateService.init(): sdkStateVersion", SDK_STATE_VERSION);
        this.userStates = sdkState.userStates || {};
        this.internalUserId = sdkState.internalUserId || this.generateWfUid();
        this.currentUserId = sdkState.currentUserId;
        this.segmentConfigMap = sdkState.segmentConfigMap || {};
        this.appLocale = sdkState.appLocale;
        this.entId = sdkState.entId;
        this.wfAppId = sdkState.wfAppId;
        this.wfOrgId = sdkState.wfOrgId;
        this.deviceInstallId = sdkState.deviceInstallId || generateUUID();
        if (isFirstStart || !this.currentUserId) {
            this.currentUserId = this.internalUserId;
        }
        this.ensureUserStateExists(this.internalUserId);
        this.ensureUserStateExists(this.currentUserId);
    },
    get isCurrentUserInternal() {
        return this.isUserIdInternal(this.currentUserId);
    },
    get isCurrentUserExternal() {
        return this.isUserIdExternal(this.currentUserId);
    },
    isUserIdInternal: function (userId) {
        return this.internalUserId === userId;
    },
    isUserIdExternal: function (userId) {
        return !this.isUserIdInternal(userId);
    },
    get isLoggedIn() {
        return !!this.currentUserId;
    },
    get isLoggedOut() {
        return !this.isLoggedIn;
    },
    setUserId: function (userId, traceId) {
        if (!userId) {
            return;
        }
        this.currentUserId = userId;
        this.ensureUserStateExists(userId);
        this.persistState(traceId);
    },
    logout: function (traceId) {
        this.currentUserId = null;
        this.persistState(traceId);
    },
    ensureUserStateExists: function (userId) {
        if (!userId) {
            return;
        }
        if (!this.userStates[userId]) {
            this.userStates[userId] = this.createEmptyUserState(userId);
        }
    },
    persistState: function (traceId) {
        var currentSdkState = this.sdkState;
        var message = {
            command: SENDING_COMMANDS.SAVE_USER_STATE,
            data: this.sdkState,
        };
        sendMessageToNative(message, traceId);
    },
    get sdkState() {
        var state = {
            version: this.version,
            userStates: this.userStates,
            internalUserId: this.internalUserId,
            currentUserId: this.currentUserId,
            segmentConfigMap: this.segmentConfigMap,
            appLocale: this.appLocale,
            deviceInstallId: this.deviceInstallId,
            entId: this.entId,
            wfOrgId: this.wfOrgId,
            wfAppId: this.wfAppId,
        };
        if (this.isLoggedIn) {
            state[this.currentUserId] = this.currentUserState;
        }
        return state;
    },
    createEmptyUserState: function (userId, wfId) {
        return {
            projectArray: [],
            projectsStatus: {},
            connectedWalkthroughs: {},
            language: undefined,
            currentPlatform: undefined,
            lastUpdatedConfigAt: undefined,
            lastUpdatedEmbedConfigAt: undefined,
            lastProfileUpdatedAt: undefined,
            lastProfileSyncedAt: undefined,
            savedEmbedProject: [],
            userId: userId,
            wfId: wfId || this.generateWfUid(),
            projectsCompletionStats: {},
            apiKey: appApiKey,
            baseURL: configBaseUrl,
            appVersion: appVersionName,
            features: features,
            metaConfigs: metaConfigs,
            loggerConfig: loggerConfig,
            customProps: customProperties,
            connectProjectsParentMap: {}
        };
    },
    updateCurrentUserState: function (updates) {
        if (updates === void 0) { updates = {}; }
        var userId = this.currentUserId;
        this.updateUserStateById(userId, updates);
    },
    get currentUserState() {
        var userId = this.currentUserId;
        return this.getUserStateById(userId);
    },
    getUserStateById: function (userId) {
        this.ensureUserStateExists(userId);
        return this.userStates[userId] || {};
    },
    updateUserStateById: function (userId, updates) {
        if (updates === void 0) { updates = {}; }
        this.ensureUserStateExists(userId);
        if (!updates)
            return;
        Object.assign(this.userStates[userId], updates);
    },
    generateWfUid: function () {
        return "wf:".concat(generateUUID());
    },
    get allUserIds() {
        return Object.keys(this.userStates);
    },
    cleanUpSyncedUserStates: function () {
        for (var userStatesKey in this.userStates) {
            if (userStatesKey !== this.currentUserId) {
                var savedUserState = this.getUserStateById(userStatesKey);
                if (this.isStateSyncedForUserState(savedUserState)) {
                    this.deleteUserStateById(userStatesKey);
                }
            }
        }
    },
    isStateSyncedForUserId: function (userId) {
        var savedUserState = this.getUserStateById(userId);
        return this.isStateSyncedForUserState(savedUserState);
    },
    isStateSyncedForUserState: function (userState) {
        var updatedAtString = userState === null || userState === void 0 ? void 0 : userState.lastProfileUpdatedAt;
        var updatedAt = updatedAtString ? new Date(updatedAtString).getTime() : null;
        var lastSyncedAtString = userState === null || userState === void 0 ? void 0 : userState.lastProfileSyncedAt;
        var lastSyncedAt = lastSyncedAtString ? new Date(lastSyncedAtString).getTime() : null;
        if (!updatedAt) {
            return true;
        }
        return typeof updatedAt === 'number' && typeof lastSyncedAt === 'number' && updatedAt <= lastSyncedAt;
    },
    deleteUserStateById: function (userId, traceId) {
        if (this.currentUserId !== userId) {
            delete this.userStates[userId];
            this.persistState(traceId);
        }
    }
};
var sdkStateVersionConverter = {
    validateAndConvert: function (storedSdkState) {
        var storedSdkStateVersion = (storedSdkState === null || storedSdkState === void 0 ? void 0 : storedSdkState.version) || 0;
        if (SDK_STATE_VERSION !== storedSdkStateVersion) {
            switch (storedSdkStateVersion) {
                case 0:
                    return this.v0Tov1(storedSdkState);
                default:
                    throw new Error("sdkStateVersionConverter(): converter not implemented for version- ".concat(storedSdkStateVersion));
            }
        }
        return storedSdkState;
    },
    v0Tov1: function (sdkStateV0) {
        var convertedSdkState = {};
        for (var key in sdkStateV0) {
            var child = sdkStateV0[key];
            if (typeof child === 'object' && (child === null || child === void 0 ? void 0 : child.apiKey)) {
                if (!convertedSdkState.userStates) {
                    convertedSdkState.userStates = {};
                }
                child.userId = key;
                convertedSdkState.userStates[key] = child;
                convertedSdkState.currentUserId = key;
            }
            else {
                convertedSdkState[key] = child;
            }
        }
        return convertedSdkState;
    }
};
function safeParse(jsonString, fallback) {
    if (fallback === void 0) { fallback = {}; }
    try {
        return JSON.parse(jsonString || "{}");
    }
    catch (e) {
        console.warn("unable to parse sdk state string", e);
        return fallback;
    }
}
var screenWidth = -1;
var screenHeight = -1;
function filterHierarchy(node, currentPlatform, isLayout) {
    var _a, _b, _c;
    if (currentPlatform === void 0) { currentPlatform = platform; }
    if (isLayout === void 0) { isLayout = false; }
    if (subPlatform === "FLUTTER") {
        return node;
    }
    var isRoot = (node === null || node === void 0 ? void 0 : node.layout) !== undefined;
    if (isRoot) {
        screenWidth = node === null || node === void 0 ? void 0 : node.screen_width;
        screenHeight = node === null || node === void 0 ? void 0 : node.screen_height;
    }
    else if (isLayout) {
        if (currentPlatform !== PLATFORMS.ANDROID) {
            if ((_a = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _a === void 0 ? void 0 : _a.isReactNative) {
                removeIrrelevantNodesIOS(node, null);
            }
            else if (features === null || features === void 0 ? void 0 : features.useClickableBounds) {
                calculateClickableBoundsForIos(node);
            }
        }
        else if (currentPlatform === PLATFORMS.ANDROID) {
            calculateClickableBoundsForAndroid(node);
        }
    }
    else {
        if (currentPlatform === PLATFORMS.ANDROID) {
            if ((_c = (_b = features === null || features === void 0 ? void 0 : features.doNotFliter) === null || _b === void 0 ? void 0 : _b.classNames) === null || _c === void 0 ? void 0 : _c.includes(node === null || node === void 0 ? void 0 : node.class)) {
                return node;
            }
            filterNoHideDescendants(node);
        }
        var ignoreNode = currentPlatform === PLATFORMS.ANDROID
            ? ignoreInvalidViewsAndroid(node)
            : ignoreInvalidViewsIOS(node);
        if (ignoreNode) {
            return;
        }
    }
    var children = isRoot ? [__assign({}, node === null || node === void 0 ? void 0 : node.layout)] : node === null || node === void 0 ? void 0 : node.children;
    var filteredChildren = [];
    children === null || children === void 0 ? void 0 : children.forEach(function (child) {
        var res = filterHierarchy(child, currentPlatform, isRoot);
        if (res)
            filteredChildren.push(child);
    });
    if (filteredChildren.length > 1) {
        filteredChildren =
            currentPlatform === PLATFORMS.ANDROID
                ? ignoreOverlappingNodesAndroid(filteredChildren)
                : ignoreOverlappingNodesIOS(filteredChildren);
    }
    else if (filteredChildren.length === 0 &&
        currentPlatform === PLATFORMS.ANDROID &&
        (node === null || node === void 0 ? void 0 : node.is_view_group) &&
        !(node === null || node === void 0 ? void 0 : node.is_clickable) &&
        !(node === null || node === void 0 ? void 0 : node.is_focusable) &&
        !(node === null || node === void 0 ? void 0 : node.is_long_clickable)) {
        return;
    }
    isRoot
        ? (node.layout = filteredChildren[0])
        : (node.children = filteredChildren);
    return node;
}
function calculateClickableBoundsForAndroid(node) {
    var _a, _b, _c;
    var isClickable = (node === null || node === void 0 ? void 0 : node.is_clickable) || (node === null || node === void 0 ? void 0 : node.is_long_clickable);
    var clickableBoundsChildren = null;
    (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
        calculateClickableBoundsForAndroid(child);
        !isClickable &&
            (clickableBoundsChildren = calcInclusiveBounds(clickableBoundsChildren, child.clickable_bounds));
    });
    if (isClickable) {
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
        return;
    }
    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }
    node.clickable_bounds = clickableBoundsChildren;
    if (getBoundingArea(node === null || node === void 0 ? void 0 : node.clickable_bounds) === 0) {
        if ((node === null || node === void 0 ? void 0 : node.alpha) < ((_b = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _b === void 0 ? void 0 : _b.opacityLimit)) {
            node.clickable_bounds = null;
            return;
        }
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
    }
    else if (!isClickable &&
        (node === null || node === void 0 ? void 0 : node.alpha) > ((_c = features === null || features === void 0 ? void 0 : features.filterByOpaqueViews) === null || _c === void 0 ? void 0 : _c.opacityLimit)) {
        node.clickable_bounds = node === null || node === void 0 ? void 0 : node.bounds;
    }
    node.clickable_bounds = calcExclusiveBounds(node === null || node === void 0 ? void 0 : node.clickable_bounds, node === null || node === void 0 ? void 0 : node.bounds);
    return;
}
function calculateClickableBoundsForIos(node) {
    var _a, _b;
    var clickableBoundsChildren = null;
    if (!["RCTView", "RCTSafeAreaView"].includes(node === null || node === void 0 ? void 0 : node.class)) {
        node.clickable_bounds = __assign({}, node === null || node === void 0 ? void 0 : node.bounds);
        (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            calculateClickableBoundsForIos(child);
        });
        return node.clickable_bounds;
    }
    (_b = node === null || node === void 0 ? void 0 : node.children) === null || _b === void 0 ? void 0 : _b.forEach(function (child) {
        calculateClickableBoundsForIos(child);
        clickableBoundsChildren = calcInclusiveBounds(clickableBoundsChildren, child.clickable_bounds);
    });
    if (!clickableBoundsChildren) {
        node.clickable_bounds = null;
        return;
    }
    node.clickable_bounds = calcExclusiveBounds(clickableBoundsChildren, node === null || node === void 0 ? void 0 : node.bounds);
    return;
}
function calcInclusiveBounds(bounds1, bounds2) {
    if (!bounds1 && !bounds2) {
        return null;
    }
    else if (!bounds1) {
        return bounds2;
    }
    else if (!bounds2) {
        return bounds1;
    }
    return {
        left: Math.min(bounds1.left, bounds2.left),
        top: Math.min(bounds1.top, bounds2.top),
        right: Math.max(bounds1.right, bounds2.right),
        bottom: Math.max(bounds1.bottom, bounds2.bottom),
    };
}
function calcExclusiveBounds(bounds1, bounds2) {
    if (!bounds1 && !bounds2) {
        return null;
    }
    else if (!bounds1) {
        return bounds2;
    }
    else if (!bounds2) {
        return bounds1;
    }
    return {
        left: Math.max(bounds1.left, bounds2.left),
        top: Math.max(bounds1.top, bounds2.top),
        right: Math.min(bounds1.right, bounds2.right),
        bottom: Math.min(bounds1.bottom, bounds2.bottom),
    };
}
function removeIrrelevantNodesIOS(node, parentBounds) {
    var _a;
    if (isIrrelevantView(node, parentBounds))
        return true;
    if (node === null || node === void 0 ? void 0 : node.children) {
        node.children = node === null || node === void 0 ? void 0 : node.children.filter(function (child) {
            return !removeIrrelevantNodesIOS(child, (node === null || node === void 0 ? void 0 : node.clipsToBounds) ? node === null || node === void 0 ? void 0 : node.bounds : null);
        });
    }
    if (((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length) === 0 &&
        ["RCTView", "RCTSafeAreaView"].includes(node === null || node === void 0 ? void 0 : node.class)) {
        return true;
    }
    return false;
}
function isIrrelevantView(node, parentBounds) {
    var _a, _b, _c, _d;
    if (ignoreInvalidViewsIOS(node)) {
        return true;
    }
    if (parentBounds &&
        (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.left) >= parentBounds.right ||
            ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.right) <= parentBounds.left ||
            ((_c = node === null || node === void 0 ? void 0 : node.bounds) === null || _c === void 0 ? void 0 : _c.top) >= parentBounds.bottom ||
            ((_d = node === null || node === void 0 ? void 0 : node.bounds) === null || _d === void 0 ? void 0 : _d.bottom) <= parentBounds.top)) {
        return true;
    }
    if (!isVisibleInWindow(node)) {
        return true;
    }
    return false;
}
function isVisibleInWindow(node) {
    var _a, _b, _c, _d;
    return (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.right) > 0 &&
        ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.left) < screenWidth &&
        ((_c = node === null || node === void 0 ? void 0 : node.bounds) === null || _c === void 0 ? void 0 : _c.bottom) > 0 &&
        ((_d = node === null || node === void 0 ? void 0 : node.bounds) === null || _d === void 0 ? void 0 : _d.top) < screenHeight);
}
function filterNoHideDescendants(node) {
    var _a, _b, _c;
    if (isDrawerLayout(node) ||
        ((_b = (_a = features === null || features === void 0 ? void 0 : features.filterByNoHideDescendants) === null || _a === void 0 ? void 0 : _a.classNames) === null || _b === void 0 ? void 0 : _b.includes(node === null || node === void 0 ? void 0 : node.class))) {
        node.children = (_c = node === null || node === void 0 ? void 0 : node.children) === null || _c === void 0 ? void 0 : _c.filter(function (child) { return child.importantForAccessibilityStr !== "noHideDescendants"; });
    }
}
function isDrawerLayout(node) {
    var ANDROIDX_DRAWER_LAYOUT = "androidx.drawerlayout.widget.DrawerLayout";
    var ANDROID_SUPPORT_DRAWER_LAYOUT = "android.support.v4.widget.DrawerLayout";
    return [ANDROIDX_DRAWER_LAYOUT, ANDROID_SUPPORT_DRAWER_LAYOUT].includes(node === null || node === void 0 ? void 0 : node.class);
}
function ignoreInvalidViewsIOS(node) {
    var _a, _b;
    if ((_a = node === null || node === void 0 ? void 0 : node.class) === null || _a === void 0 ? void 0 : _a.includes("Leap"))
        return true;
    if ((_b = features === null || features === void 0 ? void 0 : features.classes) === null || _b === void 0 ? void 0 : _b.includes(node === null || node === void 0 ? void 0 : node.class))
        return true;
    if (!!(node === null || node === void 0 ? void 0 : node.clip_to_bounds) && checkForEmptyBounds(node === null || node === void 0 ? void 0 : node.bounds))
        return true;
    if ((node === null || node === void 0 ? void 0 : node.hidden) || (node === null || node === void 0 ? void 0 : node.alpha) <= 0)
        return true;
    return false;
}
function ignoreInvalidViewsAndroid(node) {
    var _a, _b, _c, _d;
    if (!(metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.enableHorizontalAutoScroll) && (((_a = node === null || node === void 0 ? void 0 : node.bounds) === null || _a === void 0 ? void 0 : _a.right) <= 5 || ((_b = node === null || node === void 0 ? void 0 : node.bounds) === null || _b === void 0 ? void 0 : _b.left) >= screenWidth)) {
        return true;
    }
    if ((node === null || node === void 0 ? void 0 : node.visibility) && node.visibility !== 0)
        return true;
    if (((_c = node === null || node === void 0 ? void 0 : node.tag) === null || _c === void 0 ? void 0 : _c.includes("LeapView")) ||
        ((_d = node === null || node === void 0 ? void 0 : node.class) === null || _d === void 0 ? void 0 : _d.startsWith("is.leap.android.aui")))
        return true;
    if (getWidth(node === null || node === void 0 ? void 0 : node.bounds) <= 0 || getHeight(node === null || node === void 0 ? void 0 : node.bounds) <= 0)
        return true;
    if ((node === null || node === void 0 ? void 0 : node.clickable_bounds) &&
        ((node === null || node === void 0 ? void 0 : node.clickable_bounds.bottom) < (node === null || node === void 0 ? void 0 : node.clickable_bounds.top) ||
            (node === null || node === void 0 ? void 0 : node.clickable_bounds.right) < (node === null || node === void 0 ? void 0 : node.clickable_bounds.left)))
        return true;
    if (((node === null || node === void 0 ? void 0 : node.children) === undefined || (node === null || node === void 0 ? void 0 : node.children.length) === 0) &&
        (node === null || node === void 0 ? void 0 : node.is_view_group) &&
        !(node === null || node === void 0 ? void 0 : node.is_clickable) &&
        !(node === null || node === void 0 ? void 0 : node.is_focusable) &&
        !(node === null || node === void 0 ? void 0 : node.is_long_clickable))
        return true;
    return false;
}
function ignoreOverlappingNodesIOS(nodes) {
    var sortedNodes = nodes.sort(function (a, b) { return parseFloat(b.z) - parseFloat(a.z) || b.node_index - a.node_index; });
    var filteredNodes = [sortedNodes[0]];
    var _loop_1 = function (i) {
        var currentObject = sortedNodes[i];
        var currentBounds = (features === null || features === void 0 ? void 0 : features.useClickableBounds)
            ? currentObject.clickable_bounds
            : currentObject.bounds;
        var isCurrentObjPresent = filteredNodes.findIndex(function (s) { return s.uuid === currentObject.uuid; });
        if (i !== 0 && isCurrentObjPresent === -1)
            return "continue";
        if ((features === null || features === void 0 ? void 0 : features.ignoreNonInteractableViews) && !currentObject.is_user_interaction_enabled)
            return "continue";
        var _loop_2 = function (j) {
            var nextObject = sortedNodes[j];
            var nextBounds = (features === null || features === void 0 ? void 0 : features.useClickableBounds)
                ? nextObject.clickable_bounds
                : nextObject.bounds;
            var index = filteredNodes.findIndex(function (s) { return s.uuid === nextObject.uuid; });
            if (i !== 0 && index === -1)
                return "continue";
            if (!isInsideBounds(currentBounds, nextBounds)) {
                if (i === 0) {
                    filteredNodes.push(nextObject);
                }
                return "continue";
            }
            else if (i !== 0) {
                filteredNodes.splice(index, 1);
            }
        };
        for (var j = i + 1; j < sortedNodes.length; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < sortedNodes.length; i++) {
        _loop_1(i);
    }
    return filteredNodes.reverse();
}
function ignoreOverlappingNodesAndroid(children) {
    if (!children || children.length === 0) {
        return;
    }
    children.sort(function (a, b) {
        return parseFloat(a.z) - parseFloat(b.z);
    });
    var newChildren = JSON.parse(JSON.stringify(children));
    for (var topSiblingIndex = children.length - 1; topSiblingIndex > 0; topSiblingIndex--) {
        var topSibling = children[topSiblingIndex];
        if (!topSibling)
            continue;
        for (var childIndex = topSiblingIndex - 1; childIndex >= 0; childIndex--) {
            var sibling = children[childIndex];
            if (!sibling)
                continue;
            if ((topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds) === null) {
                if (!isInsideBounds(topSibling.bounds, sibling.bounds))
                    continue;
                if ((topSibling === null || topSibling === void 0 ? void 0 : topSibling.is_text_view) ||
                    (topSibling === null || topSibling === void 0 ? void 0 : topSibling.is_text_view) ||
                    topSibling.has_child_with_text_or_image)
                    continue;
                newChildren[topSiblingIndex] = null;
                break;
            }
            if (isInsideBounds(topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds, sibling.bounds) ||
                (sibling.clickable_bounds !== null &&
                    isInsideBounds(topSibling === null || topSibling === void 0 ? void 0 : topSibling.clickable_bounds, sibling.clickable_bounds))) {
                newChildren[childIndex] = null;
            }
        }
    }
    return newChildren.filter(function (node) { return node; });
}
function getCorrectKey(key) {
    var reverseMappings = {
        id: "r_id",
        class: "classname",
    };
    if (key in reverseMappings) {
        return reverseMappings[key];
    }
    return key;
}
function standardizeIdParams(params) {
    var e_5, _a;
    var mappings = {
        R_ID: "id",
        AR_ID: "ar_id",
        className: "class",
        CONTENT_DESC: "content_desc",
        ACC_ID: "acc_id",
        TAG: "tag",
        ACC_LABEL: "acc_label",
    };
    var standardized = __assign({}, params);
    try {
        for (var _b = __values(Object.entries(mappings)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), oldKey = _d[0], newKey = _d[1];
            if (standardized[oldKey]) {
                standardized[newKey] = standardized[oldKey];
                delete standardized[oldKey];
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return standardized;
}
function getTargetValuesToMatch(target, relationToTarget) {
    var _a;
    if (!relationToTarget)
        return {};
    var targetIdParams = standardizeIdParams(__assign({}, target === null || target === void 0 ? void 0 : target.idParams));
    if ((_a = targetIdParams.text) === null || _a === void 0 ? void 0 : _a.ang) {
        targetIdParams.text = targetIdParams.text.ang;
    }
    return __assign(__assign({}, targetIdParams), { relationship: relationToTarget });
}
function getIdentifiersInArray(identifiers) {
    var e_6, _a;
    var _b, _c, _d, _e, _f;
    var arrayResult = [];
    try {
        for (var _g = __values(Object.entries(identifiers)), _h = _g.next(); !_h.done; _h = _g.next()) {
            var _j = __read(_h.value, 2), name_1 = _j[0], value = _j[1];
            var idParams = name_1 === "wfxWebViewList"
                ? standardizeIdParams(__assign({}, value))
                : standardizeIdParams(__assign({}, value.idParams));
            var regex = name_1 !== "wfxWebViewList" && standardizeIdParams(__assign({}, value === null || value === void 0 ? void 0 : value.regex));
            if (regex !== undefined) {
                if ((_b = regex === null || regex === void 0 ? void 0 : regex.text) === null || _b === void 0 ? void 0 : _b.ang) {
                    regex.text = regex.text.ang;
                }
            }
            if ((_c = idParams.text) === null || _c === void 0 ? void 0 : _c.ang) {
                idParams.text = idParams.text.ang;
            }
            if (value.activityName) {
                idParams.activityName = value.activityName;
            }
            if (value.controller) {
                idParams.controller = value.controller;
            }
            var targetValuesToMatch = getTargetValuesToMatch(value.target, value.relationToTarget);
            if (Object.keys(targetValuesToMatch).length !== 0 && ((_d = value === null || value === void 0 ? void 0 : value.target) === null || _d === void 0 ? void 0 : _d.regex)) {
                targetValuesToMatch.regex =
                    name_1 !== "wfxWebViewList" &&
                        standardizeIdParams(__assign({}, (_e = value === null || value === void 0 ? void 0 : value.target) === null || _e === void 0 ? void 0 : _e.regex));
                if (targetValuesToMatch.regex !== undefined) {
                    if ((_f = targetValuesToMatch.regex.text) === null || _f === void 0 ? void 0 : _f.ang) {
                        targetValuesToMatch.regex.text = targetValuesToMatch.regex.text.ang;
                    }
                }
            }
            arrayResult.push(__assign(__assign({ name: name_1, regex: regex }, idParams), { target: targetValuesToMatch }));
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return arrayResult;
}
function extractViewIdFromValue(_a) {
    var key = _a.key, value = _a.value, identifierVersion = _a.identifierVersion, packageName = _a.packageName;
    if (identifierVersion === "2")
        return value;
    switch (key) {
        case "ar_id":
            return value === null || value === void 0 ? void 0 : value.split("android:id/").pop();
        case "id":
            return value === null || value === void 0 ? void 0 : value.split("".concat(packageName, ":id/")).pop();
        default:
            return value;
    }
}
function findMatchingNode(root, identifier, regex, identifierVersion) {
    var e_7, _a;
    var isMatchingNode = function (node, identifier) {
        var e_8, _a;
        var _b, _c, _d, _e;
        try {
            for (var _f = __values(Object.entries(identifier)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                if (key === "name")
                    continue;
                if (key === "ar_id") {
                    var nodeId = extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id });
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_b = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _b === void 0 ? void 0 : _b.test(nodeId)))
                            return false;
                    }
                    else {
                        if (nodeId !== value)
                            return false;
                    }
                }
                else if (key === "id") {
                    var nodeId = extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id, packageName: (_c = root === null || root === void 0 ? void 0 : root.ROOT_NODE) === null || _c === void 0 ? void 0 : _c.client_package_name });
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_d = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _d === void 0 ? void 0 : _d.test(nodeId)))
                            return false;
                    }
                    else {
                        if (nodeId !== value)
                            return false;
                    }
                }
                else {
                    if (regex === null || regex === void 0 ? void 0 : regex[key]) {
                        if (!((_e = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key])) === null || _e === void 0 ? void 0 : _e.test(node[key])))
                            return false;
                    }
                    else {
                        if (node[key] !== value)
                            return false;
                    }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return true;
    };
    try {
        for (var _b = __values(Object.keys(root)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var id = _c.value;
            var node = root[id];
            if (isMatchingNode(node, identifier)) {
                return node;
            }
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return undefined;
}
function followRelationship(root, startNode, relationship) {
    var e_9, _a;
    var _b;
    var currentNode = startNode;
    var _loop_3 = function (step) {
        if (!currentNode) {
            return { value: null };
        }
        var direction = step.charAt(0);
        if (direction === "P") {
            currentNode = root[currentNode.parentId] || null;
            return "continue";
        }
        else if (direction === "C") {
            var index_1 = parseInt(step.slice(1), 10) || 0;
            if (typeof currentNode === "string") {
                currentNode = root[currentNode];
            }
            if (((_b = currentNode === null || currentNode === void 0 ? void 0 : currentNode.children) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                currentNode = currentNode.children.find(function (s) { return root[s].node_index === index_1; });
                return "continue";
            }
            else {
                return { value: null };
            }
        }
    };
    try {
        for (var relationship_1 = __values(relationship), relationship_1_1 = relationship_1.next(); !relationship_1_1.done; relationship_1_1 = relationship_1.next()) {
            var step = relationship_1_1.value;
            var state_1 = _loop_3(step);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (relationship_1_1 && !relationship_1_1.done && (_a = relationship_1.return)) _a.call(relationship_1);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return typeof currentNode === "string" ? root[currentNode] : currentNode;
}
function findFirstWebView() {
    return flattenedHierarchyArray.find(function (node) {
        var isWebView = node["is_webview"];
        if (isWebView && platform === "ANDROID") {
            return "com.google.android.gms.ads.internal.webview" !== node["class"];
        }
        return isWebView;
    });
}
function findMatches(filteredHierarchy, identifiers, traceId) {
    if (!identifiers) {
        return;
    }
    var matchedIdentifiers = [];
    var unMatchedIdentifiers = [];
    var matchedNode = [];
    var identifiersArray = getIdentifiersInArray(identifiers);
    var regex = {};
    identifiersArray === null || identifiersArray === void 0 ? void 0 : identifiersArray.forEach(function (identifier) {
        var e_10, _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var name = identifier.name;
        var found = false;
        var ObserverData = {
            identifier_id: name,
        };
        regex = identifier.regex;
        delete identifier.regex;
        var identifierVersion = identifier.version;
        delete identifier.version;
        if (Object.keys(identifier === null || identifier === void 0 ? void 0 : identifier.target).length === 0) {
            delete identifier.target;
            var compareActivityName = (identifier === null || identifier === void 0 ? void 0 : identifier.activityName) &&
                (regex.activityName
                    ? !((_b = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.activityName)) === null || _b === void 0 ? void 0 : _b.test(filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.activity_name))
                    : !((_c = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.activity_name) === null || _c === void 0 ? void 0 : _c.includes(identifier === null || identifier === void 0 ? void 0 : identifier.activityName)));
            var compareController = (identifier === null || identifier === void 0 ? void 0 : identifier.controller) &&
                (regex.controller
                    ? !((_d = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.controller)) === null || _d === void 0 ? void 0 : _d.test(filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.controller))
                    : !((_e = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.controller) === null || _e === void 0 ? void 0 : _e.includes(identifier === null || identifier === void 0 ? void 0 : identifier.controller)));
            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { activity_name: "false" }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
            else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { controller: "false" }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
            else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                }
                else {
                    ObserverData.controller = "true";
                }
                delete identifier.activityName;
                delete identifier.controller;
                try {
                    for (var flattenedHierarchyArray_1 = __values(flattenedHierarchyArray), flattenedHierarchyArray_1_1 = flattenedHierarchyArray_1.next(); !flattenedHierarchyArray_1_1.done; flattenedHierarchyArray_1_1 = flattenedHierarchyArray_1.next()) {
                        var node = flattenedHierarchyArray_1_1.value;
                        var isMatch = true;
                        for (var key in identifier) {
                            if ((regex === null || regex === void 0 ? void 0 : regex[key]) !== undefined) {
                                var regexValue = parseRegexString(regex === null || regex === void 0 ? void 0 : regex[key]);
                                if (key !== "name" &&
                                    key !== "id" &&
                                    key !== "ar_id" &&
                                    !regexValue.test(node[key])) {
                                    ObserverData[getCorrectKey(key)] = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "ar_id" &&
                                    !regexValue.test(extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id }))) {
                                    ObserverData.ar_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "id" &&
                                    !regexValue.test(extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id, packageName: filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.client_package_name }))) {
                                    ObserverData.r_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else {
                                    ObserverData[getCorrectKey(key)] = "true";
                                }
                            }
                            else {
                                if (key !== "name" &&
                                    key !== "id" &&
                                    key !== "ar_id" &&
                                    node[key] !== identifier[key]) {
                                    ObserverData[getCorrectKey(key)] = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "ar_id" &&
                                    identifier[key] !== extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id })) {
                                    ObserverData.ar_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else if (key === "id" &&
                                    identifier[key] !== extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: node === null || node === void 0 ? void 0 : node.id, packageName: filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.client_package_name })) {
                                    ObserverData.r_id = "false";
                                    isMatch = false;
                                    break;
                                }
                                else {
                                    ObserverData[getCorrectKey(key)] = "true";
                                }
                            }
                        }
                        if (isMatch) {
                            found = true;
                            var updatedNodeBounds = getRelativeBounds(node);
                            matchedNode.push({
                                id: name,
                                bounds: updatedNodeBounds,
                                scale: node.scale,
                                node: node,
                            });
                            break;
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (flattenedHierarchyArray_1_1 && !flattenedHierarchyArray_1_1.done && (_a = flattenedHierarchyArray_1.return)) _a.call(flattenedHierarchyArray_1);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                if (found) {
                    matchedIdentifiers.push(name);
                }
                else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                        properties: __assign({}, ObserverData),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
                return;
            }
        }
        else {
            var target = identifier.target;
            delete identifier.target;
            var compareActivityName = (identifier === null || identifier === void 0 ? void 0 : identifier.activityName) &&
                (regex.activityName
                    ? !((_f = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.activityName)) === null || _f === void 0 ? void 0 : _f.test((_g = flattenedHierarchy.ROOT_NODE) === null || _g === void 0 ? void 0 : _g.activity_name))
                    : !((_j = (_h = flattenedHierarchy.ROOT_NODE) === null || _h === void 0 ? void 0 : _h.activity_name) === null || _j === void 0 ? void 0 : _j.includes(identifier === null || identifier === void 0 ? void 0 : identifier.activityName)));
            var compareController = (identifier === null || identifier === void 0 ? void 0 : identifier.controller) &&
                (regex.controller
                    ? !((_k = parseRegexString(regex === null || regex === void 0 ? void 0 : regex.controller)) === null || _k === void 0 ? void 0 : _k.test((_l = flattenedHierarchy.ROOT_NODE) === null || _l === void 0 ? void 0 : _l.controller))
                    : !((_o = (_m = flattenedHierarchy.ROOT_NODE) === null || _m === void 0 ? void 0 : _m.controller) === null || _o === void 0 ? void 0 : _o.includes(identifier === null || identifier === void 0 ? void 0 : identifier.controller)));
            if (compareActivityName) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { activity_name: "false" }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
            else if (compareController) {
                unMatchedIdentifiers.push(name);
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                    properties: __assign(__assign({}, ObserverData), { controller: "false" }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
            else {
                if (identifier.activityName) {
                    ObserverData.activity_name = "true";
                }
                else {
                    ObserverData.controller = "true";
                }
                delete identifier.activityName;
                delete identifier.controller;
                var referenceNode = findMatchingNode(flattenedHierarchy, identifier, regex, identifierVersion);
                if (!referenceNode)
                    return unMatchedIdentifiers.push(name);
                var actualNode = followRelationship(flattenedHierarchy, referenceNode, target.relationship);
                if (!actualNode)
                    return unMatchedIdentifiers.push(name);
                var targetRegex = target === null || target === void 0 ? void 0 : target.regex;
                target === null || target === void 0 ? true : delete target.relationship;
                target === null || target === void 0 ? true : delete target.regex;
                var isMatch = true;
                if (Object.keys(target).length > 1) {
                    for (var key in target) {
                        if ((targetRegex === null || targetRegex === void 0 ? void 0 : targetRegex[key]) !== undefined) {
                            var regexValue = parseRegexString(targetRegex === null || targetRegex === void 0 ? void 0 : targetRegex[key]);
                            if (key !== "id" &&
                                key !== "ar_id" &&
                                !regexValue.test(actualNode === null || actualNode === void 0 ? void 0 : actualNode[key])) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "ar_id" &&
                                !regexValue.test(extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: actualNode === null || actualNode === void 0 ? void 0 : actualNode.id }))) {
                                ObserverData.ar_id = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "id" &&
                                !regexValue.test(extractViewIdFromValue({ key: key, identifierVersion: identifierVersion, value: actualNode === null || actualNode === void 0 ? void 0 : actualNode.id, packageName: filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.client_package_name }))) {
                                ObserverData.r_id = "false";
                                isMatch = false;
                                break;
                            }
                            else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                        else {
                            if (key !== "id" &&
                                key !== "ar_id" &&
                                (actualNode === null || actualNode === void 0 ? void 0 : actualNode[key]) !== (target === null || target === void 0 ? void 0 : target[key])) {
                                ObserverData[getCorrectKey(key)] = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "ar_id" &&
                                (target === null || target === void 0 ? void 0 : target[key]) !== extractViewIdFromValue(({ key: key, identifierVersion: identifierVersion, value: actualNode === null || actualNode === void 0 ? void 0 : actualNode.id }))) {
                                ObserverData.ar_id = "false";
                                isMatch = false;
                                break;
                            }
                            else if (key === "id" &&
                                (target === null || target === void 0 ? void 0 : target[key]) !== extractViewIdFromValue(({ key: key, identifierVersion: identifierVersion, value: actualNode === null || actualNode === void 0 ? void 0 : actualNode.id, packageName: filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.client_package_name }))) {
                                ObserverData.r_id = "false";
                                isMatch = false;
                                break;
                            }
                            else {
                                ObserverData[getCorrectKey(key)] = "true";
                            }
                        }
                    }
                }
                var updatedNodeBounds = getRelativeBounds(actualNode);
                if (isMatch) {
                    matchedNode.push({
                        id: name,
                        bounds: updatedNodeBounds,
                        scale: actualNode === null || actualNode === void 0 ? void 0 : actualNode.scale,
                        node: actualNode,
                    });
                    matchedIdentifiers.push(name);
                }
                else {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.IDENTIFIER_NOT_MATCHED,
                        properties: __assign({}, ObserverData),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                    unMatchedIdentifiers.push(name);
                }
            }
        }
    });
    return {
        matchedIdentifiers: matchedIdentifiers,
        unMatchedIdentifiers: unMatchedIdentifiers,
        matchedNode: matchedNode,
    };
}
function getFlattenedHierarchy(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var currentNode = _a.currentNode, parentId = _a.parentId, _l = _a.root, root = _l === void 0 ? true : _l, _m = _a.hierarchy, hierarchy = _m === void 0 ? {} : _m;
    if (parentId === undefined)
        parentId = "NULL_PARENT_UUID";
    var list = [];
    if (currentNode === undefined)
        return list;
    currentNode.parentId = parentId || "";
    if (currentNode.normalised_bounds !== undefined && currentNode.bounds) {
        currentNode.bounds = currentNode.normalised_bounds;
    }
    hierarchy[currentNode.uuid || "ROOT_NODE"] = currentNode;
    list.push(currentNode);
    if (root &&
        ((_c = (_b = currentNode.layout) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.length) &&
        ((_e = (_d = currentNode.layout) === null || _d === void 0 ? void 0 : _d.children) === null || _e === void 0 ? void 0 : _e.length) > 0) {
        var layout = currentNode.layout;
        var childrenLength = ((_f = layout === null || layout === void 0 ? void 0 : layout.children) === null || _f === void 0 ? void 0 : _f.length) || 0;
        for (var i = 0; i < childrenLength; i++) {
            var res = getFlattenedHierarchy({
                currentNode: (_g = layout === null || layout === void 0 ? void 0 : layout.children) === null || _g === void 0 ? void 0 : _g[i],
                parentId: layout.uuid,
                root: false,
                hierarchy: hierarchy,
            });
            list.push.apply(list, __spreadArray([], __read(res), false));
        }
        currentNode.layout.children = layout.children.map(function (child) { return child.uuid; });
    }
    else if (((_h = currentNode.children) === null || _h === void 0 ? void 0 : _h.length) && ((_j = currentNode.children) === null || _j === void 0 ? void 0 : _j.length) > 0) {
        (_k = currentNode === null || currentNode === void 0 ? void 0 : currentNode.children) === null || _k === void 0 ? void 0 : _k.forEach(function (n) {
            var res = getFlattenedHierarchy({
                currentNode: __assign(__assign({}, n), { boundingArea: getBoundingArea(n === null || n === void 0 ? void 0 : n.bounds) || 0 }),
                parentId: currentNode.uuid,
                root: false,
                hierarchy: hierarchy,
            });
            list.push.apply(list, __spreadArray([], __read(res), false));
        });
        currentNode.children = currentNode.children.map(function (child) { return child.uuid; });
    }
    return list;
}
function getRelativeBounds(node) {
    var _a;
    if (!node)
        return;
    var nodeBounds = __assign({}, node === null || node === void 0 ? void 0 : node.bounds);
    var layoutBounds = (_a = filteredHierarchy === null || filteredHierarchy === void 0 ? void 0 : filteredHierarchy.layout) === null || _a === void 0 ? void 0 : _a.bounds;
    nodeBounds.left = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.left) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.left);
    nodeBounds.top = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.top) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.top);
    nodeBounds.right = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.right) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.left);
    nodeBounds.bottom = (nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.bottom) - (layoutBounds === null || layoutBounds === void 0 ? void 0 : layoutBounds.top);
    return nodeBounds;
}
function getHierarchyIntervalTime() {
    var _a, _b;
    return (((_a = metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.screenHierarchy) === null || _a === void 0 ? void 0 : _a.intervalTime) || ((_b = features === null || features === void 0 ? void 0 : features.hierarchyLoopInterval) === null || _b === void 0 ? void 0 : _b.intervalTime) || intervalTime);
}
function init(traceId) {
    clearInterval(timer);
    waitingForResponse = false;
    hierarchyCommandLastSentAt = 0;
    hierarchyCommandLastResponseAt = 0;
    if (embedProject.concat(sortedProjectArray).length !== 0) {
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.PROJECT.STARTING_FETCH_HIERARCHY_LOOP,
            category: OBSERVER_EVENT_CATEGORIES.PROJECT,
            properties: {
                embedProjectLog: buildProjectArrayLogsForObserver(embedProject),
                projectArrayLog: buildProjectArrayLogsForObserver(sortedProjectArray),
                hierarchyIntervalTime: getHierarchyIntervalTime(),
            },
            level: ObserverLogLevel.INFO
        }, traceId);
        timer = setInterval(function () {
            try {
                if (noActiveProjects()) {
                    clearInterval(timer);
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.PROJECT.NO_ACTIVE_PROJECTS_FOUND,
                        category: OBSERVER_EVENT_CATEGORIES.PROJECT,
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    return;
                }
                var now = Date.now();
                var shouldSend = !waitingForResponse ||
                    (now - hierarchyCommandLastSentAt >= hierarchyCommandFallbackTimeout);
                if (shouldSend) {
                    sendMessageToNative({
                        command: SENDING_COMMANDS.HIERARCHY,
                        data: {
                            filterElementsOutsideViewPort: (features === null || features === void 0 ? void 0 : features.filterElementsOutsideViewPort) || false,
                        },
                    }, traceId);
                    waitingForResponse = true;
                    hierarchyCommandLastSentAt = now;
                }
            }
            catch (error) {
                console.warn("init(): unable to successfully complete hierarchy loop", error);
            }
        }, getHierarchyIntervalTime());
    }
}
function getIdFromProperty(key, property) {
    if (key && property && (key === null || key === void 0 ? void 0 : key.length) > (property === null || property === void 0 ? void 0 : property.length)) {
        var id = key.substr(property === null || property === void 0 ? void 0 : property.length, key === null || key === void 0 ? void 0 : key.length).replace("_", "");
        return id;
    }
}
function convertOldWfxData(configData, oldSortedProjectArray, oldProjectStatus, oldCompletedProjectsInFlow, oldProfileData) {
    var _a, _b, _c, _d, _e;
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.SDK.CONVERTING_OLD_WFX_DATA,
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    var convertedData = {
        projectArray: oldSortedProjectArray,
        selectedLanguage: selectedLanguage,
        allProjectStatus: oldProjectStatus,
        completedFlowProjects: oldCompletedProjectsInFlow,
    };
    var idToUniqueIdMap = {};
    var deploymentIdToIdMap = {};
    var idToProjectIdMap = {};
    var flowsInMenu = {};
    oldSortedProjectArray.map(function (project) {
        var _a, _b, _c, _d, _e;
        var objKey = project.id;
        idToProjectIdMap[(_a = project === null || project === void 0 ? void 0 : project.assist) === null || _a === void 0 ? void 0 : _a.id] =
            (_b = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _b === void 0 ? void 0 : _b.projectId;
        deploymentIdToIdMap[(_c = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _c === void 0 ? void 0 : _c.deploymentId] =
            (_d = project === null || project === void 0 ? void 0 : project.assist) === null || _d === void 0 ? void 0 : _d.id;
        idToUniqueIdMap[project.assist.id] = objKey;
        if (((_e = project === null || project === void 0 ? void 0 : project.connectedProjects) === null || _e === void 0 ? void 0 : _e.length) > 0) {
            flowsInMenu[objKey] = [];
            project.connectedProjects.forEach(function (connectedProject) {
                deploymentId = connectedProject.projectId;
                console.warn("convertOldWfxData(): connectedProjectsParentIdMap", connectProjectsParentMap);
                configData === null || configData === void 0 ? void 0 : configData.every(function (projectData) {
                    var _a, _b, _c, _d, _e, _f;
                    if (projectData.projectParameters.deploymentType === "LINK" &&
                        projectData.projectParameters.deploymentId === deploymentId) {
                        flowsInMenu[objKey].push(((_a = projectData.discoveryList) === null || _a === void 0 ? void 0 : _a[0].id) || ((_b = projectData.assists) === null || _b === void 0 ? void 0 : _b[0].id));
                        deploymentIdToIdMap[deploymentId] =
                            ((_c = projectData.discoveryList) === null || _c === void 0 ? void 0 : _c[0].id) || ((_d = projectData.assists) === null || _d === void 0 ? void 0 : _d[0].id);
                        idToProjectIdMap[((_e = projectData.discoveryList) === null || _e === void 0 ? void 0 : _e[0].id) || ((_f = projectData.assists) === null || _f === void 0 ? void 0 : _f[0].id)] = projectData.projectParameters.projectId;
                        return false;
                    }
                    return true;
                });
            });
        }
    });
    if (platform === "ANDROID") {
        var OldProperties_1 = {
            DISCOVERY_PER_APP_FREQUENCY: "discovery_per_app_frequency",
            N_DISMISSED_BY_USER: "n_dismissed_by_user",
            N_SESSION_FREQUENCY: "n_session_frequency",
            N_DISMISS_BY_USER_ASSIST_FREQUENCY: "n_dismiss_by_user_assist_frequency",
            N_SESSION_ASSIST_FREQUENCY: "n_session_assist_frequency",
            PROJECT_COMPLETED: "project_completed",
            PERMANENTLY_DISABLED_PROJECT_LIST: "perm_disabled_project_list",
            PROJECT_MUTED: "project_muted",
        };
        var oldProfileKeys = (oldProfileData && Object.keys(oldProfileData)) || [];
        oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.forEach(function (key) {
            if (key.includes(OldProperties_1.DISCOVERY_PER_APP_FREQUENCY)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.DISCOVERY_PER_APP_FREQUENCY);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.perApp = oldProfileData[key];
                }
            }
            if (key.includes(OldProperties_1.N_DISMISSED_BY_USER)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.N_DISMISSED_BY_USER);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }
            if (key.includes(OldProperties_1.N_DISMISS_BY_USER_ASSIST_FREQUENCY)) {
                var assist_id = getIdFromProperty(key, OldProperties_1.N_DISMISS_BY_USER_ASSIST_FREQUENCY);
                var uniqueId = idToUniqueIdMap[assist_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nDismissedByUser = 1;
                }
            }
            if (key.includes(OldProperties_1.N_SESSION_FREQUENCY)) {
                var discovery_id = getIdFromProperty(key, OldProperties_1.N_SESSION_FREQUENCY);
                var uniqueId = idToUniqueIdMap[discovery_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }
            if (key.includes(OldProperties_1.N_SESSION_ASSIST_FREQUENCY)) {
                var assist_id = getIdFromProperty(key, OldProperties_1.N_SESSION_ASSIST_FREQUENCY);
                var uniqueId = idToUniqueIdMap[assist_id];
                var projectStatus = convertedData === null || convertedData === void 0 ? void 0 : convertedData.allProjectStatus[uniqueId];
                if (projectStatus) {
                    projectStatus.terminationStatus.nSession = oldProfileData[key];
                }
            }
        });
        var oldProfileDataCompletedProjects_1 = ((oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            oldProfileData[OldProperties_1.PROJECT_COMPLETED] &&
            Object.keys(JSON.parse(oldProfileData[OldProperties_1.PROJECT_COMPLETED]))) ||
            [];
        (_a = Object.entries(flowsInMenu)) === null || _a === void 0 ? void 0 : _a.forEach(function (entry) {
            var _a, _b;
            var flowMenuId = entry[0];
            var connectFlows = entry[1];
            if ((connectFlows === null || connectFlows === void 0 ? void 0 : connectFlows.length) > 0) {
                convertedData.allProjectStatus[flowMenuId].terminationStatus.untilAllFlowsAreCompleted = connectFlows === null || connectFlows === void 0 ? void 0 : connectFlows.every(function (connectedFlow) {
                    projectId = idToProjectIdMap[connectedFlow];
                    return oldProfileDataCompletedProjects_1 === null || oldProfileDataCompletedProjects_1 === void 0 ? void 0 : oldProfileDataCompletedProjects_1.includes(projectId);
                });
            }
            (_b = (_a = convertedData === null || convertedData === void 0 ? void 0 : convertedData.completedFlowProjects[flowMenuId]) === null || _a === void 0 ? void 0 : _a.projects) === null || _b === void 0 ? void 0 : _b.forEach(function (project) {
                if (oldProfileDataCompletedProjects_1 === null || oldProfileDataCompletedProjects_1 === void 0 ? void 0 : oldProfileDataCompletedProjects_1.includes(project.id)) {
                    project.completed = true;
                }
            });
        });
        (oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            ((_b = oldProfileData[OldProperties_1.PERMANENTLY_DISABLED_PROJECT_LIST]) === null || _b === void 0 ? void 0 : _b.forEach(function (deploymentId) {
                var id = deploymentIdToIdMap[deploymentId];
                var uniqueId = idToUniqueIdMap[id];
                if (uniqueId) {
                    convertedData.allProjectStatus[uniqueId].isTerminated = true;
                }
            }));
        var oldProfileDataMutedProjects = ((oldProfileKeys === null || oldProfileKeys === void 0 ? void 0 : oldProfileKeys.length) &&
            oldProfileData[OldProperties_1.PROJECT_MUTED] &&
            JSON.parse(oldProfileData[OldProperties_1.PROJECT_MUTED])) ||
            {};
        (_c = Object.entries(oldProfileDataMutedProjects)) === null || _c === void 0 ? void 0 : _c.forEach(function (_a) {
            var _b = __read(_a, 2), flowId = _b[0], value = _b[1];
        });
        convertedData.selectedLanguage = oldProfileData === null || oldProfileData === void 0 ? void 0 : oldProfileData.language_selected;
    }
    else {
        convertedData.selectedLanguage = oldProfileData.leap_language_code;
        Object.entries(oldProfileData.leap_discovery_flow_completed).forEach(function (entry) {
            convertedData.allProjectStatus[idToUniqueIdMap[entry[0]]].terminationStatus.perApp = entry[1];
        });
        __spreadArray(__spreadArray([], __read(oldProfileData.leap_assists_dismissed), false), __read(oldProfileData.leap_discovery_dismissed), false).forEach(function (id) {
            convertedData.allProjectStatus[idToUniqueIdMap[id]].terminationStatus.nDismissedByUser = 1;
        });
        Object.entries(oldProfileData.leap_completed_flows).forEach(function (entry) {
            var flowMenuId = idToUniqueIdMap[entry[0]];
            if (flowsInMenu[flowMenuId]) {
                convertedData.allProjectStatus[flowMenuId].terminationStatus.untilAllFlowsAreCompleted = flowsInMenu[flowMenuId].every(function (connectedFlowId) {
                    if (!entry[1].includes(connectedFlowId)) {
                        return false;
                    }
                    return true;
                });
                convertedData.completedFlowProjects[flowMenuId].projects.forEach(function (project) {
                    if (entry[1].includes(deploymentIdToIdMap[project.id])) {
                        project.completed = true;
                    }
                });
            }
        });
        (_d = oldProfileData.leap_muted_discoveries) === null || _d === void 0 ? void 0 : _d.forEach(function (id) {
        });
        (_e = oldProfileData.leap_terminated_discoveries) === null || _e === void 0 ? void 0 : _e.forEach(function (id) {
            var uniqueId = idToUniqueIdMap[id];
            if (uniqueId) {
                convertedData.allProjectStatus[uniqueId].isTerminated = true;
            }
        });
        Object.entries(__assign(__assign({}, oldProfileData.leap_discovery_presented), oldProfileData.leap_assists_presented)).forEach(function (entry) {
            convertedData.allProjectStatus[idToUniqueIdMap[entry[0]]].terminationStatus.nSession = entry[1];
        });
    }
    Object.keys(convertedData.allProjectStatus).forEach(function (uniqueId) {
        if (uniqueId.includes("discovery")) {
            switch (convertedData.allProjectStatus[uniqueId].triggerCase) {
                case "EVERY_SESSION": {
                    convertedData.allProjectStatus[uniqueId].isFlowTriggered = false;
                    break;
                }
                case "MANUAL_TRIGGER": {
                    convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "PLAY_ONCE": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .nSession > 0)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_DISMISSED": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .nDismissedByUser === 1)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_FLOW_COMPLETE": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus.perApp >
                        0)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                case "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED": {
                    if (convertedData.allProjectStatus[uniqueId].terminationStatus
                        .untilAllFlowsAreCompleted)
                        convertedData.allProjectStatus[uniqueId].isFlowTriggered = true;
                    break;
                }
                default: {
                }
            }
        }
        else {
            convertedData.allProjectStatus[uniqueId].isFlowTriggered = false;
        }
    });
    return convertedData;
}
function saveConfigAndDownloadBulkAssets(res, traceId) {
    var assetList = [];
    var soundList = {};
    embedProject
        .concat(sortedProjectArray === null || sortedProjectArray === void 0 ? void 0 : sortedProjectArray.concat(Object.values(flowWalkthroughs)))
        .forEach(function (p) {
        var _a;
        if (p === undefined)
            return;
        p.auiContent.content.forEach(function (c) {
            if (!c)
                return;
            c.startsWith("http")
                ? assetList.push("".concat(c))
                : assetList.push("".concat(p.auiContent.baseUrl).concat(c));
        });
        var sounds = Object.keys((_a = p.localeSounds) === null || _a === void 0 ? void 0 : _a.sounds);
        if (sounds.length > 0) {
            sounds.forEach(function (sound) {
                var _a;
                if (soundList[sound] === undefined)
                    soundList[sound] = [];
                var updatedSounds = (_a = p.localeSounds) === null || _a === void 0 ? void 0 : _a.sounds[sound].map(function (s) {
                    var _a, _b;
                    s.url = ((_a = s.url) === null || _a === void 0 ? void 0 : _a.startsWith("http"))
                        ? "".concat(s === null || s === void 0 ? void 0 : s.url)
                        : "".concat((_b = p === null || p === void 0 ? void 0 : p.localeSounds) === null || _b === void 0 ? void 0 : _b.baseUrl).concat(s === null || s === void 0 ? void 0 : s.url);
                    return s;
                });
                soundList[sound] = __spreadArray(__spreadArray([], __read(soundList[sound]), false), __read(updatedSounds), false);
            });
        }
    });
    sendObserverLogs({
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        event_name: OBSERVER_EVENTS.SDK.SENDING_ASSET_URLS_AND_CONFIG,
        properties: {
            assetsToDownload: {
                files: assetList,
                sounds: soundList,
            },
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    sendMessageToNative({
        command: SENDING_COMMANDS.ON_CONFIG_FETCH,
        data: {
            config: res,
            features: features,
            loggerConfig: loggerConfig,
            assetsToDownload: {
                files: assetList,
                sounds: soundList,
            },
            metaConfigs: metaConfigs,
        },
    }, traceId);
}
function sendWebJSscript(_a, traceId) {
    var webIdentifiers = _a.webIdentifiers, webViewNode = _a.webViewNode;
    var webViewBounds = webViewNode["bounds"];
    var webViewScale = webViewNode["scale"];
    var message = {
        command: SENDING_COMMANDS.WEB_SCRIPT,
        data: {
            script: createFinderJavascript(webIdentifiers, webViewBounds, webViewScale, webViewNode.uuid),
            webviewInfo: {
                uuid: webViewNode.uuid,
            },
        },
    };
    sendObserverLogs({
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        event_name: OBSERVER_EVENTS.SDK.SENDING_WEBSCRIPT,
        properties: {
            webIdentifiers: webIdentifiers ? Object.keys(webIdentifiers) : [],
            webViewBounds: webViewBounds,
            webViewScale: webViewScale,
            webViewNode: webViewNode.uuid
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    sendMessageToNative(message, traceId);
}
function sendProjectCompletion(_a, traceId) {
    var id = _a.id, reset = _a.reset;
    var flow = completedProjectsInFlow === null || completedProjectsInFlow === void 0 ? void 0 : completedProjectsInFlow[currentlyRunningFlow.id || id];
    if (flow === undefined)
        return;
    var message = {
        command: SENDING_COMMANDS.PROJECT_COMPLETED,
        data: {
            language: selectedLanguage,
            projects: reset ? [] : flow.projects,
        },
    };
    sendMessageToNative(message, traceId);
}
function saveTheLatestStateChange(traceId) {
    if (inPreviewMode)
        return;
    var currentUserState = buildCurrentUserStateObject();
    sdkStateService.updateCurrentUserState(currentUserState);
    sdkStateService.segmentConfigMap = segmentConfigMap;
    sdkStateService.appLocale = appLocale;
    sdkStateService.persistState(traceId);
}
function buildCurrentUserStateObject() {
    return {
        projectArray: sortedProjectArray,
        projectsStatus: allProjectStatus,
        connectedWalkthroughs: flowWalkthroughs,
        language: selectedLanguage,
        currentPlatform: platform,
        lastUpdatedConfigAt: lastUpdatedConfigAt,
        lastProfileUpdatedAt: lastProfileUpdatedAt,
        lastUpdatedEmbedConfigAt: lastUpdatedEmbedConfigAt,
        savedEmbedProject: embedProject,
        userId: sdkStateService.currentUserId,
        projectsCompletionStats: completedProjectsInFlow,
        apiKey: appApiKey,
        baseURL: configBaseUrl,
        appVersion: appVersionName,
        features: features,
        metaConfigs: metaConfigs,
        loggerConfig: loggerConfig,
        customProps: customProperties,
        connectProjectsParentMap: connectProjectsParentMap,
    };
}
function resetGlobalUserState() {
    segmentConfigMap = {};
    sortedProjectArray = [];
    allProjectStatus = {};
    flowWalkthroughs = {};
    lastUpdatedConfigAt = null;
    lastProfileUpdatedAt = null;
    lastUpdatedEmbedConfigAt = null;
    embedProject = [];
    completedProjectsInFlow = {};
    features = {};
    metaConfigs = {};
    customProperties = {};
    connectProjectsParentMap = {};
    resetUserLoggedIn();
}
function saveTheLatestProps(traceId) {
    var message = {
        command: SENDING_COMMANDS.SAVE_USER_PROPS,
        data: {
            userProps: customProperties,
        },
    };
    !inPreviewMode && sendMessageToNative(message, traceId);
}
function sendAnalyticEvent(eventName, properties, traceId) {
    if (eventName === void 0) { eventName = ANALYTICS_EVENTS.ELEMENT_SEEN; }
    if (properties === void 0) { properties = {}; }
    if (inPreviewMode)
        return;
    var eventId = generateUUID();
    var timestamp = new Date().toISOString();
    var eventMessage = {
        eventName: eventName,
        data: __assign({ eventId: eventId, timestamp: timestamp }, properties)
    };
    if (!isSelfHosted) {
        eventCollectorService.enqueueEvent(eventMessage, traceId);
    }
    var projectGenerateProperties = analyticsService.getGeneralProperties();
    var message = {
        command: SENDING_COMMANDS.EVENT_CALLBACK,
        data: {
            clientCallback: {
                projectName: projectGenerateProperties === null || projectGenerateProperties === void 0 ? void 0 : projectGenerateProperties.projectName,
                language: projectGenerateProperties === null || projectGenerateProperties === void 0 ? void 0 : projectGenerateProperties.language,
                previousLanguage: properties === null || properties === void 0 ? void 0 : properties.previousLanguage,
                timestamp: timestamp,
                eventName: eventName,
                deploymentName: projectGenerateProperties === null || projectGenerateProperties === void 0 ? void 0 : projectGenerateProperties.deploymentName,
                id: eventId,
                deploymentVersion: projectGenerateProperties === null || projectGenerateProperties === void 0 ? void 0 : projectGenerateProperties.deploymentVersion,
                pageName: properties === null || properties === void 0 ? void 0 : properties.pageName,
                instructionName: properties === null || properties === void 0 ? void 0 : properties.instructionName,
                actionEventType: properties === null || properties === void 0 ? void 0 : properties.actionEventType,
                actionEventValue: properties === null || properties === void 0 ? void 0 : properties.actionEventValue,
                terminationRule: properties === null || properties === void 0 ? void 0 : properties.terminationRule,
                eventSource: JS_SDK,
                eventSourceVersion: jsVersionNumber,
                userId: getCurrentUserId(),
            },
            leapUserId: getCurrentUserId(),
        },
    };
    sendMessageToNative(message, traceId);
}
function flushFinderObserverEvents(traceId) {
    finderObserverEvents.forEach(function (finderEvent) { return observerLogService.sendObserverLog(finderEvent); });
}
function extractProjectDataForObserver(project) {
    var _a, _b;
    return project ? {
        project_id: project === null || project === void 0 ? void 0 : project.id,
        project_name: (_a = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _a === void 0 ? void 0 : _a.projectName,
        project_type: (_b = project === null || project === void 0 ? void 0 : project.projectParameters) === null || _b === void 0 ? void 0 : _b.projectType,
    } : {};
}
function buildProjectArrayLogsForObserver(projectArray) {
    if (!projectArray) {
        return [];
    }
    var projectArrayLog = [];
    projectArray.forEach(function (project) {
        projectArrayLog.push(extractProjectDataForObserver(project));
    });
    return projectArrayLog;
}
function sendObserverLogs(_a, traceId) {
    var _b = _a.event_name, event_name = _b === void 0 ? 'no_event' : _b, _c = _a.category, category = _c === void 0 ? 'no_event' : _c, _d = _a.properties, properties = _d === void 0 ? {} : _d, _e = _a.userId, userId = _e === void 0 ? getCurrentUserId() : _e, _f = _a.level, level = _f === void 0 ? ObserverLogLevel.INFO : _f;
    if (disableObserverLogging)
        return;
    if (isSelfHosted)
        return;
    if (category === OBSERVER_EVENT_CATEGORIES.FINDER && ![
        OBSERVER_EVENTS.FINDER.RENDERED_PROJECT_DETECTED,
        OBSERVER_EVENTS.FINDER.RENDERED_STEP_DETECTED,
        OBSERVER_EVENTS.FINDER.UPDATING_BOUNDS,
        OBSERVER_EVENTS.FINDER.NO_PROJECT_DETECTED,
        OBSERVER_EVENTS.FINDER.NO_STEP_DETECTED,
        OBSERVER_EVENTS.FINDER.ASSIST_VISIBLE
    ].includes(event_name)) {
        finderObserverEvents.push({
            eventName: event_name,
            category: category,
            properties: properties,
            userId: userId,
            time: new Date(),
            timestamp: Date.now(),
            level: level,
            traceId: traceId
        });
        return;
    }
    try {
        observerLogService.sendObserverLog({
            eventName: event_name,
            category: category,
            properties: properties,
            userId: userId,
            time: new Date(),
            timestamp: Date.now(),
            level: level,
            traceId: traceId
        });
    }
    catch (error) {
        console.error("Unable to push JS Observer log", error);
    }
}
function shouldBlockRequestToNative(message) {
    return message && message.command && (message.command === SENDING_COMMANDS.OBSERVER_LOG
        || message.command === SENDING_COMMANDS.ANALYTICS_EVENT);
}
function sendMessageToNative(message, traceId) {
    if (!message) {
        return;
    }
    logCommandToNativeLayer(message, traceId);
    if (shouldBlockRequestToNative(message))
        return;
    postMessageToAndroid(JSON.stringify(message));
    postMessageToIos(JSON.stringify(message));
    function logCommandToNativeLayer(message, traceId) {
        var _a;
        try {
            if (shouldLogCommandName(message)) {
                var messageData = shouldLogData(message) ? (_a = message.data) !== null && _a !== void 0 ? _a : {} : { message_data_included: false };
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.SDK.SENDING_COMMAND_TO_NATIVE,
                    category: OBSERVER_EVENT_CATEGORIES.SDK,
                    properties: {
                        command: message.command,
                        messageData: messageData
                    },
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    function shouldLogCommandName(message) {
        return (message === null || message === void 0 ? void 0 : message.command) && ![
            SENDING_COMMANDS.HIERARCHY,
            SENDING_COMMANDS.ANALYTICS_EVENT,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            SENDING_COMMANDS.CLEAR_ANALYTICS_PENDING_QUEUE,
            SENDING_COMMANDS.FLUSH_CACHED_EVENTS,
        ].includes(message.command);
    }
    function shouldLogData(message) {
        return (message === null || message === void 0 ? void 0 : message.command) && ![
            SENDING_COMMANDS.ON_CONFIG_FETCH,
            SENDING_COMMANDS.WEB_SCRIPT,
            SENDING_COMMANDS.SAVE_USER_STATE,
            SENDING_COMMANDS.ANALYTICS_EVENT,
            SENDING_COMMANDS.NO_CONTEXT_FOUND,
            SENDING_COMMANDS.HIERARCHY,
            SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
            SENDING_COMMANDS.FLUSH_CACHED_EVENTS,
            SENDING_COMMANDS.STEP_FOUND,
            SENDING_COMMANDS.ASSIST_FOUND,
            SENDING_COMMANDS.WALKTHROUGH_FOUND,
            SENDING_COMMANDS.UPDATE_ASSIST_BOUNDS,
            SENDING_COMMANDS.UPDATE_STEP_BOUNDS,
            SENDING_COMMANDS.SAVE_PREF,
            SENDING_COMMANDS.GET_PREF,
            SENDING_COMMANDS.EVENT_CALLBACK
        ].includes(message.command);
    }
}
function postMessageToAndroid(message) {
    var _a;
    (window === null || window === void 0 ? void 0 : window.JinyAndroid) && ((_a = window === null || window === void 0 ? void 0 : window.JinyAndroid) === null || _a === void 0 ? void 0 : _a.postMessage(message));
}
function postMessageToIos(e) {
    window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.iosListener &&
        window.webkit.messageHandlers.iosListener.postMessage(e);
}
function receiveScreenHierarchy(screenHierarchy, isWebFetchComplete, webIdentifiers, traceId) {
    var _a, _b, _c, _d, _e;
    try {
        waitingForResponse = false;
        hierarchyCommandLastResponseAt = Date.now();
        var timeTaken = hierarchyCommandLastResponseAt - hierarchyCommandLastSentAt;
        if (timeTaken > hierarchyFetchTimeTakenLogBuffer) {
            console.debug("receiveScreenHierarchy(): timeTaken- ".concat(timeTaken, "ms, size- ").concat(JSON.stringify(screenHierarchy || {}).length / 1000, "KB"));
        }
        if (screenHierarchy) {
            try {
                filteredHierarchy = filterHierarchy(screenHierarchy);
            }
            catch (error) {
                console.error('Error occurred filtering screen hierarchy', error);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.ERROR.ERROR_IN_FILTERING_HIERARCHY,
                    category: OBSERVER_EVENT_CATEGORIES.ERROR,
                    properties: {
                        error: error
                    },
                    level: ObserverLogLevel.ERROR,
                }, traceId);
                throw error;
            }
        }
        if (!filteredHierarchy || Object.keys(filteredHierarchy).length == 0)
            return;
        if (!isWebFetchComplete) {
            flattenedHierarchy = {};
            try {
                flattenedHierarchyArray = getFlattenedHierarchy({
                    currentNode: filteredHierarchy,
                    parentId: undefined,
                    root: true,
                    hierarchy: flattenedHierarchy,
                });
            }
            catch (error) {
                console.error('Error occurred in flattening screen hierarchy', error);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.ERROR.ERROR_IN_FLATTENING_HIERARCHY,
                    category: OBSERVER_EVENT_CATEGORIES.ERROR,
                    properties: {
                        error: error
                    },
                    level: ObserverLogLevel.ERROR,
                }, traceId);
                throw error;
            }
        }
        resetFinderObserverEvents();
        if (!isWebFetchComplete) {
            callWebScriptForAllProject(traceId);
        }
        if (activeProject.id !== "" &&
            currentStaticFlow.id !== undefined &&
            currentStaticFlow.status === "RENDERING-STEPS" &&
            selectedLanguage !== "") {
            var lastStep = (_b = (_a = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _a === void 0 ? void 0 : _a.slice(-1)) === null || _b === void 0 ? void 0 : _b[0];
            var foundProject = void 0;
            if (activeProject.isAFlowMenu) {
                parentDeploymentVersion = activeProject.projectParameters.deploymentVersion;
            }
            if (currentlyRunningFlow.id !== "") {
                foundProject = runDetectionLogicForProjects(true, webIdentifiers, traceId);
                if (!parentDeploymentVersion && (foundProject === null || foundProject === void 0 ? void 0 : foundProject.isAFlowMenu)) {
                    parentDeploymentVersion = foundProject === null || foundProject === void 0 ? void 0 : foundProject.projectParameters.deploymentVersion;
                }
            }
            var stepFound = runDetectionLogicForSteps({ lastStep: lastStep }, webIdentifiers, traceId);
            if (stepFound !== "isWeb" || isWebFetchComplete) {
                if (stepFound !== undefined) {
                    if (checkAndUpdateBounds({
                        activeAssist: stepFound,
                        activeProjectId: activeStep === null || activeStep === void 0 ? void 0 : activeStep.id,
                        isAStep: true,
                    }, traceId))
                        return;
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.FINDER.STEP_DETECTED,
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { step_type: stepFound.assistType, step_name: stepFound.assist.name, step_id: stepFound.id }),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                    renderStep(stepFound, activeProject, traceId);
                }
                else {
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.FINDER.NO_STEP_DETECTED,
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        properties: __assign({ step_id: activeStep === null || activeStep === void 0 ? void 0 : activeStep.id, step_name: (_d = (_c = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _c === void 0 ? void 0 : _c.assist) === null || _d === void 0 ? void 0 : _d.name, step_type: (_e = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _e === void 0 ? void 0 : _e.assistType }, extractProjectDataForObserver(activeProject)),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                    if (currentlyRunningFlow.id === "") {
                        if (activeStep.id !== "")
                            resetActiveStep();
                        sendMessageToNative({
                            command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                        }, traceId);
                    }
                }
                if (foundProject !== "isWeb" || isWebFetchComplete) {
                    if (foundProject !== undefined) {
                        if (foundProject.id !== currentlyRunningFlow.id || !flowShown) {
                            renderProject(foundProject, true, traceId);
                            flowShown = true;
                        }
                        sendObserverLogs({
                            event_name: OBSERVER_EVENTS.FINDER.PROJECT_DETECTED,
                            category: OBSERVER_EVENT_CATEGORIES.FINDER,
                            properties: __assign({}, extractProjectDataForObserver(activeProject)),
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                    }
                    else if (currentlyRunningFlow.id !== "") {
                        if (stepFound === undefined) {
                            resetActiveStep();
                            currentMatchedWebIdentifiers = {};
                            sendMessageToNative({
                                command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                            }, traceId);
                            flowShown = false;
                        }
                    }
                }
            }
        }
        else {
            var projectFound = runDetectionLogicForProjects(undefined, undefined, traceId);
            if (!parentDeploymentVersion && activeProject.isAFlowMenu) {
                parentDeploymentVersion = projectFound === null || projectFound === void 0 ? void 0 : projectFound.projectParameters.deploymentVersion;
            }
            if (projectFound !== "isWeb" || isWebFetchComplete) {
                if (projectFound !== undefined) {
                    if (checkAndUpdateBounds({
                        activeAssist: projectFound,
                        activeProjectId: activeProject === null || activeProject === void 0 ? void 0 : activeProject.id,
                        isAStep: false,
                    }, traceId))
                        return;
                    renderProject(projectFound, undefined, traceId);
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.FINDER.PROJECT_DETECTED,
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        properties: __assign({}, extractProjectDataForObserver(activeProject)),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                }
                else {
                    if (currentStaticFlow.status === "START") {
                        resetActiveStep();
                        resetCurrentStaticFlow();
                    }
                    clearTimeout(delayTimer);
                    sendMessageToNative({
                        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                    }, traceId);
                    resetActiveProject();
                    currentMatchedWebIdentifiers = {};
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        event_name: OBSERVER_EVENTS.FINDER.NO_PROJECT_DETECTED,
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                }
            }
        }
        flushFinderObserverEvents(traceId);
    }
    catch (error) {
        console.error('Error occurred while processing screen hierarchy and running finder logic', error);
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.ERROR.ERROR_WHILE_PROCESSING_HIERARCHY_AND_RUNNING_FINDER_LOGIC,
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            properties: {
                error: error
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
        flushFinderObserverEvents(traceId);
    }
}
function callWebScriptForAllProject(traceId) {
    var webViewProjects = embedProject
        .concat(sortedProjectArray)
        .concat(Object.values(flowWalkthroughs))
        .filter(function (project) { return project === null || project === void 0 ? void 0 : project.webIdentifiers; });
    var matchedWebViewNode = findFirstWebView(filteredHierarchy);
    if (!matchedWebViewNode) {
        return;
    }
    sendWebJSscript({
        webIdentifiers: webViewProjects.reduce(function (webIdentifierObject, project) {
            return (webIdentifierObject = __assign(__assign({}, webIdentifierObject), project.webIdentifiers));
        }, {}),
        webViewNode: matchedWebViewNode,
    }, traceId);
}
function checkAndUpdateBounds(_a, traceId) {
    var _b, _c, _d;
    var activeAssist = _a.activeAssist, activeProjectId = _a.activeProjectId, isAStep = _a.isAStep;
    if ((activeAssist === null || activeAssist === void 0 ? void 0 : activeAssist.id) === activeProjectId) {
        if (activeAssist.isAnchoredElement) {
            var matchedNode = prevMatchedIdentifiers.matchedNode.find(function (s) { return activeAssist.targetId === s.id; });
            if (JSON.stringify(matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds) !==
                JSON.stringify(previousBoundState)) {
                var bodyObj = {
                    command: isAStep
                        ? SENDING_COMMANDS.UPDATE_STEP_BOUNDS
                        : SENDING_COMMANDS.UPDATE_ASSIST_BOUNDS,
                    data: {
                        assist: activeAssist.assist,
                        projectParameters: activeProject.projectParameters,
                        auiContent: activeProject.auiContent,
                        bounds: matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds,
                        anchorNodeInfo: getAnchorNodeInfo((_d = (_c = (_b = activeAssist === null || activeAssist === void 0 ? void 0 : activeAssist.assist) === null || _b === void 0 ? void 0 : _b.instruction) === null || _c === void 0 ? void 0 : _c.assistInfo) === null || _d === void 0 ? void 0 : _d.type, activeAssist.targetId, activeProject, [matchedNode], traceId),
                    },
                };
                previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
                if (isAStep) {
                    bodyObj = __assign(__assign({}, bodyObj), { data: __assign(__assign({}, bodyObj.data), { iconSetting: activeProject.iconSetting, showLanguageOption: activeProject.languages.length > 1, showIcon: currentlyRunningFlow.id === "" ? true : false, selectedLanguage: selectedLanguage }) });
                }
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    event_name: OBSERVER_EVENTS.FINDER.UPDATING_BOUNDS,
                    properties: __assign({ activeProject: extractProjectDataForObserver(activeProject), bounds: matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds }, (isAStep ? {
                        activeStep: {
                            step_id: activeAssist.id,
                            step_name: activeAssist.assist.name,
                            type: activeAssist.assistType,
                        },
                        showIcon: currentlyRunningFlow.id === "" ? true : false,
                    } : {})),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                sendMessageToNative(bodyObj, traceId);
            }
        }
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.FINDER,
            event_name: isAStep ? OBSERVER_EVENTS.FINDER.RENDERED_STEP_DETECTED : OBSERVER_EVENTS.FINDER.RENDERED_PROJECT_DETECTED,
            properties: __assign({ activeProject: extractProjectDataForObserver(activeProject) }, (isAStep ? {
                activeStep: {
                    step_id: activeAssist.id,
                    step_name: activeAssist.assist.name,
                    type: activeAssist.assistType,
                }
            } : {})),
            level: ObserverLogLevel.DEBUG,
        }, traceId);
        return true;
    }
    return false;
}
function constructActiveProjectObject(projectFound) {
    activeProject = {
        id: projectFound.id,
        projectType: projectFound.projectParameters.projectType,
        isShowing: true,
        isAnchoredElement: projectFound.isAnchoredElement,
        isWebView: projectFound.webIdentifiers !== undefined,
        flows: projectFound.flows,
        nativeIdentifiers: projectFound.nativeIdentifiers,
        webIdentifiers: projectFound.webIdentifiers,
        auiContent: projectFound.auiContent,
        languages: projectFound.languages,
        projectParameters: projectFound.projectParameters,
        iconSetting: projectFound.iconSetting,
        webViewList: projectFound.webViewList,
        standAlone: ![
            "STATIC_FLOW",
            "STATIC_FLOW_MENU",
            "STATIC_FLOW_CHECKLIST",
        ].includes(projectFound.projectParameters.projectType),
        isAFlow: projectFound.projectParameters.projectType === "STATIC_FLOW",
        isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(projectFound.projectParameters.projectType),
    };
}
function renderStep(stepFound, projectFound, traceId) {
    currentStaticFlow.stepsStatus.push({
        id: stepFound.id,
        toShow: true,
        completed: false,
        isOptional: stepFound.isOptional,
        isAnchoredElement: !!(stepFound === null || stepFound === void 0 ? void 0 : stepFound.isAnchoredElement),
        identifier: stepFound.targetId,
        nextSteps: stepFound.nextSteps,
        completionStep: !!stepFound.isSuccess,
        step: stepFound.assist,
    });
    activeStep = {
        step: stepFound,
        id: stepFound.id,
        isAnchoredElement: !!(stepFound === null || stepFound === void 0 ? void 0 : stepFound.isAnchoredElement),
    };
    var bodyObj = {
        command: SENDING_COMMANDS.STEP_FOUND,
        data: {
            assist: stepFound.assist,
            localeSounds: stepFound === null || stepFound === void 0 ? void 0 : stepFound.localeSounds,
            projectParameters: activeProject.projectParameters,
            auiContent: activeProject.auiContent,
            iconSetting: activeProject.iconSetting,
            showLanguageOption: activeProject.languages.length > 1,
            showIcon: currentlyRunningFlow.id === "" ? true : false,
            selectedLanguage: selectedLanguage,
            anchorNodeInfo: getAnchorNodeInfo(stepFound.assistType, stepFound.targetId, projectFound, prevMatchedIdentifiers.matchedNode, traceId),
        },
    };
    if (stepFound.targetId) {
        var matchedNode = prevMatchedIdentifiers.matchedNode.find(function (s) { return stepFound.targetId === s.id; });
        previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
        bodyObj.data.bounds = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
    }
    sendMessageToNative(bodyObj, traceId);
}
function renderProject(projectFound, showOnlyFlowIcon, traceId) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (showOnlyFlowIcon === void 0) { showOnlyFlowIcon = false; }
    var bodyObj = {
        command: SENDING_COMMANDS.ASSIST_FOUND,
        data: {
            assist: projectFound.assist,
            projectParameters: projectFound.projectParameters,
            auiContent: projectFound.auiContent,
            localeSounds: projectFound === null || projectFound === void 0 ? void 0 : projectFound.localeSounds,
        },
    };
    var showOnlyIcon = projectFound.assist.autoStart ||
        getTriggerConditionForStaticFlow(projectFound.triggerCase, (_a = allProjectStatus[projectFound.id]) === null || _a === void 0 ? void 0 : _a.isShown, (_b = allProjectStatus[projectFound.id]) === null || _b === void 0 ? void 0 : _b.isFlowTriggered) === "ICON";
    if (projectFound.isAFlow || projectFound.isAFlowMenu) {
        bodyObj.command = SENDING_COMMANDS.WALKTHROUGH_FOUND;
        selectedLanguage = setSelectedLanguage(projectFound.languages, appLocale || selectedLanguage);
        bodyObj.data = __assign(__assign({}, bodyObj.data), { selectedLanguage: selectedLanguage, showLanguagePanel: selectedLanguage === "", languages: projectFound.languages, iconSetting: projectFound.iconSetting, showIcon: showOnlyFlowIcon || showOnlyIcon, autoStart: projectFound.assist.autoStart });
    }
    if (projectFound.isAFlowMenu) {
        if (currentlyRunningFlow.id === projectFound.id ||
            currentlyRunningFlow.id === "")
            sendProjectCompletion({ id: projectFound.id, reset: false }, traceId);
        else
            sendProjectCompletion({ reset: true }, traceId);
        activeProject.id = projectFound.id;
        flowShown = true;
        currentlyRunningFlow = {
            id: projectFound.id,
            active: true,
        };
    }
    if (projectFound.isAFlow && !projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        currentStaticFlow = {
            id: projectFound.id,
            isWebView: projectFound.isWebView,
            projectId: projectFound.projectParameters.deploymentId,
            status: "START",
            onlyIcon: showOnlyIcon,
            completed: false,
            autoStart: projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist.autoStart,
            stepsStatus: [],
        };
    }
    if (!(projectFound.isAFlow || projectFound.isAFlowMenu)) {
        if (projectFound.isAnchoredElement) {
            var getNativeMatchedNode = (_c = prevMatchedIdentifiers === null || prevMatchedIdentifiers === void 0 ? void 0 : prevMatchedIdentifiers.matchedNode) === null || _c === void 0 ? void 0 : _c.find(function (s) { return projectFound.targetId === s.id; });
            var getWebMatchedNode = (_d = currentMatchedWebIdentifiers === null || currentMatchedWebIdentifiers === void 0 ? void 0 : currentMatchedWebIdentifiers.matchedNode) === null || _d === void 0 ? void 0 : _d.find(function (s) { return projectFound.targetId === s.id; });
            var matchedNode = projectFound.isWebView
                ? getWebMatchedNode
                : getNativeMatchedNode;
            previousBoundState = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
            bodyObj.data.bounds = matchedNode === null || matchedNode === void 0 ? void 0 : matchedNode.bounds;
            bodyObj.data.anchorNodeInfo = getAnchorNodeInfo((_g = (_f = (_e = projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist) === null || _e === void 0 ? void 0 : _e.instruction) === null || _f === void 0 ? void 0 : _f.assistInfo) === null || _g === void 0 ? void 0 : _g.type, projectFound === null || projectFound === void 0 ? void 0 : projectFound.targetId, projectFound, prevMatchedIdentifiers === null || prevMatchedIdentifiers === void 0 ? void 0 : prevMatchedIdentifiers.matchedNode, traceId);
        }
    }
    if (!projectFound.isAFlowMenu && !showOnlyFlowIcon) {
        constructActiveProjectObject(projectFound);
    }
    if (projectFound.assist.autoStart &&
        showOnlyIcon &&
        !allProjectStatus[projectFound.id].isShown) {
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: projectFound === null || projectFound === void 0 ? void 0 : projectFound.assist.autoStart });
        resetFlow();
    }
    delayTimer = setTimeout(function () { return sendMessageToNative(bodyObj, traceId); }, ((_h = allProjectStatus[projectFound.id]) === null || _h === void 0 ? void 0 : _h.isShown) ? 0 : projectFound === null || projectFound === void 0 ? void 0 : projectFound.triggerDelay);
}
function runDetectionLogicForProjects(searchOnlyFlowMenu, webIdentifiers, traceId) {
    var _a;
    if (searchOnlyFlowMenu === void 0) { searchOnlyFlowMenu = false; }
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.FINDER.RUNNING_DETECTION_LOGIC_FOR_PROJECTS,
        category: OBSERVER_EVENT_CATEGORIES.FINDER,
        properties: {
            activeProject: extractProjectDataForObserver(activeProject)
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    var projectFound = (_a = embedProject
        .concat(sortedProjectArray)) === null || _a === void 0 ? void 0 : _a.find(function (project, i) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29;
        if (project === undefined)
            return;
        if ([
            'FEEDBACK_BOTTOM_SHEET',
            'FEEDBACK_FULLSCREEN',
            'FEEDBACK_POPUP',
            'NPS_BOTTOM_SHEET',
            'NPS_FULLSCREEN',
            'NPS_POPUP'
        ].includes((_a = project.projectParameters) === null || _a === void 0 ? void 0 : _a.projectType) &&
            !navigator.onLine) {
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.FINDER.SKIPPING_PROJECT_DUE_TO_OFFLINE_MODE,
                category: OBSERVER_EVENT_CATEGORIES.FINDER,
                properties: __assign({}, extractProjectDataForObserver(project)),
                level: ObserverLogLevel.DEBUG,
            }, traceId);
            return false;
        }
        if (((_b = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _b === void 0 ? void 0 : _b.isTerminated) ||
            (!project.id.includes("discovery") && ((_c = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _c === void 0 ? void 0 : _c.isCompleted))) {
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.FINDER.SKIPPING_PROJECT_DUE_TO_COMPLETION,
                category: OBSERVER_EVENT_CATEGORIES.FINDER,
                properties: __assign({}, extractProjectDataForObserver(project)),
                level: ObserverLogLevel.DEBUG,
            }, traceId);
            return;
        }
        if (project.isWebView && (!currentMatchedWebIdentifiers || isEmptyObject(currentMatchedWebIdentifiers))) {
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.FINDER.SKIPPING_WEBVIEW_PROJECT_DUE_TO_EMPTY_MATCHED_WEB_IDENTIFIERS,
                category: OBSERVER_EVENT_CATEGORIES.FINDER,
                properties: __assign({}, extractProjectDataForObserver(project)),
                level: ObserverLogLevel.DEBUG,
            }, traceId);
            return false;
        }
        if (((_e = (_d = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _d === void 0 ? void 0 : _d.initialTerminationStatus) === null || _e === void 0 ? void 0 : _e.nSession) !==
            -1 &&
            ((_g = (_f = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _f === void 0 ? void 0 : _f.terminationStatus) === null || _g === void 0 ? void 0 : _g.nSession) >=
                ((_j = (_h = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _h === void 0 ? void 0 : _h.initialTerminationStatus) === null || _j === void 0 ? void 0 : _j.nSession) &&
            ((_k = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _k === void 0 ? void 0 : _k.shownOnce) === false) {
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.FINDER.SKIPPING_PROJECT_DUE_TO_TERMINATION,
                category: OBSERVER_EVENT_CATEGORIES.FINDER,
                properties: __assign({ terminationRule: {
                        nSession: (_m = (_l = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _l === void 0 ? void 0 : _l.terminationStatus) === null || _m === void 0 ? void 0 : _m.nSession
                    } }, extractProjectDataForObserver(project)),
                level: ObserverLogLevel.DEBUG,
            }, traceId);
            if (!((_o = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _o === void 0 ? void 0 : _o.isCompleted)) {
                removeProjectFromStatusArray({ id: project === null || project === void 0 ? void 0 : project.id, saveState: false }, traceId);
            }
            return false;
        }
        else if ((((_q = (_p = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _p === void 0 ? void 0 : _p.initialTerminationStatus) === null || _q === void 0 ? void 0 : _q.nDismissedByUser) !== -1 &&
            ((_s = (_r = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _r === void 0 ? void 0 : _r.terminationStatus) === null || _s === void 0 ? void 0 : _s.nDismissedByUser) === 1) ||
            (((_u = (_t = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _t === void 0 ? void 0 : _t.initialTerminationStatus) === null || _u === void 0 ? void 0 : _u.perApp) !== -1 &&
                ((_w = (_v = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _v === void 0 ? void 0 : _v.terminationStatus) === null || _w === void 0 ? void 0 : _w.perApp) >= ((_y = (_x = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _x === void 0 ? void 0 : _x.initialTerminationStatus) === null || _y === void 0 ? void 0 : _y.perApp)) ||
            (((_0 = (_z = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _z === void 0 ? void 0 : _z.initialTerminationStatus) === null || _0 === void 0 ? void 0 : _0.untilAllFlowsAreCompleted) &&
                ((_2 = (_1 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _1 === void 0 ? void 0 : _1.terminationStatus) === null || _2 === void 0 ? void 0 : _2.untilAllFlowsAreCompleted))) {
            var terminationRule = void 0;
            if (((_4 = (_3 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _3 === void 0 ? void 0 : _3.initialTerminationStatus) === null || _4 === void 0 ? void 0 : _4.nDismissedByUser) !== -1 &&
                ((_6 = (_5 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _5 === void 0 ? void 0 : _5.terminationStatus) === null || _6 === void 0 ? void 0 : _6.nDismissedByUser) === 1) {
                terminationRule = {
                    nDismissedByUser: (_8 = (_7 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _7 === void 0 ? void 0 : _7.terminationStatus) === null || _8 === void 0 ? void 0 : _8.nDismissedByUser
                };
            }
            else if (((_10 = (_9 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _9 === void 0 ? void 0 : _9.initialTerminationStatus) === null || _10 === void 0 ? void 0 : _10.perApp) !== -1 &&
                ((_12 = (_11 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _11 === void 0 ? void 0 : _11.terminationStatus) === null || _12 === void 0 ? void 0 : _12.perApp) >= ((_14 = (_13 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _13 === void 0 ? void 0 : _13.initialTerminationStatus) === null || _14 === void 0 ? void 0 : _14.perApp)) {
                terminationRule = {
                    perApp: (_16 = (_15 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _15 === void 0 ? void 0 : _15.terminationStatus) === null || _16 === void 0 ? void 0 : _16.perApp
                };
            }
            else {
                terminationRule = {
                    untilAllFlowsAreCompleted: (_18 = (_17 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _17 === void 0 ? void 0 : _17.terminationStatus) === null || _18 === void 0 ? void 0 : _18.untilAllFlowsAreCompleted
                };
            }
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.FINDER.SKIPPING_PROJECT_DUE_TO_TERMINATION,
                category: OBSERVER_EVENT_CATEGORIES.FINDER,
                properties: __assign({ terminationRule: terminationRule }, extractProjectDataForObserver(project)),
                level: ObserverLogLevel.DEBUG,
            }, traceId);
            if (!((_19 = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[project.id]) === null || _19 === void 0 ? void 0 : _19.isCompleted)) {
                removeProjectFromStatusArray({ id: project === null || project === void 0 ? void 0 : project.id, saveState: false }, traceId);
            }
            return false;
        }
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.FINDER.STARTING_IDENTIFIER_MATCHING_FOR_PROJECT,
            category: OBSERVER_EVENT_CATEGORIES.FINDER,
            properties: __assign({}, extractProjectDataForObserver(project)),
            level: ObserverLogLevel.DEBUG,
        }, traceId);
        switch (true) {
            case project.isAFlow:
            case project.isAFlowMenu: {
                if (project === null || project === void 0 ? void 0 : project.isWebView) {
                    res = webIdentifiers || currentMatchedWebIdentifiers;
                }
                else {
                    res = findMatches(filteredHierarchy, project.nativeIdentifiers, traceId);
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.FINDER.NATIVE_IDENTIFIER_MATCHING_STATUS,
                        category: OBSERVER_EVENT_CATEGORIES.FINDER,
                        properties: __assign(__assign({}, extractProjectDataForObserver(project)), { identifierStatus: {
                                matchedIdentifiers: res.matchedIdentifiers,
                                unMatchedIdentifiers: res.unMatchedIdentifiers,
                            } }),
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                }
                var assistIdentifiers = (project === null || project === void 0 ? void 0 : project.isWebView) ? __spreadArray(__spreadArray([], __read(project.assist.webIdentifiers), false), __read((project.targetId ? [project.targetId] : [])), false) : __spreadArray(__spreadArray([], __read(project.assist.nativeIdentifiers), false), __read((project.targetId ? [project.targetId] : [])), false);
                var found = checkIfIdentifierMatch(res === null || res === void 0 ? void 0 : res.matchedIdentifiers, assistIdentifiers);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.FINDER.PROJECT_DETECTION_LOGIC_STATUS,
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    properties: __assign(__assign({}, extractProjectDataForObserver(project)), { assistIdentifiers: assistIdentifiers, didProjectIdentifiersMatch: found, shouldShowProject: ((!((_20 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _20 === void 0 ? void 0 : _20.isShown) ||
                            !((_21 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _21 === void 0 ? void 0 : _21.isCompleted) ||
                            (project === null || project === void 0 ? void 0 : project.isIconEnabled)) &&
                            checkToShowProject(project === null || project === void 0 ? void 0 : project.id)) || searchOnlyFlowMenu }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                if (found && (((!((_22 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _22 === void 0 ? void 0 : _22.isShown) ||
                    !((_23 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _23 === void 0 ? void 0 : _23.isCompleted) ||
                    (project === null || project === void 0 ? void 0 : project.isIconEnabled)) && checkToShowProject(project === null || project === void 0 ? void 0 : project.id)) ||
                    searchOnlyFlowMenu)) {
                    return project;
                }
                break;
            }
            case !project.isWebView: {
                if (searchOnlyFlowMenu)
                    break;
                var res = findMatches(filteredHierarchy, project.nativeIdentifiers, traceId);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.FINDER.NATIVE_IDENTIFIER_MATCHING_STATUS,
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    properties: __assign(__assign({}, extractProjectDataForObserver(project)), { identifierStatus: {
                            matchedIdentifiers: res.matchedIdentifiers,
                            unMatchedIdentifiers: res.unMatchedIdentifiers,
                        } }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                prevMatchedIdentifiers = res;
                var found = false;
                var assistIdentifiers = project.isAnchoredElement ? __spreadArray(__spreadArray([], __read(project.assist.nativeIdentifiers), false), [project.targetId], false) : project.assist.nativeIdentifiers;
                found = isArrayMatched(assistIdentifiers, res.matchedIdentifiers);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.FINDER.PROJECT_DETECTION_LOGIC_STATUS,
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    properties: __assign(__assign({}, extractProjectDataForObserver(project)), { assistIdentifiers: assistIdentifiers, didProjectIdentifiersMatch: found, shouldShowProject: (!((_24 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _24 === void 0 ? void 0 : _24.isShown) ||
                            !((_25 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _25 === void 0 ? void 0 : _25.isCompleted)) &&
                            checkToShowProject(project === null || project === void 0 ? void 0 : project.id) }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                if (found &&
                    allProjectStatus[project.id] &&
                    (!((_26 = allProjectStatus[project.id]) === null || _26 === void 0 ? void 0 : _26.isShown) ||
                        !((_27 = allProjectStatus[project.id]) === null || _27 === void 0 ? void 0 : _27.isCompleted)) &&
                    checkToShowProject(project.id))
                    return project;
                break;
            }
            case project.isWebView: {
                if (searchOnlyFlowMenu)
                    break;
                var res = currentMatchedWebIdentifiers;
                prevMatchedIdentifiers = res;
                if (res === undefined)
                    break;
                var assistIdentifiers = project.isAnchoredElement ? __spreadArray(__spreadArray([], __read(project.assist.webIdentifiers), false), [project.targetId], false) : project.assist.webIdentifiers;
                var found = checkIfIdentifierMatch(res.matchedIdentifiers, assistIdentifiers);
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.FINDER.PROJECT_DETECTION_LOGIC_STATUS,
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    properties: __assign(__assign({}, extractProjectDataForObserver(project)), { assistIdentifiers: assistIdentifiers, didProjectIdentifiersMatch: found, shouldShowProject: ((!((_28 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _28 === void 0 ? void 0 : _28.isShown) ||
                            !((_29 = allProjectStatus[project === null || project === void 0 ? void 0 : project.id]) === null || _29 === void 0 ? void 0 : _29.isCompleted)) &&
                            checkToShowProject(project === null || project === void 0 ? void 0 : project.id)) }),
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                if (found &&
                    (!allProjectStatus[project.id].isShown ||
                        !allProjectStatus[project.id].isCompleted) &&
                    checkToShowProject(project.id))
                    return project;
                break;
            }
        }
    });
    return (projectFound === null || projectFound === void 0 ? void 0 : projectFound.isWebView) && !currentMatchedWebIdentifiers
        ? "isWeb"
        : projectFound;
}
function runDetectionLogicForSteps(_a, webIdentifiers, traceId) {
    var lastStep = _a.lastStep;
    var currentStepIds;
    if (lastStep === undefined) {
        currentStepIds = [activeProject.flows[0].firstStep];
    }
    else if ((lastStep === null || lastStep === void 0 ? void 0 : lastStep.toShow) && !(lastStep === null || lastStep === void 0 ? void 0 : lastStep.completed)) {
        currentStepIds = [lastStep.id];
    }
    else {
        currentStepIds = lastStep.nextSteps;
    }
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.FINDER.RUNNING_DETECTION_LOGIC_FOR_STEPS,
        category: OBSERVER_EVENT_CATEGORIES.FINDER,
        properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { currentStepIds: currentStepIds }),
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    var resWeb = webIdentifiers;
    var resNative = findMatches(filteredHierarchy, activeProject.nativeIdentifiers, traceId);
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.FINDER.NATIVE_IDENTIFIER_MATCHING_STATUS,
        category: OBSERVER_EVENT_CATEGORIES.FINDER,
        properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { currentStepIds: currentStepIds, identifierStatus: {
                matchedIdentifiers: resNative.matchedIdentifiers,
                unMatchedIdentifiers: resNative.unMatchedIdentifiers,
            } }),
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    var stepFound;
    activeProject.flows[0].pages.find(function (page) {
        var e_11, _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var didPageIdentifiersMatch = checkIfIdentifierMatch(resNative.matchedIdentifiers, page.nativeIdentifiers);
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.FINDER.PAGE_IDENTIFIERS_MATCHING_STATUS,
            category: OBSERVER_EVENT_CATEGORIES.FINDER,
            properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { currentStepIds: currentStepIds, pageIdentifiers: page.nativeIdentifiers, didPageIdentifiersMatch: didPageIdentifiersMatch }),
            level: ObserverLogLevel.DEBUG,
        }, traceId);
        if (didPageIdentifiersMatch) {
            try {
                for (var _o = __values(page.stages), _p = _o.next(); !_p.done; _p = _o.next()) {
                    var stage = _p.value;
                    if (currentStepIds.includes(stage.uniqueID) &&
                        stage.webIdentifiers !== undefined &&
                        !webIdentifiers) {
                        sendObserverLogs({
                            event_name: OBSERVER_EVENTS.FINDER.SKIPPING_WEBVIEW_STEP_DUE_TO_EMPTY_MATCHED_WEB_IDENTIFIERS,
                            category: OBSERVER_EVENT_CATEGORIES.FINDER,
                            properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { step_id: stage.uniqueID, step_name: stage.name }),
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                        stepFound = "isWeb";
                        return true;
                    }
                    if (currentStepIds.includes(stage.uniqueID) &&
                        checkIfIdentifierMatch(stage.webIdentifiers !== undefined
                            ? resWeb === null || resWeb === void 0 ? void 0 : resWeb.matchedIdentifiers
                            : resNative === null || resNative === void 0 ? void 0 : resNative.matchedIdentifiers, stage.webIdentifiers !== undefined
                            ? __spreadArray(__spreadArray([], __read(stage.webIdentifiers), false), __read((((_c = (_b = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _b === void 0 ? void 0 : _b.assistInfo) === null || _c === void 0 ? void 0 : _c.identifier)
                                ? [stage.instruction.assistInfo.identifier]
                                : [])), false) : __spreadArray(__spreadArray([], __read(stage.nativeIdentifiers), false), __read((((_e = (_d = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _d === void 0 ? void 0 : _d.assistInfo) === null || _e === void 0 ? void 0 : _e.identifier)
                            ? [stage.instruction.assistInfo.identifier]
                            : [])), false))) {
                        sendObserverLogs({
                            event_name: OBSERVER_EVENTS.FINDER.STEP_DETECTION_LOGIC_STATUS,
                            category: OBSERVER_EVENT_CATEGORIES.FINDER,
                            properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { step_id: stage.uniqueID, step_name: stage.name, didStepIdentifiersMatch: true }),
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                        prevMatchedIdentifiers = stage.webIdentifiers ? resWeb : resNative;
                        stepFound = {
                            id: stage === null || stage === void 0 ? void 0 : stage.uniqueID,
                            isWebView: (stage === null || stage === void 0 ? void 0 : stage.webIdentifiers) !== undefined,
                            isOptional: stage === null || stage === void 0 ? void 0 : stage.optional,
                            assist: stage,
                            isAnchoredElement: !!((_g = (_f = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _f === void 0 ? void 0 : _f.assistInfo) === null || _g === void 0 ? void 0 : _g.identifier),
                            targetId: (_j = (_h = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _h === void 0 ? void 0 : _h.assistInfo) === null || _j === void 0 ? void 0 : _j.identifier,
                            nextSteps: (_k = stage === null || stage === void 0 ? void 0 : stage.transition) === null || _k === void 0 ? void 0 : _k.nextSteps,
                            nativeIdentifiers: stage === null || stage === void 0 ? void 0 : stage.nativeIdentifiers,
                            webIdentifiers: stage === null || stage === void 0 ? void 0 : stage.webIdentifiers,
                            isSuccess: stage === null || stage === void 0 ? void 0 : stage.isSuccess,
                            assistType: (_m = (_l = stage === null || stage === void 0 ? void 0 : stage.instruction) === null || _l === void 0 ? void 0 : _l.assistInfo) === null || _m === void 0 ? void 0 : _m.type,
                        };
                        return true;
                    }
                    else {
                        sendObserverLogs({
                            event_name: OBSERVER_EVENTS.FINDER.STEP_DETECTION_LOGIC_STATUS,
                            category: OBSERVER_EVENT_CATEGORIES.FINDER,
                            properties: __assign(__assign({}, extractProjectDataForObserver(activeProject)), { step_id: stage.uniqueID, step_name: stage.name, didStepIdentifiersMatch: false }),
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_p && !_p.done && (_a = _o.return)) _a.call(_o);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
    });
    return stepFound;
}
function getAnchorNodeInfo(assistType, targetIdentifierId, projectFound, matchedNode, traceId) {
    var _a;
    if (!["TOOLTIP", "HIGHLIGHT_WITH_DESC"].includes(assistType))
        return null;
    var anchorNode = matchedNode.find(function (node) { return (node === null || node === void 0 ? void 0 : node.id) === targetIdentifierId; });
    var bounds = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode["bounds"];
    var node = flattenedHierarchy[(_a = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode["node"]) === null || _a === void 0 ? void 0 : _a["uuid"]];
    if (node["is_webview"]) {
        var targetIdentifier = projectFound.webIdentifiers[targetIdentifierId];
        var focusScript = createFocusJavascript(targetIdentifier);
        return {
            uuid: node["uuid"],
            autoFocus: true,
            autoFocusScript: focusScript,
            autoScroll: true,
            scrollToViewScript: getScrollToViewScript(assistType, node, targetIdentifier),
            scrollingParentInfo: {
                uuid: (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.uuid) || null,
            },
        };
    }
    var scrollableParents = getScrollableParentNodes(assistType, node, traceId);
    var scrollingParentInfoOld = scrollableParents.find(function (scrollableParent) {
        return ((scrollableParent === null || scrollableParent === void 0 ? void 0 : scrollableParent.isAppBarLayout) || (scrollableParent === null || scrollableParent === void 0 ? void 0 : scrollableParent.is_vertically_scrollable));
    });
    return {
        uuid: node["uuid"],
        autoFocus: true,
        autoScroll: shouldAutoScroll(assistType, node, bounds),
        scrollingParentInfo: scrollingParentInfoOld || null,
        autoScroll2D: shouldAutoScroll2D(assistType, node, bounds, scrollableParents),
        scrollingParentInfoList: scrollableParents,
    };
}
function getScrollToViewScript(assistType, anchorNode, targetIdentifier) {
    if (!anchorNode)
        return false;
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType))
        return null;
    var querySelectorAllStatement = createQuerySelectorAllStatement(targetIdentifier);
    return "\n  (function(){\n  try{\n  let wfx_scrollElement = ".concat(querySelectorAllStatement, ";\n  if(wfx_scrollElement){\n      const position = wfx_scrollElement.getBoundingClientRect();\n      let screenWidth = (window?.innerWidth || document?.documentElement?.clientWidth || document?.body?.clientWidth || 0) ;\n      let screenHeight =(window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight || 0);\n      screenHeight = screenHeight - (screenHeight * ").concat(webviewScrollThresholds.HEIGHT, ");\n      screenWidth = screenWidth - (screenWidth * ").concat(webviewScrollThresholds.WIDTH, ");\n      if(position.bottom > screenHeight\n       || position.top < ").concat(webviewScrollThresholds.TOP, "\n        || position.left < ").concat(webviewScrollThresholds.LEFT, " || \n        position.right > screenWidth){\n        wfx_scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center',inline: \"center\" });\n      }else if(typeof wfx_scrollElement.scrollIntoViewIfNeeded === 'function'){\n        wfx_scrollElement.scrollIntoViewIfNeeded(true);\n      }\n  }\n  }catch(e){\n    console.error(e);\n  }\n  })()\n  ");
}
function shouldAutoScroll2D(assistType, node, nodeBounds, parentNodes) {
    var _a, _b, _c, _d;
    var screenHeight = (_b = (_a = flattenedHierarchy === null || flattenedHierarchy === void 0 ? void 0 : flattenedHierarchy.ROOT_NODE) === null || _a === void 0 ? void 0 : _a.screen_height) !== null && _b !== void 0 ? _b : -1;
    var screenWidth = (_d = (_c = flattenedHierarchy === null || flattenedHierarchy === void 0 ? void 0 : flattenedHierarchy.ROOT_NODE) === null || _c === void 0 ? void 0 : _c.screen_width) !== null && _d !== void 0 ? _d : -1;
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType) || !node || !nodeBounds || !parentNodes
        || screenHeight == -1 || screenWidth == -1) {
        return false;
    }
    var top = nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.top;
    var bottom = nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.bottom;
    var left = nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.left;
    var right = nodeBounds === null || nodeBounds === void 0 ? void 0 : nodeBounds.right;
    var insideBounds = parentNodes.every(function (parentNode) {
        if (parentNode === null || parentNode === void 0 ? void 0 : parentNode.isAppBarLayout) {
            return true;
        }
        var _a = ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.bounds) || {}), parentTop = _a.top, parentLeft = _a.left, parentRight = _a.right, parentBottom = _a.bottom;
        return (top >= parentTop && bottom <= parentBottom && left >= parentLeft && right <= parentRight);
    });
    if (insideBounds) {
        return (bottom > (screenHeight - (screenHeight * 0.1)) || top < 5 ||
            left < 0 || right > (screenWidth - (screenWidth * 0.1)));
    }
    return !insideBounds;
}
function shouldAutoScroll(assistType, anchorNode, bounds) {
    var _a, _b;
    if (!anchorNode)
        return false;
    if (![
        "TOOLTIP",
        "HIGHLIGHT_WITH_DESC",
        "FINGER_RIPPLE",
        "SWIPE_LEFT",
        "SWIPE_RIGHT",
        "SWIPE_UP",
        "SWIPE_DOWN",
        "BEACON",
    ].includes(assistType))
        return false;
    var screenHeight = (_b = (_a = flattenedHierarchy === null || flattenedHierarchy === void 0 ? void 0 : flattenedHierarchy.ROOT_NODE) === null || _a === void 0 ? void 0 : _a.screen_height) !== null && _b !== void 0 ? _b : -1;
    if (screenHeight == -1)
        return false;
    var top = bounds === null || bounds === void 0 ? void 0 : bounds.top;
    var bottom = bounds === null || bounds === void 0 ? void 0 : bounds.bottom;
    return bottom > (screenHeight - (screenHeight * 0.1)) || top < 5;
}
var ANDROID_SUPPORT_COLLAPSING_TOOLBAR = "android.support.design.widget.CollapsingToolbarLayout";
var GOOGLE_MATERIAL_COLLAPSING_TOOLBAR = "com.google.android.material.appbar.CollapsingToolbarLayout";
var ANDROID_SUPPORT_APP_BAR_LAYOUT = "android.support.design.widget.AppBarLayout";
var GOOGLE_MATERIAL_APP_BAR_LAYOUT = "com.google.android.material.appbar.AppBarLayout";
function isCollapsibleToolbar(node) {
    var className = node.class;
    return (ANDROID_SUPPORT_COLLAPSING_TOOLBAR === className ||
        GOOGLE_MATERIAL_COLLAPSING_TOOLBAR === className);
}
function canViewHorizontallyScroll(node) {
    return node && node["is_horizontally_scrollable"];
}
function canViewVerticallyScroll(node) {
    return node && node["is_vertically_scrollable"];
}
function fetchAppBarLayout(node) {
    if (!node)
        return null;
    var className = node.class;
    if (ANDROID_SUPPORT_APP_BAR_LAYOUT === className ||
        GOOGLE_MATERIAL_APP_BAR_LAYOUT === className) {
        return node;
    }
    var parentUUID = node["parent_uuid"];
    if (!parentUUID)
        return null;
    var parentNode = flattenedHierarchy[parentUUID];
    return fetchAppBarLayout(parentNode);
}
function getScrollableParentNodesInfo(anchorNode, parentNodes) {
    var _a;
    if (parentNodes === void 0) { parentNodes = []; }
    if (!anchorNode) {
        return parentNodes;
    }
    if (platform === "ANDROID" && isCollapsibleToolbar(anchorNode)) {
        parentNodes.push({
            uuid: (_a = fetchAppBarLayout(anchorNode)) === null || _a === void 0 ? void 0 : _a.uuid,
            isAppBarLayout: true,
        });
        return parentNodes;
    }
    var isVerticallyScrollable = canViewVerticallyScroll(anchorNode);
    var isHorizontallyScrollable = canViewHorizontallyScroll(anchorNode);
    if (isVerticallyScrollable || isHorizontallyScrollable) {
        parentNodes.push({
            uuid: anchorNode.uuid,
            isAppBarLayout: false,
            is_horizontally_scrollable: isHorizontallyScrollable,
            is_vertically_scrollable: isVerticallyScrollable,
            bounds: anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.bounds
        });
    }
    var parentUUID = anchorNode["parent_uuid"];
    if (!parentUUID) {
        return parentNodes;
    }
    return getScrollableParentNodesInfo(flattenedHierarchy[parentUUID], parentNodes);
}
function getScrollableParentNodes(assistType, anchorNode, traceId) {
    try {
        if (![
            "TOOLTIP",
            "HIGHLIGHT_WITH_DESC",
            "FINGER_RIPPLE",
            "SWIPE_LEFT",
            "SWIPE_RIGHT",
            "SWIPE_UP",
            "SWIPE_DOWN",
            "BEACON",
        ].includes(assistType) || !anchorNode) {
            return [];
        }
        return getScrollableParentNodesInfo(anchorNode);
    }
    catch (error) {
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            event_name: OBSERVER_EVENTS.ERROR.ERROR_WHILE_PROCESSING_SCROLLABLE_PARENT_NODE,
            properties: {
                error: error
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
        return [];
    }
}
function updateProjectStatus(_a, traceId) {
    var id = _a.id, isShown = _a.isShown, isCompleted = _a.isCompleted, isFlowTriggered = _a.isFlowTriggered, isTerminated = _a.isTerminated, terminatedByIcon = _a.terminatedByIcon;
    if (!id)
        return;
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.PROJECT.UPDATING_PROJECT_STATUS,
        category: OBSERVER_EVENT_CATEGORIES.PROJECT,
        properties: {
            project_id: id,
            updated: __assign({}, Object.fromEntries(Object.entries({
                isShown: isShown,
                isCompleted: isCompleted,
                isFlowTriggered: isFlowTriggered,
                isTerminated: isTerminated,
                terminatedByIcon: terminatedByIcon,
            }).filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], value = _b[1];
                return value !== undefined;
            }))),
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    if (isShown != undefined) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isShown: isShown });
    }
    if (isCompleted != undefined) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isCompleted: isCompleted });
    }
    if (isFlowTriggered != undefined) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isFlowTriggered: isFlowTriggered });
    }
    if (isTerminated != undefined) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { isTerminated: isTerminated });
    }
    if (terminatedByIcon != undefined) {
        allProjectStatus[id] = __assign(__assign({}, allProjectStatus[id]), { terminatedByIcon: terminatedByIcon });
    }
    saveTheLatestStateChange(traceId);
}
function receiveWebIdentifiers(webIdentifiers, traceId) {
    prevMatchedIdentifiers = {};
    currentMatchedWebIdentifiers = webIdentifiers;
    receiveScreenHierarchy(undefined, true, webIdentifiers, traceId);
}
function updateAssistInteraction(res, traceId) {
    var _a, _b;
    var actionCallback = res.body;
    function isRunningFlowPartOfChecklist(projectId) {
        return connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[projectId];
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.optIn) {
        if ((actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId) && isRunningFlowPartOfChecklist(actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId)) {
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, {
                selectedProjectId: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId,
                deploymentId: connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId].deploymentId,
                projectId: connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId].projectId,
                deploymentVersion: connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId].deploymentVersion,
                selectedFlow: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle,
                elementName: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle,
            }, traceId);
        }
        if (!(currentlyRunningFlow === null || currentlyRunningFlow === void 0 ? void 0 : currentlyRunningFlow.id)) {
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle)
                ? {
                    selectedFlow: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.flowTitle,
                    selectedProjectId: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId,
                }
                : {}, traceId);
        }
    }
    if (actionCallback.carouselSlideId) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: actionCallback.type,
            actionEventValue: actionCallback.buttonLabel,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
            carouselCompleted: String(actionCallback.carouselCompleted || false),
            carouselSlideId: actionCallback.carouselSlideId,
            carouselPreviousSlideId: (!actionCallback.carouselPreviousSlideId || actionCallback.carouselPreviousSlideId === "null")
                ? null
                : actionCallback.carouselPreviousSlideId,
            carouselDirection: (!actionCallback.carouselDirection || actionCallback.carouselDirection === "null")
                ? null
                : actionCallback.carouselDirection,
            sdkVersionCode: sdkVersion,
        }, traceId);
    }
    else if (actionCallback.deepLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.DEEP_LINK,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
        }, traceId);
    }
    else if (actionCallback.externalLink) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.EXTERNAL_LINK,
            externalLink: actionCallback.externalLink,
            deepLink: actionCallback.deepLink,
        }, traceId);
    }
    else if (actionCallback.actionType &&
        (actionCallback.actionType === "overlayClicked" ||
            actionCallback.actionType === "optOutClick" ||
            actionCallback.actionType === "timeDone" ||
            actionCallback.actionType === "timerDone")) {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
            actionEventValue: actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.actionType
        }, traceId);
    }
    else if (actionCallback.type === "close") {
        sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_ACTION, {
            actionEventType: ACTION_EVENT_TYPES.CLOSE,
            actionEventValue: actionCallback.buttonLabel,
        }, traceId);
    }
    if (((_a = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[activeProject.id]) === null || _a === void 0 ? void 0 : _a.triggerCase) === "PLAY_ONCE")
        updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
    if (actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id === "" &&
        currentStaticFlow.status === "START") {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_OUT, undefined, traceId);
        if (((_b = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[activeProject.id]) === null || _b === void 0 ? void 0 : _b.triggerCase) === "EVERY_SESSION_UNTIL_DISMISSED")
            updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
        updateViewStatusForTheProject(activeProject.id, "nDismissedByUser", traceId);
    }
    if (actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id !== "" &&
        currentlyRunningFlow.id === activeProject.id &&
        currentStaticFlow.id === undefined) {
        if (allProjectStatus[currentlyRunningFlow.id].triggerCase ===
            "EVERY_SESSION_UNTIL_DISMISSED")
            updateProjectStatus({
                id: currentlyRunningFlow.id,
                isFlowTriggered: true,
            }, traceId);
        updateViewStatusForTheProject(currentlyRunningFlow.id, "nDismissedByUser", traceId);
    }
    if (actionCallback.close &&
        !actionCallback.optIn &&
        currentlyRunningFlow.id !== activeProject.id &&
        currentStaticFlow.id !== activeProject.id) {
        updateViewStatusForTheProject(activeProject.id, "nDismissedByUser", traceId);
    }
    if (currentStaticFlow.id !== undefined &&
        currentStaticFlow.stepsStatus.length > 0) {
        var lastStep = currentStaticFlow.stepsStatus[currentStaticFlow.stepsStatus.length - 1];
        flowShown = false;
        if (lastStep.completionStep) {
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_SUCCESS, undefined, traceId);
            if (currentlyRunningFlow.id !== "") {
                var currentRunningFlow = completedProjectsInFlow[currentlyRunningFlow.id];
                var foundCompletedProject = currentRunningFlow.projects.findIndex(function (c) { return c.id === currentStaticFlow.projectId; });
                if (foundCompletedProject !== -1) {
                    currentRunningFlow.projects[foundCompletedProject].completed = true;
                }
                if (areAllProjectsCompleted(currentRunningFlow)) {
                    if (allProjectStatus[currentlyRunningFlow.id].triggerCase ===
                        "EVERY_SESSION_UNTIL_ALL_FLOWS_ARE_COMPLETED") {
                        updateProjectStatus({ id: currentlyRunningFlow.id, isFlowTriggered: true }, traceId);
                    }
                    updateViewStatusForTheProject(currentlyRunningFlow.id, "untilAllFlowsAreCompleted", traceId);
                }
            }
            if (currentlyRunningFlow.id === "")
                updateProjectStatus({ id: activeProject.id, isCompleted: true }, traceId);
            sendProjectCompletion({ reset: false }, traceId);
            if (allProjectStatus[activeProject.id].triggerCase ===
                "EVERY_SESSION_UNTIL_FLOW_COMPLETE")
                updateProjectStatus({ id: activeProject.id, isFlowTriggered: true }, traceId);
            updateViewStatusForTheProject(activeProject.id, "perApp", traceId);
            saveTheLatestStateChange(traceId);
            resetActiveProject();
            resetCurrentStaticFlow();
            resetFlow();
        }
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId) {
        var selectedWalkthrough = flowWalkthroughs[actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.projectId];
        activeProject = {
            id: selectedWalkthrough.id,
            projectType: selectedWalkthrough.projectParameters.projectType,
            isShowing: true,
            isAnchoredElement: selectedWalkthrough.isAnchoredElement,
            flows: selectedWalkthrough.flows,
            nativeIdentifiers: selectedWalkthrough.nativeIdentifiers,
            webIdentifiers: selectedWalkthrough.webIdentifiers,
            auiContent: selectedWalkthrough.auiContent,
            projectParameters: selectedWalkthrough.projectParameters,
            languages: selectedWalkthrough.languages,
            iconSetting: selectedWalkthrough.iconSetting,
            standAlone: ![
                "STATIC_FLOW",
                "STATIC_FLOW_MENU",
                "STATIC_FLOW_CHECKLIST",
            ].includes(selectedWalkthrough.projectParameters.projectType),
            isAFlow: selectedWalkthrough.projectParameters.projectType === "STATIC_FLOW",
            isAFlowMenu: ["STATIC_FLOW_MENU", "STATIC_FLOW_CHECKLIST"].includes(selectedWalkthrough.projectParameters.projectType),
        };
        currentStaticFlow = {
            id: selectedWalkthrough.id,
            projectId: selectedWalkthrough.projectParameters.deploymentId,
            completed: false,
            stepsStatus: [],
            status: "RENDERING-STEPS",
            autoStart: true,
        };
        flowShown = false;
        return;
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.optIn) {
        previousBoundState = {};
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: false });
        resetFlow();
        return;
    }
    if (actionCallback === null || actionCallback === void 0 ? void 0 : actionCallback.endFlow) {
        currentStaticFlow.id !== undefined &&
            sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_STOP, undefined, traceId);
        previousBoundState = {};
        handleCloseEvent({
            clearAll: true,
        }, traceId);
        resetCurrentStaticFlow();
        return;
    }
    if (actionCallback.close) {
        if (currentStaticFlow.id === undefined ||
            (currentStaticFlow.id !== undefined &&
                currentStaticFlow.stepsStatus.length === 0))
            handleCloseEvent({
                clearAll: true,
            }, traceId);
        else
            handleCloseEvent({
                updateStepsStatus: true,
            }, traceId);
        return;
    }
}
function handleCloseEvent(_a, traceId) {
    var _b;
    var _c = _a.clearAll, clearAll = _c === void 0 ? false : _c, _d = _a.updateStepsStatus, updateStepsStatus = _d === void 0 ? false : _d;
    previousBoundState = {};
    if (updateStepsStatus) {
        var lastStepIndex = ((_b = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _b === void 0 ? void 0 : _b.length) - 1;
        if (lastStepIndex >= 0) {
            currentStaticFlow.stepsStatus[lastStepIndex].completed = true;
        }
        previousBoundState = {};
        resetActiveStep();
    }
    else if (clearAll) {
        updateProjectStatus({ id: activeProject.id, isCompleted: true }, traceId);
        clearActiveProject();
    }
}
function setCurrentSelectedLanguage(language) {
    selectedLanguage = language;
    appLocale = language;
}
function resetShowForFlows() {
    tackProjectBeingIdentified.forEach(function (t) {
        if (t.projectType === "STATIC_FLOW_CHECKLIST") {
            t.toShow = true;
        }
    });
}
function clearEveryThing(clearTimer, traceId) {
    if (clearTimer === void 0) { clearTimer = false; }
    if (clearTimer)
        clearInterval(timer);
    sendMessageToNative({
        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
    }, traceId);
    clearActiveProject();
}
function clearActiveProject() {
    previousBoundState = {};
    resetFlow();
    resetActiveStep();
    resetActiveProject();
    resetCurrentStaticFlow();
}
function resetFinderObserverEvents() {
    finderObserverEvents = [];
}
function resetFlow() {
    currentlyRunningFlow = {
        id: "",
        active: false,
    };
}
function resetActiveStep() {
    activeStep = {
        id: "",
        step: {},
        isAnchoredElement: false,
    };
}
function resetActiveProject() {
    activeProject = {
        id: "",
        projectType: "",
        isShowing: false,
        isAnchoredElement: false,
        standAlone: false,
        iconSetting: {},
        isAFlow: false,
        isAFlowMenu: false,
    };
}
function resetCurrentStaticFlow() {
    currentStaticFlow = {
        id: undefined,
        status: undefined,
        completed: undefined,
        stepsStatus: [],
        autoStart: false,
    };
}
function handlePanelEvent(data, traceId) {
    if (data.action === "isVisible")
        return;
    else if (data.action === "clickEvent" && data.value) {
        sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_DISABLE, undefined, traceId);
        removeProjectFromStatusArray({ id: data.uniqueId, terminatedByIcon: true, isTerminated: true }, traceId);
        clearEveryThing();
    }
}
function handleIconAction(id) {
    var project = embedProject
        .concat(sortedProjectArray)
        .find(function (s) { return s.id === id; });
    if (project !== undefined &&
        currentStaticFlow.id &&
        project.assist.autoStart &&
        currentStaticFlow.status === "START") {
        currentStaticFlow = __assign(__assign({}, currentStaticFlow), { status: "RENDERING-STEPS", onlyIcon: false, autoStart: project.assist.autoStart });
        resetFlow();
    }
}
function resetAndRemoveState(traceId) {
    resetGlobalUserState();
    sortedProjectArray = [];
    embedProject = [];
    allProjectStatus = {};
    lastProfileUpdatedAt = undefined;
    lastUpdatedConfigAt = undefined;
    lastUpdatedEmbedConfigAt = undefined;
    loggerConfig = {};
    prevMatchedIdentifiers = [];
    currentMatchedWebIdentifiers = {};
    previousBoundState = {};
    saveTheLatestStateChange(traceId);
}
function createFocusJavascript(targetIdentifier) {
    var querySelectorAllStatement = createQuerySelectorAllStatement(targetIdentifier);
    return "".concat(querySelectorAllStatement, "?.focus?.();");
}
function createFinderJavascript(webIdentifiers, webViewBounds, webViewScale, webviewUUID) {
    var webIdentificationJavascriptFunction = "function runWhatfixMobileWebFinder() {";
    var webIdentificationJavascript = "\n  try{\n    let matchedNode = []; \n    let projectWrapper = { matchedNode: matchedNode }; \n    let result = projectWrapper; \n    let matchedIdentifiers = [];\n    let unMatchedIdentifiers = [];\n  ";
    for (var key in webIdentifiers) {
        var webIdentifier = webIdentifiers[key];
        webIdentificationJavascript += createIfElseStatement(key, webIdentifier, webViewBounds, webViewScale, webviewUUID);
    }
    webIdentificationJavascript += "\n    projectWrapper.matchedIdentifiers = matchedIdentifiers;\n    projectWrapper.unMatchedIdentifiers = unMatchedIdentifiers;\n    return result;}\n    catch(error) {\n     console.error(error);\n     return ( { matchedNode: [], matchedIdentifiers: [], unMatchedIdentifiers: [] } );\n    }\n  ";
    webIdentificationJavascriptFunction += "\n    ".concat(webIdentificationJavascript, "\n  } runWhatfixMobileWebFinder();");
    return webIdentificationJavascriptFunction;
}
function createIfElseStatement(id, webIdentifier, webViewBounds, webViewScale, webviewUUID) {
    var querySelectorAllStatement = createQuerySelectorAllStatement(webIdentifier);
    var condition = "wfx_assist_ele";
    if (webIdentifier["innerText"] && typeof webIdentifier["innerText"]["ang"] === "string") {
        var expectedText = webIdentifier["innerText"]["ang"].replace(/"/g, '\\"');
        condition += " && wfx_assist_ele.innerText === \"".concat(expectedText, "\"");
    }
    return "\n    var wfx_assist_ele = ".concat(querySelectorAllStatement, ";\n    if (").concat(condition, ") {\n      let position = wfx_assist_ele.getBoundingClientRect();\n      if(position.width===0 && position.height===0){\n        unMatchedIdentifiers.push(\"").concat(id, "\");\n      }else{\n      matchedIdentifiers.push(\"").concat(id, "\");\n      let bounds = {\n        left: position.left * ").concat(webViewScale, " + ").concat(webViewBounds.left, ",\n        top: position.top * ").concat(webViewScale, " + ").concat(webViewBounds.top, ",\n        right: position.right * ").concat(webViewScale, " + ").concat(webViewBounds.left, ",\n        bottom: position.bottom * ").concat(webViewScale, " + ").concat(webViewBounds.top, "\n      };\n      matchedNode.push({ \n        id: \"").concat(id, "\", \n        bounds: bounds,\n        node: {\n          uuid: \"").concat(webviewUUID, "\"\n        }\n      });\n      }   \n    } else {\n      unMatchedIdentifiers.push(\"").concat(id, "\");\n    }\n  ");
}
function createQuerySelectorAllStatement(webIdentifier) {
    var queryStatement = '';
    if (webIdentifier.customSelector) {
        webIdentifier.customSelector.split("<=").forEach(function (selector) {
            if (queryStatement !== '') {
                queryStatement = "?.shadowRoot" + queryStatement;
            }
            queryStatement = ".querySelector('".concat(selector, "')") + queryStatement;
        });
        queryStatement = 'document' + queryStatement;
        return queryStatement;
    }
    var tagName = webIdentifier.tagName;
    var attributes = webIdentifier.attributes["ang"];
    var cssSelector = tagName;
    for (var attributeKey in attributes) {
        var escapedAttributeValue = CSS.escape(attributes[attributeKey]);
        cssSelector += "[".concat(attributeKey, "=\"").concat(escapedAttributeValue, "\"]");
    }
    var index = webIdentifier.index;
    if (index && index < 0) {
        index = 0;
    }
    return "document.querySelectorAll(".concat(JSON.stringify(cssSelector), ")[").concat(index, "]");
}
var configFetchStartTime;
var jsSdkSessionId = generateUUID();
var jsSdkInitialized = false;
var enterpriseId = "";
function start(_a, traceId) {
    var _b = _a.baseUrl, baseUrl = _b === void 0 ? "" : _b, apiKey = _a.apiKey, _c = _a.devicePlatform, devicePlatform = _c === void 0 ? platform : _c, _d = _a.deviceSubPlatform, deviceSubPlatform = _d === void 0 ? "" : _d, _e = _a.appVersion, appVersion = _e === void 0 ? "ALL" : _e, _f = _a.appVersionCodeValue, appVersionCodeValue = _f === void 0 ? 0 : _f, userState = _a.userState, leapUserId = _a.leapUserId, _g = _a.sdkVersionCode, sdkVersionCode = _g === void 0 ? 22 : _g, sessionId = _a.sessionId, defaultProps = _a.defaultProps, userProps = _a.userProps, _h = _a.isSelfHostingEnabled, isSelfHostingEnabled = _h === void 0 ? 0 : _h;
    return __awaiter(this, void 0, void 0, function () {
        function getObserverUrl(baseUrl) {
            if (baseUrl.includes("https://leap-api-eus")) {
                appObserverBaseUrl = "https://whatfix.com/";
            }
            else if (baseUrl.includes("https://leap-api-eu")) {
                appObserverBaseUrl = "https://eu.whatfix.com/";
            }
            else if (baseUrl.includes("quickolabs.com")) {
                appObserverBaseUrl = "https://uataz.quickolabs.com/";
            }
        }
        function sendObserverEventLevelsToNative() {
            sendMessageToNative({
                command: SENDING_COMMANDS.OBSERVER_EVENT_LEVELS,
                data: __assign({}, observerEventLevels)
            }, traceId);
        }
        function resolveApiConfig() {
            var isEus = apiKey.startsWith("eus:");
            var isEu = apiKey.startsWith("eu:");
            if (isSelfHostingEnabled) {
                if (isEus) {
                    apiKey = apiKey.replace(/^eus:/, "");
                }
                else if (isEu) {
                    apiKey = apiKey.replace(/^eu:/, "");
                }
            }
            else {
                if (isEus) {
                    baseUrl = "https://leap-api-eus.whatfix.com/";
                }
                else if (isEu) {
                    baseUrl = "https://leap-api-eu.whatfix.com/";
                }
            }
            return { baseUrl: baseUrl, apiKey: apiKey };
        }
        var _j, baseUrl_1, apiKey_1, savedUserState, error_2;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 5, , 6]);
                    if (!!jsSdkInitialized) return [3, 3];
                    ensureSessionStarted();
                    sendObserverEventLevelsToNative();
                    isSelfHosted = isSelfHostingEnabled;
                    platform = devicePlatform;
                    subPlatform = deviceSubPlatform;
                    appSessionId = sessionId;
                    appVersionName = appVersion;
                    appVersionCode = appVersionCodeValue;
                    coreSdkVersionCode = sdkVersionCode;
                    _j = resolveApiConfig(), baseUrl_1 = _j.baseUrl, apiKey_1 = _j.apiKey;
                    appApiKey = apiKey_1;
                    configBaseUrl = baseUrl_1;
                    getObserverUrl(configBaseUrl);
                    defaultProperties = __assign({}, defaultProps);
                    sdkStateService.init(userState);
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.SDK,
                        event_name: OBSERVER_EVENTS.SDK.START_JS,
                        properties: {
                            baseUrl: baseUrl_1,
                            platform: platform,
                            subPlatform: subPlatform,
                            appVersionName: appVersionName,
                            appVersionCode: appVersionCode,
                            hasSavedState: !isEmptyObject(safeParse(userState)),
                            leapUserId: leapUserId,
                            coreSdkVersionCode: coreSdkVersionCode,
                            appSessionId: appSessionId,
                            defaultProperties: defaultProperties,
                            userProps: userProps,
                            isSelfHosted: isSelfHosted,
                        },
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    if (!!isSelfHosted) return [3, 2];
                    return [4, setEnterpriseId()];
                case 1:
                    _k.sent();
                    _k.label = 2;
                case 2:
                    eventCollectorService.fetchCachedEvents();
                    sendAnalyticEvent(ANALYTICS_EVENTS.PUBLIC_EVENTS_START, {
                        sessionId: jsSdkSessionId,
                        configUrl: configBaseUrl,
                        apikey: appApiKey,
                        platform: platform,
                        subPlatform: subPlatform,
                        versionName: appVersionName,
                        versionCode: appVersionCode,
                        sdkVersionCode: coreSdkVersionCode,
                        userId: leapUserId,
                    });
                    if (sdkStateService.isLoggedIn) {
                        savedUserState = sdkStateService.currentUserState;
                        lastUpdatedEmbedConfigAt = savedUserState.lastUpdatedEmbedConfigAt;
                        lastProfileUpdatedAt = savedUserState.lastProfileUpdatedAt;
                        savedEmbedProject = savedUserState.savedEmbedProject;
                        appLocale = sdkStateService.appLocale;
                        savedUserState.customProps = __assign(__assign({}, savedUserState.customProps), userProps);
                        customProperties = savedUserState.customProps;
                        configFetchStartTime = Date.now();
                    }
                    _k.label = 3;
                case 3: return [4, fetchConfig({
                        userId: sdkStateService.currentUserId,
                        source: 'START'
                    }, traceId)];
                case 4:
                    _k.sent();
                    jsSdkInitialized = true;
                    setUserLoggedIn();
                    flushAllPendingOperations(traceId);
                    return [3, 6];
                case 5:
                    error_2 = _k.sent();
                    console.error("[".concat(traceId, "] start(): failed to start js sdk"), error_2);
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        event_name: OBSERVER_EVENTS.ERROR.START_JS_FAILED_ERROR,
                        properties: {
                            error: error_2
                        },
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
function setUserLoggedIn() {
    isUserLoggedIn = true;
}
function resetUserLoggedIn() {
    isUserLoggedIn = false;
}
function getCurrentUserId() {
    return sdkStateService.currentUserId;
}
function ensureSessionStarted() {
    if (!userSessionId) {
        userSessionId = generateUUID();
    }
}
function startNewSession() {
    userSessionId = generateUUID();
}
function getUserSessionId() {
    return userSessionId;
}
function fetchByUserProperties(traceId) {
    configFetchStartTime = Date.now();
    return fetchConfig({
        userId: sdkStateService.currentUserId,
        source: 'FETCH_BY_USER_PROPERTIES'
    }, traceId);
}
function fetchByProjectId(id, traceId) {
    sendAnalyticEvent(ANALYTICS_EVENTS.PUBLIC_EVENTS_PROJECT_ID, {
        sessionId: jsSdkSessionId,
        versionName: appVersionName,
        versionCode: appVersionCode,
        sdkVersionCode: coreSdkVersionCode,
        userId: getCurrentUserId(),
        embedProjectId: id,
    });
    return fetchConfig({
        userId: sdkStateService.currentUserId,
        isEmbed: true,
        projectId: id,
        source: 'FETCH_BY_PROJECT_ID'
    }, traceId);
}
function fetchByUserId(id, traceId) {
    return fetchConfig({
        userId: id,
        source: 'FETCH_BY_USER_ID'
    }, traceId);
}
function consumeSavedStateAndInit(savedState, traceId) {
    if (!savedState) {
        return;
    }
    sortedProjectArray = savedState.projectArray;
    allProjectStatus = savedState.projectsStatus || {};
    flowWalkthroughs = savedState.connectedWalkthroughs;
    selectedLanguage = savedState.language || selectedLanguage;
    completedProjectsInFlow = savedState.projectsCompletionStats;
    connectProjectsParentMap = savedState.connectProjectsParentMap;
    features = savedState.features;
    metaConfigs = savedState.metaConfigs;
    loggerConfig = savedState.loggerConfig;
    reCalculateCompletedProjectsInFlow(sortedProjectArray, completedProjectsInFlow);
    reComputeIsFlowTriggered();
    sendObserverLogs({
        category: OBSERVER_EVENT_CATEGORIES.PROJECT,
        event_name: OBSERVER_EVENTS.PROJECT.ONLY_CONSUMING_SAVED_STATE,
        properties: {
            allProjectStatus: allProjectStatus,
            completedProjectsInFlow: completedProjectsInFlow
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    init(traceId);
}
function storeConfigInSegmentMap(segment, config) {
    return __awaiter(this, void 0, void 0, function () {
        var decompressedData;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Promise.all(config.data.map(function (configData) { return __awaiter(_this, void 0, void 0, function () {
                        var decompressed, decompressedDataWithBaseUrl;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, decompressGzipString(configData)];
                                case 1:
                                    decompressed = _a.sent();
                                    decompressedDataWithBaseUrl = decompressed.replace(/"baseUrl":""/g, "\"baseUrl\":\"".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING, "\""));
                                    return [2, JSON.parse(decompressedDataWithBaseUrl)];
                            }
                        });
                    }); }))];
                case 1:
                    decompressedData = _a.sent();
                    segmentConfigMap[segment.segmentId] = {
                        config: {
                            data: decompressedData,
                            configStatus: 200,
                            wfxProfile: null,
                            loggerConfig: null,
                            metaConfig: (config === null || config === void 0 ? void 0 : config.metaConfig) || null,
                            params: (config === null || config === void 0 ? void 0 : config.params) || null,
                            feature: (config === null || config === void 0 ? void 0 : config.feature) || null,
                        },
                        orBlocks: (segment === null || segment === void 0 ? void 0 : segment.orBlocks) || [],
                        lastUpdatedAt: segment === null || segment === void 0 ? void 0 : segment.lastUpdatedAt,
                    };
                    return [2];
            }
        });
    });
}
function fetchAndStoreConfigFromSavedState(savedSegmentConfigMap) {
    var segConfMapAvailableInSavedState = Object.keys(savedSegmentConfigMap || {}).length;
    if (segConfMapAvailableInSavedState) {
        segmentConfigMap = savedSegmentConfigMap;
        return 200;
    }
    return 404;
}
function downloadConfigFromCDN(savedSegmentConfigMap) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var segmentationBaseUrl, response, segmentationList, data, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    segmentationBaseUrl = "".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING, "/segmentation.json");
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, , 7]);
                    return [4, fetch(segmentationBaseUrl)];
                case 2:
                    response = _c.sent();
                    return [4, response.json()];
                case 3:
                    segmentationList = _c.sent();
                    if (!((_a = segmentationList === null || segmentationList === void 0 ? void 0 : segmentationList.segments) === null || _a === void 0 ? void 0 : _a.length)) return [3, 5];
                    return [4, Promise.all(segmentationList.segments.map(function (segmentObject) { return __awaiter(_this, void 0, void 0, function () {
                            var configUrl, configResponse, segmentSpecificConfig;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        configUrl = "".concat(configBaseUrl, "/").concat(appApiKey).concat(selfHostingEndPoints.SELF_HOSTING).concat(selfHostingEndPoints.SEGMENT_CONFIG_FOLDER).concat(segmentObject === null || segmentObject === void 0 ? void 0 : segmentObject.segmentId, ".json");
                                        return [4, fetch(configUrl)];
                                    case 1:
                                        configResponse = _a.sent();
                                        return [4, configResponse.json()];
                                    case 2:
                                        segmentSpecificConfig = _a.sent();
                                        return [4, storeConfigInSegmentMap(segmentObject, segmentSpecificConfig)];
                                    case 3:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); })).catch(function (error) {
                            console.warn(error);
                            return fetchAndStoreConfigFromSavedState(savedSegmentConfigMap);
                        })];
                case 4:
                    data = _c.sent();
                    return [2, 200];
                case 5: return [3, 7];
                case 6:
                    _b = _c.sent();
                    console.warn("Error while fetching the segments and configs, use any configs available in segmentConfigMap in savedState");
                    return [2, fetchAndStoreConfigFromSavedState(savedSegmentConfigMap)];
                case 7: return [2];
            }
        });
    });
}
function findSegmentIds() {
    return Object.keys(segmentConfigMap).filter(function (segmentId) {
        return isSegmentValid(segmentConfigMap[segmentId].orBlocks);
    });
}
function collateConfigsFromValidSegments(validSegmentIds) {
    var collatedConfig;
    validSegmentIds.map(function (segmentId, index) {
        var _a, _b;
        if (index === 0) {
            collatedConfig = (_a = segmentConfigMap[segmentId]) === null || _a === void 0 ? void 0 : _a.config;
        }
        else {
            collatedConfig.data = __spreadArray(__spreadArray([], __read(collatedConfig.data), false), __read((_b = segmentConfigMap[segmentId]) === null || _b === void 0 ? void 0 : _b.config.data), false);
        }
    });
    return collatedConfig;
}
function getSelfHostedConfig() {
    var validSegmentIds = findSegmentIds();
    return collateConfigsFromValidSegments(validSegmentIds);
}
function handleProjectsMissingInAllProjectStatus() {
    try {
        sortedProjectArray === null || sortedProjectArray === void 0 ? void 0 : sortedProjectArray.forEach(function (project) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
            var projectStatusId = project.id;
            var initialCompletedMap = {};
            if (project.connectedProjects !== undefined) {
                computeCompletedProjectsInFlow(project, projectStatusId, completedProjectsInFlow, initialCompletedMap);
            }
            var initialTerminationStatus = {
                perSession: ((_a = project === null || project === void 0 ? void 0 : project.initialTerminationStatus) === null || _a === void 0 ? void 0 : _a.perSession) || -1,
                perApp: ((_b = project === null || project === void 0 ? void 0 : project.initialTerminationStatus) === null || _b === void 0 ? void 0 : _b.perApp) || -1,
                untilAllFlowsAreCompleted: ((_c = project === null || project === void 0 ? void 0 : project.initialTerminationStatus) === null || _c === void 0 ? void 0 : _c.untilAllFlowsAreCompleted) || false,
                nSession: ((_d = project === null || project === void 0 ? void 0 : project.initialTerminationStatus) === null || _d === void 0 ? void 0 : _d.nSession) || -1,
                nDismissedByUser: ((_e = project === null || project === void 0 ? void 0 : project.initialTerminationStatus) === null || _e === void 0 ? void 0 : _e.nDismissedByUser) || -1,
            };
            var terminationStatus = {
                perSession: ((_g = (_f = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[projectStatusId]) === null || _f === void 0 ? void 0 : _f.terminationStatus) === null || _g === void 0 ? void 0 : _g.perSession) || ((_h = project === null || project === void 0 ? void 0 : project.terminationStatus) === null || _h === void 0 ? void 0 : _h.perSession) || 0,
                perApp: ((_k = (_j = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[projectStatusId]) === null || _j === void 0 ? void 0 : _j.terminationStatus) === null || _k === void 0 ? void 0 : _k.perApp) || ((_l = project === null || project === void 0 ? void 0 : project.terminationStatus) === null || _l === void 0 ? void 0 : _l.perApp) || 0,
                untilAllFlowsAreCompleted: ((_o = (_m = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[projectStatusId]) === null || _m === void 0 ? void 0 : _m.terminationStatus) === null || _o === void 0 ? void 0 : _o.untilAllFlowsAreCompleted) || ((_p = project === null || project === void 0 ? void 0 : project.terminationStatus) === null || _p === void 0 ? void 0 : _p.untilAllFlowsAreCompleted) || false,
                nSession: ((_r = (_q = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[projectStatusId]) === null || _q === void 0 ? void 0 : _q.terminationStatus) === null || _r === void 0 ? void 0 : _r.nSession) || ((_s = project === null || project === void 0 ? void 0 : project.terminationStatus) === null || _s === void 0 ? void 0 : _s.nSession) || 0,
                nDismissedByUser: ((_u = (_t = allProjectStatus === null || allProjectStatus === void 0 ? void 0 : allProjectStatus[projectStatusId]) === null || _t === void 0 ? void 0 : _t.terminationStatus) === null || _u === void 0 ? void 0 : _u.nDismissedByUser) || ((_v = project === null || project === void 0 ? void 0 : project.terminationStatus) === null || _v === void 0 ? void 0 : _v.nDismissedByUser) || 0,
            };
            allProjectStatus[projectStatusId] = {
                id: projectStatusId,
                projectType: project.projectParameters.projectType,
                shownOnce: false,
                isShown: false,
                isCompleted: (initialTerminationStatus.nSession !== -1 && (initialTerminationStatus === null || initialTerminationStatus === void 0 ? void 0 : initialTerminationStatus.nSession) === (terminationStatus === null || terminationStatus === void 0 ? void 0 : terminationStatus.nSession)),
                isFlowTriggered: false,
                isTerminated: false,
                triggerCase: project === null || project === void 0 ? void 0 : project.triggerCase,
                initialTerminationStatus: initialTerminationStatus,
                terminationStatus: terminationStatus,
            };
        });
    }
    catch (error) {
        console.error(error);
    }
}
function fetchConfig(_a, traceId) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var userId = _a.userId, _u = _a.isEmbed, isEmbed = _u === void 0 ? false : _u, projectId = _a.projectId, _v = _a.source, source = _v === void 0 ? 'DEFAULT' : _v;
    return __awaiter(this, void 0, void 0, function () {
        function resetIsShownIsCompletedAndShownOnce(projectsStatus) {
            if (projectsStatus) {
                Object.values(projectsStatus).forEach(function (status) {
                    status.isShown = false;
                    status.shownOnce = false;
                    status.isCompleted = false;
                });
            }
        }
        var status, config, headers, requestBody, dataString, wfxProfileBody, savedUserState, allUserProperties, customPropsDateObjects_1, keys, dateObjects, lastUpdatedAt, sanitizedHeadersForObserver, sanitizedWfxProfileForObserver, response, error_3, _w, _x, wfxProfileProperties, error_4;
        return __generator(this, function (_y) {
            switch (_y.label) {
                case 0:
                    status = 200;
                    savedUserState = sdkStateService.getUserStateById(userId) || {};
                    if (isNewUserSession()) {
                        resetIsShownIsCompletedAndShownOnce(savedUserState.projectsStatus);
                    }
                    allUserProperties = __assign(__assign({}, defaultProperties), savedUserState.customProps);
                    if (!isSelfHosted) return [3, 2];
                    return [4, downloadConfigFromCDN(sdkStateService.segmentConfigMap)];
                case 1:
                    status = _y.sent();
                    config = getSelfHostedConfig();
                    if (!config) {
                        return [2];
                    }
                    return [3, 3];
                case 2:
                    customPropsDateObjects_1 = {};
                    keys = Object.keys(allUserProperties);
                    keys === null || keys === void 0 ? void 0 : keys.forEach(function (key) {
                        if (![
                            "lastUpdateTimeStamp",
                            "firstInstallTimeStamp",
                            "firstSessionTimeStamp",
                        ].includes(key)) {
                            var value = allUserProperties[key];
                            if (typeof value === "string") {
                                if (isValidDateString(value)) {
                                    var elapsedTime = getElapsedTimeInSeconds(value);
                                    customPropsDateObjects_1[key] = elapsedTime;
                                }
                            }
                        }
                    });
                    dateObjects = isEmbed
                        ? {}
                        : {
                            lastUpdateTimeStamp: new Date(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.lastUpdateTimeStamp).toISOString(),
                            timeElapsedSinceLastUpdate: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.lastUpdateTimeStamp),
                            firstInstallTimeStamp: new Date(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstInstallTimeStamp).toISOString(),
                            timeElapsedSinceFirstInstall: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstInstallTimeStamp),
                            firstSessionTimeStamp: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstSessionTimeStamp),
                            timeElapsedSinceFirstSession: getElapsedTimeInSeconds(allUserProperties === null || allUserProperties === void 0 ? void 0 : allUserProperties.firstSessionTimeStamp),
                        };
                    lastUpdatedAt = isEmbed ? savedUserState.lastUpdatedEmbedConfigAt : savedUserState.lastUpdatedConfigAt;
                    headers = {
                        "Content-Type": "application/json",
                        "Allow-Control-Access-Origin": "",
                        "x-jiny-client-id": appApiKey,
                        "x-app-version-name": appVersionName,
                    };
                    headers["x-leap-id"] = userId;
                    if (lastUpdatedAt) {
                        headers["x-jiny-last-updated-at"] = JSON.stringify(lastUpdatedAt);
                    }
                    if (isEmbed) {
                        headers["x-jiny-deployment-ids"] = JSON.stringify([projectId]);
                    }
                    if (sdkStateService.isUserIdExternal(userId)) {
                        wfxProfileBody = {
                            id: userId,
                            updatedAt: savedUserState.lastProfileUpdatedAt,
                        };
                    }
                    requestBody = __assign(__assign(__assign({ wfx_sdkVersionCode: coreSdkVersionCode, wfxProfile: wfxProfileBody }, allUserProperties), dateObjects), customPropsDateObjects_1);
                    dataString = JSON.stringify(requestBody);
                    _y.label = 3;
                case 3:
                    _y.trys.push([3, 22, , 23]);
                    if (!!isSelfHosted) return [3, 11];
                    sanitizedHeadersForObserver = __assign({}, headers);
                    sanitizedWfxProfileForObserver = __assign({}, wfxProfileBody);
                    delete sanitizedHeadersForObserver["x-jiny-client-id"];
                    delete sanitizedWfxProfileForObserver["id"];
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.CONFIG_FETCH_STARTED,
                        properties: ((_b = loggerConfig === null || loggerConfig === void 0 ? void 0 : loggerConfig.log_types) === null || _b === void 0 ? void 0 : _b.includes(ObserverLogLevel.DEBUG))
                            ? {
                                url: "".concat(configBaseUrl, "odin/api/v1/config/fetch"),
                                source: source,
                                headers: sanitizedHeadersForObserver,
                                requestBody: __assign(__assign({}, requestBody), { wfxProfile: sanitizedWfxProfileForObserver }),
                            }
                            : {},
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    response = void 0;
                    _y.label = 4;
                case 4:
                    _y.trys.push([4, 6, , 7]);
                    return [4, fetch("".concat(configBaseUrl, "odin/api/v1/config/fetch"), {
                            method: "POST",
                            headers: headers,
                            body: dataString,
                        })];
                case 5:
                    response = _y.sent();
                    return [3, 7];
                case 6:
                    error_3 = _y.sent();
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.CONFIG_FETCH_FAILED,
                        properties: {
                            error: error_3
                        },
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    throw error_3;
                case 7:
                    status = response.status;
                    if (!(response.status === 200)) return [3, 9];
                    return [4, response.json()];
                case 8:
                    _w = _y.sent();
                    return [3, 10];
                case 9:
                    _w = {};
                    _y.label = 10;
                case 10:
                    config = _w;
                    headers = response.headers;
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.CONFIG_FETCH_COMPLETED,
                        properties: __assign(__assign({ status: status, projectIds: headers.get("x-jiny-project-ids"), configStatus: config === null || config === void 0 ? void 0 : config.configStatus }, (((_c = loggerConfig === null || loggerConfig === void 0 ? void 0 : loggerConfig.log_types) === null || _c === void 0 ? void 0 : _c.includes(ObserverLogLevel.DEBUG)) ? {
                            featureFlagList: (config === null || config === void 0 ? void 0 : config.feature) ? Object.keys(config === null || config === void 0 ? void 0 : config.feature) : ["no feature flags"],
                            metaConfigList: (config === null || config === void 0 ? void 0 : config.metaConfig) ? Object.keys(config === null || config === void 0 ? void 0 : config.metaConfig) : ["no meta config"],
                            wfxProfileProjectStatus: ((_e = (_d = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _d === void 0 ? void 0 : _d.properties) === null || _e === void 0 ? void 0 : _e.allProjectStatus) || {},
                            WfxCompletedProjectsInFlow: ((_g = (_f = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _f === void 0 ? void 0 : _f.properties) === null || _g === void 0 ? void 0 : _g.completedFlowProjects) || {},
                            savedStateProjectStatus: (savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.projectsStatus) || {},
                            savedCompletedProjectsInFlow: (savedState === null || savedState === void 0 ? void 0 : savedState.projectsCompletionStats) || {}
                        } : {})), { wfxProfileStatus: (_h = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _h === void 0 ? void 0 : _h.status, wfxProfileUpdatedAt: (_j = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _j === void 0 ? void 0 : _j.updatedAt }),
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    isEmbed
                        ? (lastUpdatedEmbedConfigAt = JSON.parse(headers.get("x-jiny-last-updated-at")))
                        : (lastUpdatedConfigAt = JSON.parse(headers.get("x-jiny-last-updated-at")));
                    _y.label = 11;
                case 11:
                    _x = status;
                    switch (_x) {
                        case 200: return [3, 12];
                        case 408: return [3, 16];
                        case 504: return [3, 16];
                        case 401: return [3, 17];
                        case 404: return [3, 18];
                        case 500: return [3, 19];
                    }
                    return [3, 20];
                case 12:
                    if (!(config.configStatus === 200)) return [3, 14];
                    console.info("[".concat(traceId, "] Serving config from API"));
                    features = config.feature || {};
                    metaConfigs = config.metaConfig || {};
                    loggerConfig = config.loggerConfig || {};
                    if (((_k = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _k === void 0 ? void 0 : _k.status) === 304) {
                        console.info("[".concat(traceId, "] Service profile from cache"));
                    }
                    return [4, organizeProjectArray(config.data, isEmbed, config.wfxProfile, savedUserState.projectsStatus || {}, savedUserState.projectsCompletionStats || {}, traceId)];
                case 13:
                    _y.sent();
                    saveTheLatestStateChange(traceId);
                    return [3, 15];
                case 14:
                    if (config.configStatus === 304) {
                        console.info("[".concat(traceId, "] Service config from cache"));
                        if (((_l = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _l === void 0 ? void 0 : _l.status) === 200 && ((_m = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _m === void 0 ? void 0 : _m.properties)) {
                            console.info("[".concat(traceId, "] Service profile from API"));
                            wfxProfileProperties = void 0;
                            if (!isEmptyObject((_p = (_o = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _o === void 0 ? void 0 : _o.properties) === null || _p === void 0 ? void 0 : _p.allProjectStatus)) {
                                wfxProfileProperties = (_q = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _q === void 0 ? void 0 : _q.properties;
                            }
                            else {
                                wfxProfileProperties = convertOldWfxData(config === null || config === void 0 ? void 0 : config.data, savedUserState.projectArray || [], savedUserState.projectsStatus || {}, savedUserState.projectsCompletionStats || {}, (_r = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _r === void 0 ? void 0 : _r.properties);
                            }
                            resetIsShownIsCompletedAndShownOnce(wfxProfileProperties.allProjectStatus);
                            sortedProjectArray = savedUserState.projectArray;
                            connectProjectsParentMap = savedUserState.connectProjectsParentMap;
                            allProjectStatus = (wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.allProjectStatus) || (savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.allProjectStatus) || {};
                            completedProjectsInFlow = wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.completedFlowProjects;
                            selectedLanguage = appLocale || savedUserState.language || (wfxProfileProperties === null || wfxProfileProperties === void 0 ? void 0 : wfxProfileProperties.selectedLanguage);
                            flowWalkthroughs = savedUserState.connectedWalkthroughs || {};
                            features = savedUserState.features;
                            metaConfigs = savedUserState.metaConfigs;
                            loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                            handleProjectsMissingInAllProjectStatus();
                            saveTheLatestStateChange(traceId);
                            reComputeIsFlowTriggered();
                            sendObserverLogs({
                                category: OBSERVER_EVENT_CATEGORIES.PROJECT,
                                event_name: OBSERVER_EVENTS.PROJECT.ORGANIZING_PROJECT_DATA,
                                properties: {
                                    allProjectStatus: allProjectStatus,
                                    completedProjectsInFlow: completedProjectsInFlow
                                },
                                level: ObserverLogLevel.DEBUG,
                            }, traceId);
                            init(traceId);
                        }
                        else {
                            if (((_s = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _s === void 0 ? void 0 : _s.status) === 304) {
                                console.info("[".concat(traceId, "] Serving profile from cache"));
                            }
                            else {
                                console.info("[".concat(traceId, "] No config returned from API. status- ").concat((_t = config === null || config === void 0 ? void 0 : config.wfxProfile) === null || _t === void 0 ? void 0 : _t.status));
                            }
                            loggerConfig = config.loggerConfig || savedUserState.loggerConfig;
                            consumeSavedStateAndInit(savedUserState, traceId);
                        }
                    }
                    else if (config.configStatus === 404) {
                        console.error("[".concat(traceId, "] unable to fetch config from API. status: 404"));
                        resetAndRemoveState(traceId);
                    }
                    _y.label = 15;
                case 15: return [3, 21];
                case 16:
                    {
                        consumeSavedStateAndInit(savedUserState, traceId);
                        return [3, 21];
                    }
                    // removed by dead control flow

                case 17:
                    {
                        console.error("UNAUTHORIZED_401");
                        resetAndRemoveState(traceId);
                        return [3, 21];
                    }
                    // removed by dead control flow

                case 18:
                    {
                        console.error("UNABLE_TO_FETCH_CONFIG_THROWING_404");
                        resetAndRemoveState(traceId);
                        return [3, 21];
                    }
                    // removed by dead control flow

                case 19:
                    {
                        console.error("UNABLE_TO_FETCH_CONFIG_THROWING_500");
                        return [3, 21];
                    }
                    // removed by dead control flow

                case 20:
                    {
                        console.error("UNABLE_TO_FETCH_CONFIG_THROWING_".concat(status));
                    }
                    _y.label = 21;
                case 21: return [3, 23];
                case 22:
                    error_4 = _y.sent();
                    console.error("fetchConfig(): failed to fetch config", error_4);
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        event_name: OBSERVER_EVENTS.ERROR.CONFIG_READ_ERROR,
                        properties: {
                            error: error_4
                        },
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    if (error_4 instanceof DOMException && error_4.name === "AbortError") {
                        console.error("Abort API call: Request aborted due to new user properties call");
                    }
                    else {
                        consumeSavedStateAndInit(savedUserState, traceId);
                        console.error(error_4);
                    }
                    return [3, 23];
                case 23: return [2];
            }
        });
    });
}
function isNewUserSession() {
    return !isUserLoggedIn;
}
function updateUserProfile(traceId) {
    try {
        if (inPreviewMode || isSelfHosted) {
            return;
        }
        if (sdkStateService.isLoggedOut) {
            return;
        }
        var now = new Date();
        lastProfileUpdatedAt = now.toISOString();
        saveTheLatestStateChange(traceId);
        var userId = sdkStateService.currentUserId;
        var savedUserState = sdkStateService.currentUserState;
        if (isEmptyObject(savedUserState.projectsStatus)) {
            return;
        }
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.USER,
            event_name: OBSERVER_EVENTS.USER.ENQUEUING_PROFILE_UPDATE,
            userId: userId,
            level: ObserverLogLevel.DEBUG,
        }, traceId);
        userProfileService.enqueueUpdate(userId, traceId);
    }
    catch (error) {
        console.error("updateUserProfile(): unable to enqueue profile update", error);
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            event_name: OBSERVER_EVENTS.ERROR.PROFILE_UPDATE_ENQUEUE_ERROR,
            properties: {
                error: error,
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
    }
}
function enterPreviewMode(data, traceId) {
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.SDK.PREVIEW_STARTED,
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        properties: {
            versionName: appVersionName,
            versionCode: appVersionCode,
            sdkVersionCode: coreSdkVersionCode,
            previewId: data === null || data === void 0 ? void 0 : data.id,
        },
        level: ObserverLogLevel.INFO,
    }, traceId);
    LiveFeatures = features;
    LiveMetaConfigs = metaConfigs;
    features = data === null || data === void 0 ? void 0 : data.feature;
    metaConfigs = data === null || data === void 0 ? void 0 : data.metaConfig;
    organizeProjectArray(data === null || data === void 0 ? void 0 : data.configs, undefined, undefined, undefined, undefined, traceId);
}
function organizeProjectArray(configData, isEmbed, wfxProfile, savedAllProjectStatus, savedCompletedProjectsInFlow, traceId) {
    if (isEmbed === void 0) { isEmbed = false; }
    sendObserverLogs({
        category: OBSERVER_EVENT_CATEGORIES.PROJECT,
        event_name: OBSERVER_EVENTS.PROJECT.ORGANIZE_PROJECT_METHOD_CALLED,
        properties: {
            hasConfigData: configData ? configData.length > 0 : false,
            hasWfxProfileData: wfxProfile ? !isEmptyObject(wfxProfile) : false,
            hasSavedAllProjectStatus: savedAllProjectStatus ? !isEmptyObject(savedAllProjectStatus) : false,
            hasSavedCompletedProjectsInFlow: savedCompletedProjectsInFlow ? !isEmptyObject(savedCompletedProjectsInFlow) : false
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    var organizedArray = sortAndOrganizeProjects(configData, isEmbed, savedAllProjectStatus, savedCompletedProjectsInFlow);
    if (isEmbed) {
        embedProject = Object.values(organizedArray.flowsWalkthroughProjects);
        flowWalkthroughs = __assign(__assign({}, flowWalkthroughs), organizedArray.flowsWalkthroughProjects);
        allProjectStatus = __assign(__assign({}, allProjectStatus), organizedArray.projectStatus);
    }
    else {
        sortedProjectArray = (organizedArray === null || organizedArray === void 0 ? void 0 : organizedArray.sortedProjects) || [];
        flowWalkthroughs = organizedArray.flowsWalkthroughProjects;
        allProjectStatus = organizedArray.projectStatus;
        completedProjectsInFlow = organizedArray.initialCompletedProjectsInFlow;
        if (wfxProfile && wfxProfile.properties) {
            var wfxProfileProperties = void 0;
            if (wfxProfile.properties.allProjectStatus) {
                wfxProfileProperties = wfxProfile.properties;
            }
            else {
                wfxProfileProperties = convertOldWfxData(configData, organizedArray.sortedProjects, organizedArray.projectStatus, organizedArray.initialCompletedProjectsInFlow, wfxProfile.properties);
            }
            var wfxP = JSON.stringify(wfxProfileProperties);
            var wfxProf_1 = JSON.parse(wfxP
                .replace(/"isShown":true/g, '"isShown":false')
                .replace(/"shownOnce":true/g, '"shownOnce":false')
                .replace(/"isCompleted":true/g, '"isCompleted":false'));
            selectedLanguage = appLocale || selectedLanguage || (wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.selectedLanguage);
            Object.keys((wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.allProjectStatus) || {}).forEach(function (key) {
                var _a;
                allProjectStatus[key] = __assign(__assign({}, wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.allProjectStatus[key]), { initialTerminationStatus: ((_a = allProjectStatus[key]) === null || _a === void 0 ? void 0 : _a.initialTerminationStatus) ? allProjectStatus[key].initialTerminationStatus : wfxProf_1.allProjectStatus[key].initialTerminationStatus });
                if (wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.completedFlowProjects[key]) {
                    completedProjectsInFlow[key] = wfxProf_1 === null || wfxProf_1 === void 0 ? void 0 : wfxProf_1.completedFlowProjects[key];
                }
            });
        }
    }
    saveTheLatestStateChange(traceId);
    saveConfigAndDownloadBulkAssets(configData, traceId);
    reComputeIsFlowTriggered();
    sendObserverLogs({
        category: OBSERVER_EVENT_CATEGORIES.PROJECT,
        event_name: OBSERVER_EVENTS.PROJECT.ORGANIZING_PROJECT_DATA,
        properties: {
            allProjectStatus: allProjectStatus,
            completedProjectsInFlow: completedProjectsInFlow
        },
        level: ObserverLogLevel.DEBUG,
    }, traceId);
    init(traceId);
}
var ApiService = (function () {
    function ApiService(options) {
        var _this = this;
        this.getFailedRequestsFromStorage = function () {
            _this.getPrefPending = true;
            sendMessageToNative({
                command: SENDING_COMMANDS.GET_PREF,
                data: {
                    key: _this.options.failedRequestsStorageKey,
                },
            }, generateUUID());
        };
        this.putFailedRequestsToStorage = function (requests) {
            if (requests === void 0) { requests = []; }
            sendMessageToNative({
                command: SENDING_COMMANDS.SAVE_PREF,
                data: {
                    key: _this.options.failedRequestsStorageKey,
                    value: JSON.stringify(requests),
                },
            }, generateUUID());
        };
        this.clearFailedRequestsFromStorage = function () {
            sendMessageToNative({
                command: SENDING_COMMANDS.CLEAR_PREF,
                data: {
                    key: _this.options.failedRequestsStorageKey,
                },
            }, generateUUID());
        };
        this.handleFailedRequest = function (request) {
            if (_this.requestsProcessing) {
                _this.pendingRequestsForStorage.push(request);
                _this.putFailedRequestsToStorage(_this.failedRequestsFromStorage.concat(_this.pendingRequestsForStorage));
                return;
            }
            if (_this.failedRequestsFromStorage.length === 0 &&
                !_this.firstTimeFailedRequestsProcessed) {
                _this.pendingRequestsForStorage.push(request);
                if (!_this.getPrefPending) {
                    _this.getFailedRequestsFromStorage();
                }
            }
            else {
                _this.failedRequestsFromStorage.push(request);
                _this.failedRequestsFromStorage =
                    _this.options.processFailedRequestsForStorage(_this.failedRequestsFromStorage);
                _this.putFailedRequestsToStorage(_this.failedRequestsFromStorage);
            }
        };
        this.restoreFailedRequestsFromStorage = function (requests) {
            _this.failedRequestsFromStorage = Array.isArray(requests) ? requests : [];
            if (_this.pendingRequestsForStorage.length > 0) {
                _this.failedRequestsFromStorage =
                    _this.options.processFailedRequestsForStorage(requests.concat(_this.pendingRequestsForStorage));
                _this.pendingRequestsForStorage = [];
                _this.putFailedRequestsToStorage(_this.failedRequestsFromStorage);
            }
            _this.getPrefPending = false;
            _this.firstTimeFailedRequestsProcessed = true;
            _this.processFailedRequests();
        };
        this.processFailedRequests = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        if (_this.requestsProcessing ||
                            _this.failedRequestsFromStorage.length === 0) {
                            return resolve();
                        }
                        _this.requestsProcessing = true;
                        var processRequests = function () { return __awaiter(_this, void 0, void 0, function () {
                            var failedRequests, _a, retryBatchSize, getRetryBatchPayload, failedRequestsFromStorage, i, batch, batchedPayload, e_12, e_13;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 7, 8, 9]);
                                        failedRequests = [];
                                        _a = this.options, retryBatchSize = _a.retryBatchSize, getRetryBatchPayload = _a.getRetryBatchPayload;
                                        failedRequestsFromStorage = this.failedRequestsFromStorage;
                                        i = 0;
                                        _b.label = 1;
                                    case 1:
                                        if (!(i < failedRequestsFromStorage.length)) return [3, 6];
                                        batch = failedRequestsFromStorage.slice(i, i + retryBatchSize);
                                        _b.label = 2;
                                    case 2:
                                        _b.trys.push([2, 4, , 5]);
                                        batchedPayload = getRetryBatchPayload(batch);
                                        return [4, this.callApi(batchedPayload, {
                                                shouldHandleFailedRequest: false,
                                                retry: true,
                                            })];
                                    case 3:
                                        _b.sent();
                                        return [3, 5];
                                    case 4:
                                        e_12 = _b.sent();
                                        failedRequests.push.apply(failedRequests, __spreadArray([], __read(batch), false));
                                        console.error(e_12);
                                        return [3, 5];
                                    case 5:
                                        i += retryBatchSize;
                                        return [3, 1];
                                    case 6:
                                        this.failedRequestsFromStorage =
                                            this.options.processFailedRequestsForStorage(failedRequests.concat(this.pendingRequestsForStorage));
                                        this.pendingRequestsForStorage = [];
                                        if (this.failedRequestsFromStorage.length === 0) {
                                            this.clearFailedRequestsFromStorage();
                                        }
                                        else {
                                            this.putFailedRequestsToStorage(this.failedRequestsFromStorage);
                                        }
                                        return [3, 9];
                                    case 7:
                                        e_13 = _b.sent();
                                        console.error(e_13);
                                        return [3, 9];
                                    case 8:
                                        this.requestsProcessing = false;
                                        resolve();
                                        return [7];
                                    case 9: return [2];
                                }
                            });
                        }); };
                        processRequests();
                    })];
            });
        }); };
        this.callApi = function (request, requestOptions) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var globalOptions = _this.options;
                        if (globalOptions.isSelfHosted) {
                            return resolve();
                        }
                        var _a = request || {}, _b = _a.url, url = _b === void 0 ? "" : _b, _c = _a.method, method = _c === void 0 ? "GET" : _c, _d = _a.body, body = _d === void 0 ? "" : _d;
                        if (!url) {
                            return reject("url should not be empty");
                        }
                        var handleRequestError = function (error) {
                            if (requestOptions.shouldHandleFailedRequest &&
                                request.method === "POST") {
                                _this.handleFailedRequest(request);
                            }
                            if (globalOptions.sendObserverErrorLog) {
                                globalOptions.sendObserverErrorLog(error, {
                                    retry: !!requestOptions.retry,
                                    url: url,
                                    method: method,
                                    body: body,
                                });
                            }
                        };
                        var api = function () { return __awaiter(_this, void 0, void 0, function () {
                            var headers, fetchRequestData, result, response, error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        return [4, globalOptions.getHeaders()];
                                    case 1:
                                        headers = _a.sent();
                                        fetchRequestData = {
                                            method: method,
                                            headers: headers,
                                        };
                                        if (body) {
                                            fetchRequestData.body =
                                                typeof body === "string" ? body : JSON.stringify(body);
                                        }
                                        return [4, fetch(url, fetchRequestData)];
                                    case 2:
                                        result = _a.sent();
                                        if (!result.ok) {
                                            handleRequestError({ message: "Request failed with status ".concat(result.status, " ").concat(result.statusText ? '(' + result.statusText + ')' : '') });
                                            return [2, reject(result)];
                                        }
                                        return [4, result.json()];
                                    case 3:
                                        response = _a.sent();
                                        resolve(response);
                                        return [3, 5];
                                    case 4:
                                        error_5 = _a.sent();
                                        handleRequestError(error_5);
                                        reject(error_5);
                                        return [3, 5];
                                    case 5: return [2];
                                }
                            });
                        }); };
                        api();
                    })];
            });
        }); };
        this.options = __assign({ failedRequestsStorageKey: "leap_failedRequests", processFailedRequestsForStorage: function (data) { return data; }, getHeaders: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, {}];
                });
            }); }, isSelfHosted: false, retryBatchSize: 1, getRetryBatchPayload: function (data) {
                if (data === void 0) { data = []; }
                return (data[0] || {});
            } }, (options || {}));
        this.failedRequestsFromStorage = [];
        this.pendingRequestsForStorage = [];
        this.requestsProcessing = false;
        this.getPrefPending = false;
        this.firstTimeFailedRequestsProcessed = false;
        this.getFailedRequestsFromStorage();
    }
    return ApiService;
}());
var analyticsService = (function () {
    function getSelectedProject() {
        var selectedProject;
        if (currentlyRunningFlow.id && currentStaticFlow.stepsStatus.length > 0) {
            selectedProject = Object.values(flowWalkthroughs).find(function (s) { return (currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.id) === (s === null || s === void 0 ? void 0 : s.id); });
        }
        else {
            selectedProject = embedProject
                .concat(sortedProjectArray)
                .find(function (s) { return (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === (s === null || s === void 0 ? void 0 : s.id); });
        }
        return selectedProject;
    }
    function getGeneralProperties(eventName, properties) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (eventName === void 0) { eventName = ""; }
        if (properties === void 0) { properties = {}; }
        var selectedProject = getSelectedProject();
        return __assign({ id: generateUUID(), sessionId: appSessionId, timestamp: new Date().toISOString(), eventName: eventName, projectName: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.projectName, projectId: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.projectId, deploymentVersion: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.deploymentVersion, deploymentName: selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters.deploymentName, language: selectedLanguage, elementName: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id)
                ? (_b = (_a = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _a === void 0 ? void 0 : _a.assist) === null || _b === void 0 ? void 0 : _b.name
                : (_c = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.assist) === null || _c === void 0 ? void 0 : _c.name, deploymentId: ((_d = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters) === null || _d === void 0 ? void 0 : _d.deploymentId) || null, projectType: (_e = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters) === null || _e === void 0 ? void 0 : _e.projectType, deploymentType: (_f = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters) === null || _f === void 0 ? void 0 : _f.deploymentType, configId: (_g = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.projectParameters) === null || _g === void 0 ? void 0 : _g.configId, clientCallback: {}, leapUserId: getCurrentUserId() }, properties);
    }
    return { getGeneralProperties: getGeneralProperties };
})();
var surveyAnalyticsService = (function () {
    var maxStorageSize = 40;
    var surveyApiService = new ApiService({
        processFailedRequestsForStorage: processFailedRequestsForStorage,
        getHeaders: getHeaders,
        isSelfHosted: isSelfHosted,
        failedRequestsStorageKey: "leap_survey_failed_requests",
        sendObserverErrorLog: sendObserverErrorLog,
        retryBatchSize: 10,
        getRetryBatchPayload: getRetryBatchPayload,
    });
    function getRetryBatchPayload(requests) {
        if (!requests || !requests.length) {
            return ({});
        }
        var resultBody = [];
        for (var i = 0; i < requests.length; i++) {
            resultBody.push.apply(resultBody, __spreadArray([], __read(requests[i].body), false));
        }
        return (__assign(__assign({}, requests[0]), { body: resultBody }));
    }
    function getHeaders() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        if (!!((_a = jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.analyticsMetadata) === null || _a === void 0 ? void 0 : _a.surveyAuthToken)) return [3, 2];
                        return [4, fetchAndSetEnterpriseId(generateUUID())];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2, {
                            Authorization: (_b = jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.analyticsMetadata) === null || _b === void 0 ? void 0 : _b.surveyAuthToken,
                            "Content-Type": "application/json",
                        }];
                    case 3:
                        error_6 = _c.sent();
                        console.error("getHeaders(): error while returning the headers", error_6);
                        return [2, ({})];
                    case 4: return [2];
                }
            });
        });
    }
    function sendObserverErrorLog(error, _a) {
        var body = _a.body, retry = _a.retry;
        try {
            if ((body === null || body === void 0 ? void 0 : body.length) > 0) {
                var projectIds_1 = new Set();
                body.forEach(function (question) {
                    var _a;
                    projectIds_1.add((_a = question === null || question === void 0 ? void 0 : question.properties) === null || _a === void 0 ? void 0 : _a.wfe_project_id);
                });
                sendObserverLogs({
                    category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                    event_name: OBSERVER_EVENTS.NETWORK.FAILURE_IN_SENDING_SURVEY_ANALYTICS,
                    properties: {
                        projectIds: projectIds_1,
                        retry: retry,
                        error: error
                    },
                    level: ObserverLogLevel.ERROR,
                }, traceId);
            }
        }
        catch (error) {
            console.error("Failed to Send Observer Log for survey analytics failure", error);
        }
    }
    function processFailedRequestsForStorage(requests) {
        if (requests === void 0) { requests = []; }
        if (requests.length > maxStorageSize) {
            return requests.slice(requests.length - maxStorageSize);
        }
        return requests;
    }
    function getApiPayload(data) {
        if (data === void 0) { data = {}; }
        try {
            var _a = data.properties, properties = _a === void 0 ? [] : _a;
            var generalProps_1 = analyticsService.getGeneralProperties();
            var payload_1 = [];
            var userIds_1 = [generalProps_1.leapUserId];
            var numeric_properties_1 = {
                wfe_survey_deployment_version: generalProps_1.deploymentVersion,
            };
            var pii_properties_1 = {
                user_id: generalProps_1.leapUserId,
            };
            var _b = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) || {}, deploymentId_1 = _b.deploymentId, surveyDeploymentId_1 = _b.surveyDeploymentId, surveyDeploymentVersion_1 = _b.surveyDeploymentVersion, surveyId_1 = _b.surveyId, projectName_1 = _b.projectName;
            var getProperties_1 = function (info) {
                var wfe_survey_question = info.wfe_survey_question, wfu_survey_answer = info.wfe_survey_answer, wfe_survey_question_id = info.wfe_survey_question_id;
                return {
                    wf_app_id: (jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.appId) || wfAppId,
                    wf_org_id: (jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.orgId) || wfOrgId,
                    wfe_app_id: (jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.appId) || wfAppId,
                    wfe_survey_question_id: wfe_survey_question_id,
                    wfe_survey_question: wfe_survey_question,
                    wfu_survey_answer: wfu_survey_answer,
                    wfe_id: generalProps_1.id,
                    wfe_user_id: generalProps_1.leapUserId,
                    wfe_leap_id: generalProps_1.leapUserId,
                    wfu_uid: generalProps_1.leapUserId,
                    wfe_session_id: generalProps_1.sessionId,
                    wfe_timestamp: generalProps_1.timestamp,
                    wfe_language: generalProps_1.language,
                    wfe_survey_language: "ang",
                    wfe_event_id: generateUUID(),
                    wfe_element_name: generalProps_1.elementName,
                    wfe_survey_name: projectName_1,
                    wfe_project_id: generalProps_1.projectId,
                    wfe_deployment_id: deploymentId_1,
                    wfe_survey_id: surveyId_1,
                    wfe_survey_deployment_id: surveyDeploymentId_1,
                    wfe_survey_deployment_version: surveyDeploymentVersion_1,
                };
            };
            properties.forEach(function (info) {
                payload_1.push({
                    type: "wf_survey",
                    userIds: userIds_1,
                    numeric_properties: numeric_properties_1,
                    pii_properties: pii_properties_1,
                    properties: getProperties_1(info),
                });
            });
            return payload_1;
        }
        catch (error) {
            console.error("getApiPayload(): unable to parse api payload", error);
            return [];
        }
    }
    function sendEvent(data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var surveyEventsUrl, url, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isSelfHosted) {
                            return [2];
                        }
                        if (inPreviewMode) {
                            return [2];
                        }
                        if (!!jsMetadata) return [3, 2];
                        return [4, fetchAndSetEnterpriseId(generateUUID())];
                    case 1:
                        jsMetadata = _a.sent();
                        _a.label = 2;
                    case 2:
                        surveyEventsUrl = ((jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.analyticsMetadata) || {}).surveyEventsUrl;
                        url = surveyEventsUrl || "".concat(appObserverBaseUrl, "service/survey/edith/api/v1/analytics/source/").concat(enterpriseId);
                        body = getApiPayload(data);
                        if (body.length > 0) {
                            surveyApiService.callApi({ url: url, body: body, method: "POST" }, { shouldHandleFailedRequest: true });
                        }
                        return [2];
                }
            });
        });
    }
    function flushAll() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, surveyApiService.processFailedRequests()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function restoreFailedRequestsFromStorage(data) {
        try {
            var restoredData = JSON.parse(data || "[]");
            if (!Array.isArray(restoredData)) {
                restoredData = [];
                surveyApiService.clearFailedRequestsFromStorage();
            }
            surveyApiService.restoreFailedRequestsFromStorage(restoredData);
        }
        catch (error) {
            surveyApiService.clearFailedRequestsFromStorage();
            surveyApiService.restoreFailedRequestsFromStorage([]);
            console.error("restoreFailedRequestsFromStorage(): Unable to parse data from shared preferences", error);
            sendObserverLogs({
                event_name: OBSERVER_EVENTS.ERROR.UNABLE_TO_PARSE_DATA_FROM_SHARED_PREFERENCES_ERROR,
                category: OBSERVER_EVENT_CATEGORIES.ERROR,
                properties: {
                    error: error
                },
                level: ObserverLogLevel.ERROR,
            }, traceId);
        }
    }
    return { sendEvent: sendEvent, flushAll: flushAll, restoreFailedRequestsFromStorage: restoreFailedRequestsFromStorage };
})();
var EVENT_SOURCE = "mobile";
var EVENT_CATEGORY = "whatfix";
var EVENT_SINK = "WHATFIX_ANALYTICS";
var JS_SDK = "js_sdk";
var EVENTS_PREFERENCES = "events_preferences";
var eventCollectorService = {
    init: function (maxBatchSize, batchWaitTime) {
        if (maxBatchSize === void 0) { maxBatchSize = 5; }
        if (batchWaitTime === void 0) { batchWaitTime = toMilliSeconds(10); }
        this.maxBatchSize = maxBatchSize;
        this.batchWaitTime = batchWaitTime;
        this.eventRequestQueue = [];
        this.isUploading = false;
        this.batchTimer = null;
        this.maxQueueSize = 100;
        this.cacheStore = undefined;
        this.persistedEventSyncInProgress = false;
        console.log("eventCollectorService.constructor(): initialised successfully.");
    },
    enqueueEventRequests: function (eventRequests, traceId) {
        if (eventRequests === void 0) { eventRequests = []; }
        return __awaiter(this, void 0, void 0, function () {
            var availableSpace, eventsPendingToBeAdded;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                if (isSelfHosted || inPreviewMode)
                    return [2];
                if (!eventRequests.length)
                    return [2];
                availableSpace = this.maxQueueSize - this.eventRequestQueue.length;
                if (availableSpace <= 0) {
                    console.warn("event queue full (".concat(this.eventRequestQueue.length, " items), dropping ").concat(eventRequests.length, " new logs"));
                    return [2];
                }
                eventsPendingToBeAdded = eventRequests.slice(0, availableSpace);
                (_a = this.eventRequestQueue).push.apply(_a, __spreadArray([], __read(eventsPendingToBeAdded), false));
                this.cacheEventQueue();
                if (!this.batchTimer) {
                    this.batchTimer = setTimeout(function () {
                        _this.batchTimer = null;
                        _this.uploadNextBatch(traceId);
                    }, this.batchWaitTime);
                }
                return [2];
            });
        });
    },
    uploadNextBatch: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, batch, responseUploadedStatus, error_7;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.isUploading;
                        if (_a) return [3, 2];
                        return [4, this.cannotMakeApiCall()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (_a || !this.eventRequestQueue.length) {
                            return [2];
                        }
                        this.isUploading = true;
                        console.log("eventCollectorService.uploadNextBatch(): Uploading next batch of events. Queue size: ".concat(this.eventRequestQueue.length));
                        batch = this.eventRequestQueue.splice(0, this.maxBatchSize);
                        this.addUploadMetadataToEventPayload(batch);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, 6, 7]);
                        return [4, this.uploadEvents(batch)];
                    case 4:
                        responseUploadedStatus = _c.sent();
                        if (responseUploadedStatus)
                            this.cacheEventQueue();
                        return [3, 7];
                    case 5:
                        error_7 = _c.sent();
                        console.error("[".concat(traceId, "]Error uploading events"), error_7);
                        (_b = this.eventRequestQueue).unshift.apply(_b, __spreadArray([], __read(batch), false));
                        return [3, 7];
                    case 6:
                        this.isUploading = false;
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    addUploadMetadataToEventPayload: function (eventBatch) {
        var e_14, _a;
        var _b, _c;
        var nowISOString = new Date().toISOString();
        try {
            for (var eventBatch_1 = __values(eventBatch), eventBatch_1_1 = eventBatch_1.next(); !eventBatch_1_1.done; eventBatch_1_1 = eventBatch_1.next()) {
                var event_1 = eventBatch_1_1.value;
                var isFirstAttempt = !((_b = event_1 === null || event_1 === void 0 ? void 0 : event_1.properties) === null || _b === void 0 ? void 0 : _b.wf_first_upload_timestamp);
                if (isFirstAttempt) {
                    event_1.properties.wf_first_upload_timestamp = nowISOString;
                }
                else {
                    event_1.properties.wf_last_upload_timestamp = nowISOString;
                }
                event_1.numeric_properties.wf_upload_attempt_count = ((_c = event_1.numeric_properties.wf_upload_attempt_count) !== null && _c !== void 0 ? _c : 0) + 1;
                if (!(event_1 === null || event_1 === void 0 ? void 0 : event_1.ent_id)) {
                    event_1.ent_id = enterpriseId;
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (eventBatch_1_1 && !eventBatch_1_1.done && (_a = eventBatch_1.return)) _a.call(eventBatch_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
    },
    cacheEventQueue: function () {
        this.getCache().save(EVENTS_PREFERENCES, this.eventRequestQueue);
        console.debug("eventCollectorService.persistEvents(): cached events and size", JSON.stringify(this.eventRequestQueue), this.eventRequestQueue.size);
    },
    fetchCachedEvents: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("eventCollectorService.fetchCachedEvents(): called");
                this.getCache().get(EVENTS_PREFERENCES);
                return [2];
            });
        });
    },
    getCache: function () {
        if (!this.cacheStore) {
            this.cacheStore = new CacheStore();
            console.debug("eventCollectorService.getCache(): cacheStore initialized");
        }
        return this.cacheStore;
    },
    clearCache: function () {
        this.getCache().clear(EVENTS_PREFERENCES);
    },
    handlePersistedEvents: function (persistedEvents, traceId) {
        if (persistedEvents === void 0) { persistedEvents = []; }
        return __awaiter(this, void 0, void 0, function () {
            var parsedPersistedEvents;
            return __generator(this, function (_a) {
                console.debug("eventCollectorService.handlePersistedEvents(): called with persistedEvents: ", JSON.stringify(persistedEvents));
                if (this.persistedEventSyncInProgress)
                    return [2];
                try {
                    this.persistedEventSyncInProgress = true;
                    parsedPersistedEvents = JSON.parse(persistedEvents);
                    console.log("eventCollectorService.handlePersistedEvents(".concat(persistedEvents, ")"));
                    if (!Array.isArray(parsedPersistedEvents)) {
                        console.warn("eventCollectorService.handlePersistedEvents(): Invalid persisted events data, expected an array.");
                        this.clearCache();
                        sendObserverLogs({
                            category: OBSERVER_EVENT_CATEGORIES.ERROR,
                            event_name: OBSERVER_EVENTS.ERROR.SAVED_ANALYTICS_EVENTS_PARSING_ERROR,
                            properties: {
                                error: "Invalid persisted events data, expected an array, received " + typeof persistedEvents
                            },
                            level: ObserverLogLevel.ERROR,
                        }, traceId);
                        this.persistedEventSyncInProgress = false;
                        return [2];
                    }
                    this.appendEventsToQueue(parsedPersistedEvents, traceId);
                    this.persistedEventSyncInProgress = false;
                }
                catch (error) {
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        event_name: OBSERVER_EVENTS.ERROR.SAVED_ANALYTICS_EVENTS_PARSING_ERROR,
                        properties: {
                            error: error
                        },
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    this.persistedEventSyncInProgress = false;
                }
                return [2];
            });
        });
    },
    appendEventsToQueue: function (parsedPersistedEvents, traceId) {
        if (!parsedPersistedEvents || parsedPersistedEvents.length === 0) {
            console.log("eventCollectorService.appendEventsToQueue(): No persisted events to process.");
            return;
        }
        this.enqueueEventRequests(parsedPersistedEvents, traceId);
    },
    uploadEvents: function (eventRequests) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, requestBodyString, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("eventCollectorService.uploadEvents(): called");
                        if (!eventRequests || eventRequests.length === 0) {
                            return [2];
                        }
                        console.debug("eventCollectorService.uploadEvents(): eventRequests- ", JSON.stringify(eventRequests));
                        url = this.getEventCollectorUrl();
                        headers = this.buildHeaders();
                        return [4, this.isDeviceOffline()];
                    case 1:
                        if (_a.sent()) {
                            throw new Error("eventCollectorService No network connectivity");
                        }
                        requestBodyString = JSON.stringify(eventRequests);
                        console.log("eventCollectorService.uploadEvents(): uploading events. eventCount- ".concat(eventRequests.length, ", requestSize- ").concat(requestBodyString.length));
                        console.debug("eventCollectorService.uploadEvents(): events api call url- ".concat(url, ", headers- ").concat(JSON.stringify(headers), ", body- ").concat(requestBodyString));
                        return [4, fetch(url, {
                                method: "POST",
                                headers: headers,
                                body: requestBodyString,
                            })];
                    case 2:
                        response = _a.sent();
                        if (!!response.ok) return [3, 4];
                        return [4, response.text().catch(function () { return "Could not read response body"; })];
                    case 3:
                        responseText = _a.sent();
                        throw new Error("Server responded with ".concat(response.status, ": ").concat(responseText));
                    case 4:
                        console.log("eventCollectorService.uploadEvents(): events api call successful");
                        return [2, true];
                }
            });
        });
    },
    getEventCollectorUrl: function () {
        var _a;
        return ((_a = jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.analyticsMetadata) === null || _a === void 0 ? void 0 : _a.eventsUrl) || "".concat(appObserverBaseUrl, "service/event/collect/v2/").concat(enterpriseId);
    },
    buildHeaders: function () {
        return {
            "Content-Type": "application/json"
        };
    },
    canMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, hasConfigBaseUrl, hasAppApiKey, hasAppVersionName, hasUserId, hasSessionId, hasEnterpriseId, hasAppId, hasOrgId, online, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = getCurrentUserId();
                        hasConfigBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
                        hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
                        hasAppVersionName = typeof appVersionName === 'string' && appVersionName.trim() !== '';
                        hasUserId = typeof userId === 'string' && userId.trim() !== '';
                        hasSessionId = typeof appSessionId === 'string' && appSessionId.trim() !== '';
                        hasEnterpriseId = typeof enterpriseId === 'string' && enterpriseId.trim() !== '';
                        hasAppId = typeof wfAppId === 'string' && wfAppId.trim() !== '';
                        hasOrgId = typeof wfOrgId === 'string' && wfOrgId.trim() !== '';
                        if (!hasEnterpriseId)
                            console.warn("event upload failed: enterpriseId is missing or invalid");
                        if (!hasAppId)
                            console.warn("event upload failed: appId is missing or invalid");
                        if (!hasOrgId)
                            console.warn("event upload failed: orgId is missing or invalid");
                        return [4, this.isDeviceOnline()];
                    case 1:
                        online = _a.sent();
                        console.debug("eventCollectorService.uploadEvents(): online status ", online);
                        if (!(online && (!hasEnterpriseId || !hasAppId || !hasOrgId))) return [3, 3];
                        console.debug("eventCollectorService.uploadEvents(): online fetching enterpriseId");
                        return [4, setEnterpriseId()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        status = hasConfigBaseUrl && hasAppApiKey && hasAppVersionName && hasUserId && hasSessionId && online && hasEnterpriseId;
                        console.warn("eventCollectorService.canMakeApiCall(): Sync status: ", status);
                        return [2, status];
                }
            });
        });
    },
    isDeviceOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, networkService.isReallyOnline()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    cannotMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.canMakeApiCall()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    isDeviceOffline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isDeviceOnline()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    wait: function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.uploadNextBatch(traceId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    enqueueEvent: function (event, traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var eventCollectorPayload;
            return __generator(this, function (_a) {
                console.debug("eventCollectorService.enqueueEvent(): sending event with name- ".concat(event.eventName, "\n        , eventData- ").concat(JSON.stringify(event.data), ", traceId ").concat(traceId));
                try {
                    eventCollectorPayload = this.buildAnalyticsEventObject(event, traceId);
                    console.debug("eventCollectorService.enqueueEvent() eventCollectorPayload", JSON.stringify(eventCollectorPayload));
                    this.enqueueEventRequests([eventCollectorPayload], traceId);
                }
                catch (error) {
                    console.error("enqueueEvent(): error while queuing event requests.", error);
                }
                return [2];
            });
        });
    },
    buildAnalyticsEventObject: function (eventRequest, traceId) {
        var _a, _b, _c, _d;
        var selectedProjectProperties = analyticsService.getGeneralProperties();
        var eventData = eventRequest === null || eventRequest === void 0 ? void 0 : eventRequest.data;
        var collectorPayload = {
            "event_sink": EVENT_SINK,
            "event_version": 2,
            "ent_id": enterpriseId,
            "user_ids": [getCurrentUserId()],
            "source": EVENT_SOURCE,
            "category": EVENT_CATEGORY,
        };
        var wfProjectId = (eventData === null || eventData === void 0 ? void 0 : eventData.projectId) || ((_a = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _a === void 0 ? void 0 : _a.projectId) || (selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.projectId);
        var wfDeploymentId = (eventData === null || eventData === void 0 ? void 0 : eventData.deploymentId) || ((_b = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _b === void 0 ? void 0 : _b.deploymentId) || (selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.deploymentId);
        var wfSelectedProjectId = (eventData === null || eventData === void 0 ? void 0 : eventData.selectedProjectId) || ((activeProject === null || activeProject === void 0 ? void 0 : activeProject.isAFlowMenu) ? selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.projectId : null);
        var parentProject = connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[wfDeploymentId];
        var appId = (jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.appId) || wfAppId;
        var orgId = (jsMetadata === null || jsMetadata === void 0 ? void 0 : jsMetadata.orgId) || wfOrgId;
        collectorPayload.properties = __assign(__assign({ "wf_event_id": (eventData === null || eventData === void 0 ? void 0 : eventData.eventId) || generateUUID(), "wf_event_source": JS_SDK, "wf_session_id": appSessionId, "wf_user_session_id": userSessionId, "wf_project_id": wfProjectId, "wf_deployment_id": wfDeploymentId, "wf_previous_language": eventData === null || eventData === void 0 ? void 0 : eventData.previousLanguage, "wf_language": selectedLanguage, "wf_timestamp": eventData === null || eventData === void 0 ? void 0 : eventData.timestamp, "wf_page_name": (eventData === null || eventData === void 0 ? void 0 : eventData.pageName) || null, "wf_element_name": (eventData === null || eventData === void 0 ? void 0 : eventData.elementName) || (selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.elementName), "wf_action_event_type": eventData === null || eventData === void 0 ? void 0 : eventData.actionEventType, "wf_action_event_value": eventData === null || eventData === void 0 ? void 0 : eventData.actionEventValue, "wf_termination_rule": eventData === null || eventData === void 0 ? void 0 : eventData.terminationRule, "wf_selected_project_id": wfSelectedProjectId }, (parentProject && {
            "wf_parent_project_id": ((_c = connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[wfDeploymentId]) === null || _c === void 0 ? void 0 : _c.projectId) || undefined,
            "wf_parent_deployment_id": ((_d = connectProjectsParentMap === null || connectProjectsParentMap === void 0 ? void 0 : connectProjectsParentMap[wfDeploymentId]) === null || _d === void 0 ? void 0 : _d.deploymentId) || undefined,
        })), { "wf_app_id": appId, "wf_org_id": orgId, "wf_carousel_slide_id": (eventData === null || eventData === void 0 ? void 0 : eventData.carouselSlideId) || undefined, "wf_carousel_previous_slide_id": (eventData === null || eventData === void 0 ? void 0 : eventData.carouselPreviousSlideId) || undefined, "wf_carousel_direction": (eventData === null || eventData === void 0 ? void 0 : eventData.carouselDirection) || undefined, "wf_carousel_completed": (eventData === null || eventData === void 0 ? void 0 : eventData.carouselCompleted) || undefined, "wf_external_link": (eventData === null || eventData === void 0 ? void 0 : eventData.externalLink) || undefined, "wf_deep_link": (eventData === null || eventData === void 0 ? void 0 : eventData.deepLink) || undefined, "wf_app_version_name": appVersionName, "wf_app_version_code": appVersionCode.toString(), "wf_config_id": (selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.configId) || undefined, "wf_trace_id": traceId });
        collectorPayload.numeric_properties = __assign(__assign({ "wf_deployment_version": Number((eventData === null || eventData === void 0 ? void 0 : eventData.deploymentVersion) || (selectedProjectProperties === null || selectedProjectProperties === void 0 ? void 0 : selectedProjectProperties.deploymentVersion)) }, (parentProject && {
            "wf_parent_deployment_version": Number(parentDeploymentVersion) || -1,
        })), { "wf_sdk_version_code": Number(coreSdkVersionCode), "wf_model_version": 2, "wf_js_version": jsVersionNumber });
        collectorPayload.pii_properties = {
            "wf_user_id": getCurrentUserId(),
        };
        collectorPayload.timestamp = new Date().getTime().toString();
        collectorPayload.type = eventRequest === null || eventRequest === void 0 ? void 0 : eventRequest.eventName;
        return collectorPayload;
    }
};
function toMilliSeconds(seconds) {
    return seconds * 1000;
}
eventCollectorService.init();
function receiveDataFromNativeLayer(message) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var traceId = generateUUID();
    try {
        if (!message)
            return;
        ensureSessionStarted();
        logCommandFromNativeLayer(message, traceId);
        switch (message.commandName) {
            case RECEIVING_COMMANDS.START: {
                executor.addTask(function () { return start(message.data, traceId); });
                break;
            }
            case RECEIVING_COMMANDS.SCREEN_HIERARCHY: {
                (metaConfigs === null || metaConfigs === void 0 ? void 0 : metaConfigs.observeHierarchySize) && calculateAvgHierarchySize(message.data.screenHierarchy, traceId);
                receiveScreenHierarchy(message.data.screenHierarchy, undefined, undefined, traceId);
                break;
            }
            case RECEIVING_COMMANDS.ASSIST_INTERACTION: {
                updateAssistInteraction(message.data, traceId);
                break;
            }
            case RECEIVING_COMMANDS.SURVEY_INFO: {
                surveyAnalyticsService.sendEvent(message === null || message === void 0 ? void 0 : message.data, traceId);
                break;
            }
            case RECEIVING_COMMANDS.PREF_RESPONSE: {
                if (!message.data || !message.data.key) {
                    console.debug("preferences response is missing key or data", message);
                    return;
                }
                switch (message.data.key) {
                    case 'leap_survey_failed_requests':
                        surveyAnalyticsService.restoreFailedRequestsFromStorage(message.data.value);
                        break;
                    case EVENTS_PREFERENCES:
                        console.debug("preferences response ", message.data.value);
                        eventCollectorService.handlePersistedEvents(message.data.value, traceId);
                        break;
                    default:
                        break;
                }
            }
            case RECEIVING_COMMANDS.WEB_IDENTIFIERS: {
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.SDK.RECEIVING_WEB_IDENTIFIERS_STATUS,
                    category: OBSERVER_EVENT_CATEGORIES.SDK,
                    properties: {
                        webIdenitifierStatus: message.data.identifiers,
                    },
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
                receiveWebIdentifiers(message.data.identifiers, traceId);
                break;
            }
            case RECEIVING_COMMANDS.LANGUAGE_SELECTED: {
                var previousLanguage = selectedLanguage;
                setCurrentSelectedLanguage(message.data.language);
                if (currentStaticFlow.id !== undefined &&
                    currentStaticFlow.stepsStatus.length !== 0) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_LANGUAGE_CHANGE, {
                        previousLanguage: previousLanguage,
                    }, traceId);
                    (_a = currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.stepsStatus) === null || _a === void 0 ? void 0 : _a.splice(-1);
                    resetActiveStep();
                    saveTheLatestStateChange(traceId);
                }
                break;
            }
            case RECEIVING_COMMANDS.ACTIVITY_PAUSE: {
                resetActiveStep();
                clearInterval(timer);
                if (currentlyRunningFlow.id) {
                    flowShown = false;
                }
                if (activeProject.id && !(currentlyRunningFlow.id) && !(currentStaticFlow.id)) {
                    resetActiveProject();
                }
                timer = undefined;
                break;
            }
            case RECEIVING_COMMANDS.ACTIVITY_RESUME: {
                currentMatchedWebIdentifiers = {};
                if (timer === undefined)
                    init();
                break;
            }
            case RECEIVING_COMMANDS.ICON_STOP: {
                sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_STOP, undefined, traceId);
                clearActiveProject();
                break;
            }
            case RECEIVING_COMMANDS.ICON_CLICK: {
                handleIconAction(message.data.uniqueId);
                break;
            }
            case RECEIVING_COMMANDS.ASSIST_VISIBLE: {
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.FINDER.ASSIST_VISIBLE,
                    category: OBSERVER_EVENT_CATEGORIES.FINDER,
                    properties: __assign({ activeProject: extractProjectDataForObserver(activeProject) }, ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) ? {
                        activeStep: {
                            step_id: activeStep === null || activeStep === void 0 ? void 0 : activeStep.id,
                            step_name: (_b = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _b === void 0 ? void 0 : _b.assist.name,
                            type: (_c = activeStep === null || activeStep === void 0 ? void 0 : activeStep.step) === null || _c === void 0 ? void 0 : _c.assistType,
                        }
                    } : {})),
                    level: ObserverLogLevel.INFO,
                }, traceId);
                updateProjectStatus({ id: activeProject.id, isShown: true }, traceId);
                updateViewStatusForTheProject(activeProject.id, "nSession", traceId);
                if ((_d = ["STATIC_FLOW_CHECKLIST", "STATIC_FLOW_MENU"]) === null || _d === void 0 ? void 0 : _d.includes((_e = message === null || message === void 0 ? void 0 : message.data) === null || _e === void 0 ? void 0 : _e.projectType)) {
                    resetActiveStep();
                    resetCurrentStaticFlow();
                }
                if ((currentStaticFlow === null || currentStaticFlow === void 0 ? void 0 : currentStaticFlow.status) === "START") {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: (_f = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _f === void 0 ? void 0 : _f.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }
                if (currentStaticFlow.autoStart) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_START, {
                        elementName: (_g = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _g === void 0 ? void 0 : _g.projectName,
                    }, traceId);
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_OPT_IN, {
                        elementName: (_h = activeProject === null || activeProject === void 0 ? void 0 : activeProject.projectParameters) === null || _h === void 0 ? void 0 : _h.projectName,
                    }, traceId);
                    currentStaticFlow.autoStart = false;
                }
                if (currentlyRunningFlow.id &&
                    currentStaticFlow.stepsStatus.length === 0) {
                    sendAnalyticEvent(ANALYTICS_EVENTS.FLOW_MENU_START, undefined, traceId);
                }
                sendAnalyticEvent(ANALYTICS_EVENTS.ELEMENT_SEEN, undefined, traceId);
                break;
            }
            case RECEIVING_COMMANDS.EMBED_PROJECT: {
                executor.addTask(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (isSelfHosted) {
                                    return [2];
                                }
                                clearEveryThing(true, traceId);
                                return [4, fetchByProjectId(message.data.projectId, traceId)];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
                break;
            }
            case RECEIVING_COMMANDS.SET_USER_ID: {
                executor.addTask(function () { return login_user(message.data.leapUserId, traceId); });
                break;
            }
            case RECEIVING_COMMANDS.LOGOUT: {
                executor.addTask(function () { return logout_user(traceId); });
                break;
            }
            case RECEIVING_COMMANDS.STOP_PREVIEW: {
                inPreviewMode = false;
                sendMessageToNative({
                    command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                }, traceId);
                clearEveryThing(true, traceId);
                features = LiveFeatures;
                metaConfigs = LiveMetaConfigs;
                break;
            }
            case RECEIVING_COMMANDS.DISABLE_PANEL_EVENT: {
                currentMatchedWebIdentifiers = {};
                handlePanelEvent(message.data, traceId);
                break;
            }
            case RECEIVING_COMMANDS.PREVIEW_CONFIG: {
                inPreviewMode = true;
                clearEveryThing(true, traceId);
                enterPreviewMode(JSON.parse(message.data.previewConfig), traceId);
                break;
            }
            case RECEIVING_COMMANDS.USER_PROPERTIES: {
                executor.addTask(function () { return __awaiter(_this, void 0, void 0, function () {
                    var userProps;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                userProps = (_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.userProps;
                                customProperties = __assign(__assign({}, customProperties), userProps);
                                defaultProperties = __assign({}, (_b = message === null || message === void 0 ? void 0 : message.data) === null || _b === void 0 ? void 0 : _b.defaultProps);
                                saveTheLatestProps(traceId);
                                saveTheLatestStateChange(traceId);
                                clearEveryThing(true, traceId);
                                return [4, fetchByUserProperties(traceId)];
                            case 1:
                                _c.sent();
                                return [2];
                        }
                    });
                }); });
                break;
            }
            case RECEIVING_COMMANDS.APP_LOCALE: {
                setCurrentSelectedLanguage(message.data.appLocale);
                executor.addTask(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        saveTheLatestProps(traceId);
                        saveTheLatestStateChange(traceId);
                        return [2];
                    });
                }); });
                break;
            }
            case RECEIVING_COMMANDS.NETWORK_SWITCH: {
                console.log('NETWORK_SWITCH');
                break;
            }
            case RECEIVING_COMMANDS.OBSERVER_LOG: {
                if (!message.data)
                    return;
                console.log('OBSERVER_LOG from Native');
                handleLogsSentFromNative(message.data, traceId);
                break;
            }
            default: {
                console.log("No command found", JSON.stringify(message));
                break;
            }
        }
    }
    catch (error) {
        console.error("receiveDataFromNativeLayer(): unable to execute command from native", error);
        sendObserverLogs({
            event_name: OBSERVER_EVENTS.ERROR.FAILURE_IN_EXECUTING_COMMAND_FROM_NATIVE,
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            properties: {
                command: message === null || message === void 0 ? void 0 : message.commandName,
                error: error
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
    }
    function logCommandFromNativeLayer(message, traceId) {
        var _a;
        try {
            if (shouldLogCommand(message)) {
                var messageData = shouldLogData(message) ? (_a = message.data) !== null && _a !== void 0 ? _a : {} : { message_data_included: false };
                sendObserverLogs({
                    event_name: OBSERVER_EVENTS.SDK.RECEIVING_COMMAND_FROM_NATIVE,
                    category: OBSERVER_EVENT_CATEGORIES.SDK,
                    properties: {
                        command: message.commandName,
                        messageData: messageData
                    },
                    level: ObserverLogLevel.DEBUG,
                }, traceId);
            }
            function shouldLogCommand(message) {
                return ((message === null || message === void 0 ? void 0 : message.commandName) &&
                    ![
                        RECEIVING_COMMANDS.SCREEN_HIERARCHY,
                        RECEIVING_COMMANDS.WEB_IDENTIFIERS,
                        RECEIVING_COMMANDS.PREVIEW_CONFIG,
                        RECEIVING_COMMANDS.OBSERVER_LOG,
                        RECEIVING_COMMANDS.ASSIST_VISIBLE,
                    ].includes(message.commandName));
            }
            function shouldLogData(message) {
                return (![
                    RECEIVING_COMMANDS.START,
                    RECEIVING_COMMANDS.SCREEN_HIERARCHY,
                    RECEIVING_COMMANDS.PREVIEW_CONFIG,
                    RECEIVING_COMMANDS.OBSERVER_LOG,
                    RECEIVING_COMMANDS.PREF_RESPONSE
                ].includes(message.commandName));
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
function login_user(userId, traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUserId, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    currentUserId = getCurrentUserId();
                    if (isSelfHosted) {
                        return [2];
                    }
                    sendAnalyticEvent(ANALYTICS_EVENTS.PUBLIC_EVENTS_USER_ID, {
                        sessionId: jsSdkSessionId,
                        configUrl: configBaseUrl,
                        apikey: appApiKey,
                        platform: platform,
                        subPlatform: subPlatform,
                        versionName: appVersionName,
                        versionCode: appVersionCode,
                        sdkVersionCode: coreSdkVersionCode,
                        userId: currentUserId,
                        setUserId: userId,
                    });
                    sendMessageToNative({
                        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                        data: {
                            leapUserId: currentUserId,
                        },
                    }, traceId);
                    ensureSessionStarted();
                    if (!(sdkStateService.isLoggedIn && userId !== currentUserId)) return [3, 2];
                    clearEveryThing(true, traceId);
                    return [4, logout_user(traceId)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.USER.LOGIN,
                        category: OBSERVER_EVENT_CATEGORIES.USER,
                        userId: userId,
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    sdkStateService.setUserId(userId, traceId);
                    return [4, fetchByUserId(userId, traceId)];
                case 3:
                    _a.sent();
                    setUserLoggedIn();
                    return [3, 5];
                case 4:
                    error_8 = _a.sent();
                    console.error("login_user(): failed to login user", error_8);
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.ERROR.LOGIN_FAILED_ERROR,
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        properties: {
                            error: error_8,
                        },
                        userId: userId,
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
function logout_user(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (isSelfHosted) {
                        return [2];
                    }
                    if (sdkStateService.isLoggedOut) {
                        return [2];
                    }
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.USER.LOGOUT,
                        category: OBSERVER_EVENT_CATEGORIES.USER,
                        userId: getCurrentUserId(),
                        level: ObserverLogLevel.INFO,
                    }, traceId);
                    sendAnalyticEvent(ANALYTICS_EVENTS.PUBLIC_EVENTS_LOGOUT, {
                        sessionId: jsSdkSessionId,
                        versionName: appVersionName,
                        versionCode: appVersionCode,
                        sdkVersionCode: coreSdkVersionCode,
                        userId: getCurrentUserId(),
                    });
                    sendMessageToNative({
                        command: SENDING_COMMANDS.NO_CONTEXT_FOUND,
                        data: {
                            leapUserId: getCurrentUserId(),
                        },
                    }, traceId);
                    clearEveryThing(true, traceId);
                    updateUserProfile(traceId);
                    cleanUpGlobalState(traceId);
                    sdkStateService.logout(traceId);
                    startNewSession();
                    sdkStateService.init();
                    saveTheLatestStateChange(traceId);
                    return [4, fetchConfig({
                            userId: sdkStateService.currentUserId,
                        }, traceId)];
                case 1:
                    _a.sent();
                    return [3, 3];
                case 2:
                    error_9 = _a.sent();
                    console.error("logout_user(): failed to logout user", error_9);
                    sendObserverLogs({
                        event_name: OBSERVER_EVENTS.ERROR.LOGOUT_FAILED_ERROR,
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        properties: {
                            error: error_9
                        },
                        userId: getCurrentUserId(),
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
function cleanUpGlobalState(traceId) {
    customProperties = {};
    saveTheLatestProps(traceId);
    resetGlobalUserState();
}
function handleLogsSentFromNative(data, traceId) {
    sendObserverLogs({
        event_name: OBSERVER_EVENTS.SDK.SDK_LOGGED,
        category: OBSERVER_EVENT_CATEGORIES.SDK,
        properties: __assign({}, data),
        level: ObserverLogLevel.DEBUG,
    }, traceId);
}
var JS_OBSERVER_LOG_TYPE = "MOBILE_JS_LOG";
var LOG_API_REQUEST_NULL_STRING_VALUE = "[NULL]";
var LOG_FIELD_TYPE_DEFAULT = "DEFAULT";
var observerLogService = {
    init: function (maxBatchSize, batchWaitTime) {
        if (maxBatchSize === void 0) { maxBatchSize = 40; }
        if (batchWaitTime === void 0) { batchWaitTime = toMilliSeconds(10); }
        this.maxBatchSize = maxBatchSize;
        this.batchWaitTime = batchWaitTime;
        this.logRequestQueue = [];
        this.isUploading = false;
        this.logVersion = "1";
        this.serialNumber = 1;
        this.batchTimer = null;
        this.maxQueueSize = 2000;
    },
    queueLogRequests: function (logRequests, traceId) {
        var _a;
        var _this = this;
        if (logRequests === void 0) { logRequests = []; }
        if (isSelfHosted)
            return;
        if (!logRequests.length)
            return;
        var availableSpace = this.maxQueueSize - this.logRequestQueue.length;
        if (availableSpace <= 0) {
            console.warn("Log queue full (".concat(this.logQueue.length, " items), dropping ").concat(logRequests.length, " new logs"));
            return;
        }
        var logsToAdd = logRequests.slice(0, availableSpace);
        (_a = this.logRequestQueue).push.apply(_a, __spreadArray([], __read(logsToAdd), false));
        if (!this.batchTimer) {
            this.batchTimer = setTimeout(function () {
                _this.batchTimer = null;
                _this.uploadNextBatch(traceId);
            }, this.batchWaitTime);
        }
    },
    uploadNextBatch: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, batch, error_10;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.isUploading;
                        if (_a) return [3, 2];
                        return [4, this.cannotMakeApiCall()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (_a || !this.logRequestQueue.length) {
                            return [2];
                        }
                        this.isUploading = true;
                        batch = this.logRequestQueue.splice(0, this.maxBatchSize);
                        this.addUploadMetaToLogRequests(batch);
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, 6, 7]);
                        return [4, this.uploadLogs(batch)];
                    case 4:
                        _c.sent();
                        return [3, 7];
                    case 5:
                        error_10 = _c.sent();
                        console.error("[".concat(traceId, "]Error uploading logs"), error_10);
                        (_b = this.logRequestQueue).unshift.apply(_b, __spreadArray([], __read(batch), false));
                        return [3, 7];
                    case 6:
                        this.isUploading = false;
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    addUploadMetaToLogRequests: function (logRequestBatch) {
        var e_15, _a;
        var _b;
        var nowISOString = new Date().toISOString();
        try {
            for (var logRequestBatch_1 = __values(logRequestBatch), logRequestBatch_1_1 = logRequestBatch_1.next(); !logRequestBatch_1_1.done; logRequestBatch_1_1 = logRequestBatch_1.next()) {
                var log = logRequestBatch_1_1.value;
                var isFirstAttempt = !log.firstUploadAttemptedAt;
                if (isFirstAttempt) {
                    log.firstUploadAttemptedAt = nowISOString;
                }
                else {
                    log.lastUploadAttemptedAt = nowISOString;
                }
                log.uploadAttemptCount = ((_b = log.uploadAttemptCount) !== null && _b !== void 0 ? _b : 0) + 1;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (logRequestBatch_1_1 && !logRequestBatch_1_1.done && (_a = logRequestBatch_1.return)) _a.call(logRequestBatch_1);
            }
            finally { if (e_15) throw e_15.error; }
        }
    },
    uploadLogs: function (logRequests) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, requestBody, requestBodyString, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!logRequests || logRequests.length === 0) {
                            return [2];
                        }
                        url = this.getLogsUrl();
                        headers = this.buildHeaders();
                        return [4, this.isDeviceOffline()];
                    case 1:
                        if (_a.sent()) {
                            throw new Error("No network connectivity");
                        }
                        requestBody = logRequests.map(this.generateLogBody);
                        requestBodyString = JSON.stringify(requestBody);
                        return [4, fetch(url, {
                                method: "POST",
                                headers: headers,
                                body: requestBodyString,
                            })];
                    case 2:
                        response = _a.sent();
                        if (!!response.ok) return [3, 4];
                        return [4, response.text().catch(function () { return "Could not read response body"; })];
                    case 3:
                        responseText = _a.sent();
                        throw new Error("Server responded with ".concat(response.status, ": ").concat(responseText));
                    case 4: return [2, response];
                }
            });
        });
    },
    getLogsUrl: function () {
        return "".concat(appObserverBaseUrl, "service/log/collect/").concat(enterpriseId);
    },
    buildHeaders: function () {
        return {
            "Content-Type": "application/json"
        };
    },
    canMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, hasConfigBaseUrl, hasAppApiKey, hasAppVersionName, hasUserId, hasSessionId, hasEnterpriseId, online, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = getCurrentUserId();
                        hasConfigBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
                        hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
                        hasAppVersionName = typeof appVersionName === 'string' && appVersionName.trim() !== '';
                        hasUserId = typeof userId === 'string' && userId.trim() !== '';
                        hasSessionId = typeof appSessionId === 'string' && appSessionId.trim() !== '';
                        hasEnterpriseId = typeof enterpriseId === 'string' && enterpriseId.trim() !== '';
                        return [4, this.isDeviceOnline()];
                    case 1:
                        online = _a.sent();
                        if (!(online && !hasEnterpriseId)) return [3, 3];
                        return [4, setEnterpriseId()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        status = hasConfigBaseUrl && hasAppApiKey && hasAppVersionName && hasUserId && hasSessionId && online && hasEnterpriseId;
                        console.warn("ObserverLogService.canMakeApiCall(): Sync status: ", status);
                        return [2, status];
                }
            });
        });
    },
    isDeviceOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, networkService.isReallyOnline()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    cannotMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.canMakeApiCall()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    isDeviceOffline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isDeviceOnline()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    wait: function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.uploadNextBatch(traceId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    generateLogBody: function (_a) {
        var _b = _a === void 0 ? {} : _a, message = _b.message, category = _b.category, _c = _b.properties, properties = _c === void 0 ? {} : _c, time = _b.time, timestamp = _b.timestamp, serialNumber = _b.serialNumber, userId = _b.userId, userSessionId = _b.userSessionId, _d = _b.level, level = _d === void 0 ? ObserverLogLevel.INFO : _d, inPreviewMode = _b.inPreviewMode, firstUploadAttemptedAt = _b.firstUploadAttemptedAt, lastUploadAttemptedAt = _b.lastUploadAttemptedAt, _e = _b.uploadAttemptCount, uploadAttemptCount = _e === void 0 ? 1 : _e, traceId = _b.traceId;
        var now = new Date();
        time = time || now;
        var uploadMeta = {
            firstAt: firstUploadAttemptedAt || now,
            lastAt: lastUploadAttemptedAt || LOG_API_REQUEST_NULL_STRING_VALUE,
            count: uploadAttemptCount || 1,
        };
        var finalProperties;
        try {
            finalProperties = typeof properties === 'string' || properties instanceof String
                ? properties
                : JSON.stringify(properties || {});
        }
        catch (e) {
            finalProperties = '"[Unserializable properties]"';
        }
        return {
            user: userId || LOG_API_REQUEST_NULL_STRING_VALUE,
            platform: "MOBILE",
            level: level,
            module: "MOBILE_JS_LOGS",
            message: message || LOG_API_REQUEST_NULL_STRING_VALUE,
            ent_id: enterpriseId || LOG_API_REQUEST_NULL_STRING_VALUE,
            org_id: wfOrgId || LOG_API_REQUEST_NULL_STRING_VALUE,
            unq_id: appSessionId || LOG_API_REQUEST_NULL_STRING_VALUE,
            on_id: "".concat(serialNumber || 0),
            message_id: generateUUID(),
            class_name: 'leap_sdk',
            method_name: category ? "eventCategory: ".concat(category) : LOG_API_REQUEST_NULL_STRING_VALUE,
            log_data: {
                "string.user_session_id": userSessionId || LOG_API_REQUEST_NULL_STRING_VALUE,
                "string.properties": finalProperties,
                "string.app_version": appVersionName || LOG_API_REQUEST_NULL_STRING_VALUE,
                "string.log_type": JS_OBSERVER_LOG_TYPE,
                "string.trace_id": traceId || LOG_API_REQUEST_NULL_STRING_VALUE,
                "string.time": time.toISOString(),
                "string.timestamp": "".concat(timestamp || Date.now()),
                "string.js_version": "".concat(jsVersionNumber || 0),
                "string.upload_meta": JSON.stringify(uploadMeta),
                "string.app_id": wfAppId || LOG_API_REQUEST_NULL_STRING_VALUE,
                "string.preview_mode": inPreviewMode ? "enabled" : "disabled",
                "string.sdk_version": String(coreSdkVersionCode),
            }
        };
    },
    sendObserverLog: function (_a) {
        var _b;
        var eventName = _a.eventName, category = _a.category, _c = _a.properties, properties = _c === void 0 ? {} : _c, _d = _a.userId, userId = _d === void 0 ? getCurrentUserId() : _d, _e = _a.time, time = _e === void 0 ? new Date() : _e, _f = _a.timestamp, timestamp = _f === void 0 ? Date.now() : _f, _g = _a.level, level = _g === void 0 ? ObserverLogLevel.INFO : _g, traceId = _a.traceId;
        try {
            var shouldSendLogs = forceSendObserverLogs || ((_b = loggerConfig === null || loggerConfig === void 0 ? void 0 : loggerConfig.log_types) === null || _b === void 0 ? void 0 : _b.includes(level));
            if (shouldSendLogs) {
                var logRequest = {
                    message: eventName,
                    category: category,
                    properties: properties,
                    time: time,
                    timestamp: timestamp,
                    serialNumber: this.serialNumber++,
                    userId: userId,
                    userSessionId: getUserSessionId(),
                    level: level,
                    inPreviewMode: inPreviewMode,
                    traceId: traceId
                };
                this.queueLogRequests([logRequest], traceId);
            }
        }
        catch (error) {
            console.error("sendObserverLog(): error while queuing log requests.", error);
        }
    }
};
function analyzeObserverLogPayloadSize(logRequest) {
    var logSize = JSON.stringify(logRequest).length;
    observerDataSize.numberOfEvents++;
    observerDataSize.totalSize += logSize;
    observerDataSize.avgSize = Math.round(observerDataSize.totalSize / observerDataSize.numberOfEvents);
    if (observerDataSize.keys.hasOwnProperty(logRequest.message)) {
        var data = observerDataSize.keys[logRequest.message];
        data.numberOfEvents++;
        data.totalSize += logSize;
        data.avgSize = Math.round(data.totalSize / data.numberOfEvents);
        if (data.maxSize < logSize) {
            data.maxSize = logSize;
            data.biggestPayload = logRequest;
        }
        observerDataSize.keys[logRequest.message] = data;
    }
    else {
        observerDataSize.keys[logRequest.message] = {
            avgSize: logSize,
            maxSize: logSize,
            totalSize: logSize,
            numberOfEvents: 1,
            biggestPayload: logRequest
        };
    }
    console.log('OBSERVER_LOG_ADDED', logSize, observerDataSize, logRequest);
}
function getErrorLogObjectFromError(error) {
    return {
        name: (error === null || error === void 0 ? void 0 : error.name) || "Error",
        message: (error === null || error === void 0 ? void 0 : error.message) || "No message",
        stack: (error === null || error === void 0 ? void 0 : error.stack) || "No stack trace available"
    };
}
function toMilliSeconds(seconds) {
    return seconds * 1000;
}
observerLogService.init();
var Queue = (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.isEmpty() ? null : this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.isEmpty() ? null : this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.print = function () {
    };
    return Queue;
}());
var userProfileService = {
    init: function () {
        this.userIds = new Queue();
        this.inProgress = new Set();
    },
    enqueueUpdate: function (userId, traceId) {
        this.userIds.enqueue({ userId: userId, traceId: traceId });
        this.startUserUpdateIfNeeded(userId, traceId);
    },
    startUserUpdateIfNeeded: function (userId) {
        if (!this.inProgress.has(userId)) {
            var queueItem = this.userIds.dequeue(userId);
            if (!sdkStateService.isStateSyncedForUserId(userId)) {
                this.startUserUpdate(userId, queueItem.traceId);
            }
        }
    },
    startUserUpdate: function (userId, traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var savedUserState, requestBody, success, latestUserState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.inProgress.add(userId);
                        return [4, this.cannotMakeApiCall()];
                    case 1:
                        if (_a.sent()) {
                            this.inProgress.delete(userId);
                            return [2];
                        }
                        savedUserState = sdkStateService.getUserStateById(userId);
                        if (isEmptyObject(savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.projectsStatus)) {
                            this.inProgress.delete(userId);
                            return [2];
                        }
                        if (!(savedUserState === null || savedUserState === void 0 ? void 0 : savedUserState.lastProfileUpdatedAt)) {
                            savedUserState.lastProfileUpdatedAt = new Date();
                            sdkStateService.persistState(traceId);
                        }
                        requestBody = !isEmptyObject(savedUserState.projectsStatus) ?
                            {
                                id: userId,
                                properties: {
                                    allProjectStatus: savedUserState.projectsStatus,
                                    completedFlowProjects: savedUserState.projectsCompletionStats,
                                    selectedLanguage: savedUserState.language,
                                },
                                updatedAt: savedUserState.lastProfileUpdatedAt
                            } : {};
                        return [4, this.tryUpload(userId, requestBody, traceId)];
                    case 2:
                        success = _a.sent();
                        if (success) {
                            latestUserState = sdkStateService.getUserStateById(userId);
                            latestUserState.lastProfileSyncedAt = savedUserState.lastProfileUpdatedAt;
                            sdkStateService.persistState(traceId);
                            this.inProgress.delete(userId);
                            this.startUserUpdateIfNeeded(userId);
                            return [2];
                        }
                        this.inProgress.delete(userId);
                        return [2];
                }
            });
        });
    },
    canMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasBaseUrl, hasAppApiKey, hasAppVersionName, online, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasBaseUrl = typeof configBaseUrl === 'string' && configBaseUrl.trim() !== '';
                        hasAppApiKey = typeof appApiKey === 'string' && appApiKey.trim() !== '';
                        hasAppVersionName = typeof appVersionName === 'string' && appApiKey.trim() !== '';
                        return [4, this.isDeviceOnline()];
                    case 1:
                        online = _a.sent();
                        status = hasBaseUrl && hasAppApiKey && hasAppVersionName && online;
                        console.warn("UserProfileService.canMakeApiCall(): Sync status: ", status);
                        return [2, status];
                }
            });
        });
    },
    isDeviceOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, networkService.isReallyOnline()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    cannotMakeApiCall: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.canMakeApiCall()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    isDeviceOffline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.isDeviceOnline()];
                    case 1: return [2, !(_a.sent())];
                }
            });
        });
    },
    tryUpload: function (userId, requestBody, traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBodyString, response, responseText, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        requestBodyString = JSON.stringify(requestBody);
                        sendObserverLogs({
                            category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                            event_name: OBSERVER_EVENTS.NETWORK.USER_PROFILE_UPDATE_STARTED,
                            userId: userId,
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                        return [4, fetch("".concat(configBaseUrl, "odin/api/v1/profile"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "x-jiny-client-id": appApiKey,
                                    "x-app-version-name": appVersionName,
                                    "x-leap-id": userId,
                                },
                                body: requestBodyString,
                            })];
                    case 1:
                        response = _a.sent();
                        sendObserverLogs({
                            category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                            event_name: OBSERVER_EVENTS.NETWORK.USER_PROFILE_UPDATE_FINISHED,
                            properties: {
                                status: response.status,
                            },
                            userId: userId,
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                        if (response.ok) {
                            return [2, true];
                        }
                        return [4, response.text().catch(function () { return "Could not read response body"; })];
                    case 2:
                        responseText = _a.sent();
                        return [3, 4];
                    case 3:
                        error_11 = _a.sent();
                        console.error("UserProfileService.tryUpload(): Network error for userId=".concat(userId), error_11);
                        sendObserverLogs({
                            category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                            event_name: OBSERVER_EVENTS.NETWORK.USER_PROFILE_UPDATE_FAILED,
                            properties: {
                                error: error_11,
                            },
                            userId: userId,
                            level: ObserverLogLevel.ERROR,
                        }, traceId);
                        return [3, 4];
                    case 4: return [2, false];
                }
            });
        });
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            var userIds, userIds_2, userIds_2_1, userId, e_16_1;
            var e_16, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userIds = sdkStateService.allUserIds;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        userIds_2 = __values(userIds), userIds_2_1 = userIds_2.next();
                        _b.label = 2;
                    case 2:
                        if (!!userIds_2_1.done) return [3, 5];
                        userId = userIds_2_1.value;
                        if (!!sdkStateService.isStateSyncedForUserId(userId)) return [3, 4];
                        return [4, this.enqueueUpdate(userId, traceId)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        userIds_2_1 = userIds_2.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_16_1 = _b.sent();
                        e_16 = { error: e_16_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (userIds_2_1 && !userIds_2_1.done && (_a = userIds_2.return)) _a.call(userIds_2);
                        }
                        finally { if (e_16) throw e_16.error; }
                        return [7];
                    case 8:
                        sdkStateService.cleanUpSyncedUserStates();
                        return [2];
                }
            });
        });
    },
};
userProfileService.init();
function setupGlobalErrorHandlers() {
    window.onerror = function (message, source, lineno, colno, error) {
        console.error('Unhandled JavaScript Error:', { message: message, source: source, lineno: lineno, colno: colno, error: error });
        if (!error) {
            error = new Error(message);
            error.stack = "at ".concat(source, ":").concat(lineno, ":").concat(colno);
        }
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            event_name: OBSERVER_EVENTS.ERROR.UNHANDLED_JS_ERROR,
            properties: {
                message: message,
                source: source,
                lineno: lineno,
                colno: colno,
                error: error
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
    };
    window.addEventListener('unhandledrejection', function (event) {
        console.error('Unhandled Promise Rejection:', { reason: event.reason });
        var error = event.reason;
        if (!(error instanceof Error)) {
            error = new Error(typeof error === 'string' ? error : JSON.stringify(error));
        }
        sendObserverLogs({
            category: OBSERVER_EVENT_CATEGORIES.ERROR,
            event_name: OBSERVER_EVENTS.ERROR.UNHANDLED_PROMISE_REJECTION_ERROR,
            properties: {
                error: error
            },
            level: ObserverLogLevel.ERROR,
        }, traceId);
    });
}
setupGlobalErrorHandlers();
var globalSchedulerService = {
    init: function (intervalMs) {
        if (intervalMs === void 0) { intervalMs = 180000; }
        this.intervalMs = intervalMs;
        this.shouldStop = false;
        this.isRunning = false;
        this.start();
    },
    start: function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isRunning)
                            return [2];
                        this.isRunning = true;
                        this.shouldStop = false;
                        _a.label = 1;
                    case 1:
                        if (!!this.shouldStop) return [3, 7];
                        console.log("GlobalSchedulerService.start(): Waiting ".concat(this.intervalMs, "ms"));
                        return [4, this.sleep(this.intervalMs)];
                    case 2:
                        _a.sent();
                        console.log("GlobalSchedulerService.start(): Starting flush cycle");
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.flushAll("GlobalSchedulerService:".concat(generateUUID()))];
                    case 4:
                        _a.sent();
                        return [3, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.error("GlobalSchedulerService.start(): Error during flushAll", err_1);
                        return [3, 6];
                    case 6:
                        console.log("GlobalSchedulerService.start(): Flush cycle complete");
                        return [3, 1];
                    case 7:
                        this.isRunning = false;
                        return [2];
                }
            });
        });
    },
    stop: function () {
        this.shouldStop = true;
    },
    flushAll: function (traceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, flushAllPendingOperations(traceId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    sleep: function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }
};
globalSchedulerService.init();
var isFlushAllExecuting = false;
var lastFlushedAllAt = 0;
var FLUSH_INTERVAL_MS = 30 * 1000;
function flushAllPendingOperations(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var now, timeLeft, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isSelfHosted)
                        return [2];
                    now = Date.now();
                    if (isFlushAllExecuting) {
                        console.log("[".concat(traceId, "] Skipping flush: already executing"));
                        return [2];
                    }
                    if (now - lastFlushedAllAt < FLUSH_INTERVAL_MS) {
                        timeLeft = Math.ceil((FLUSH_INTERVAL_MS - (now - lastFlushedAllAt)) / 1000);
                        console.log("[".concat(traceId, "] Skipping flush: last flush was ").concat(Math.floor((now - lastFlushedAllAt) / 1000), "s ago, must wait ").concat(timeLeft, "s more"));
                        return [2];
                    }
                    isFlushAllExecuting = true;
                    lastFlushedAllAt = now;
                    console.log("[".concat(traceId, "] Starting flush operations"));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Promise.all([
                            userProfileService.flushAll(traceId),
                            eventCollectorService.flushAll(traceId),
                            observerLogService.flushAll(traceId),
                            surveyAnalyticsService.flushAll(traceId)
                        ])];
                case 2:
                    _a.sent();
                    console.log("[".concat(traceId, "] All flush operations completed"));
                    return [3, 4];
                case 3:
                    error_12 = _a.sent();
                    console.error("[".concat(traceId, "] Error flushing pending requests"), error_12);
                    return [3, 4];
                case 4:
                    isFlushAllExecuting = false;
                    return [2];
            }
        });
    });
}
var networkService = {
    init: function () {
        this.handleOnline = this.handleOnline.bind(this);
        this.handleOffline = this.handleOffline.bind(this);
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
        console.log('networkService.init(): Event listeners for online/offline events initialized.');
    },
    handleOnline: function () {
        console.log('networkService.handleOnline(): Device is online, flushing pending requests.');
        flushAllPendingOperations("NetworkService:".concat(generateUUID()));
    },
    handleOffline: function () {
        console.log('networkService.handleOffline(): Device is offline.');
    },
    isReallyOnline: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (isSelfHosted) {
                    return [2, false];
                }
                return [2, typeof navigator !== "undefined" && navigator.onLine];
            });
        });
    }
};
networkService.init();
function setEnterpriseId() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(sdkStateService.entId && sdkStateService.wfAppId && sdkStateService.wfOrgId)) return [3, 1];
                    enterpriseId = sdkStateService.entId;
                    wfAppId = sdkStateService.wfAppId;
                    wfOrgId = sdkStateService.wfOrgId;
                    return [3, 3];
                case 1: return [4, fetchAndSetEnterpriseId()];
                case 2:
                    enterpriseId = _a.sent();
                    sdkStateService.entId = enterpriseId;
                    sdkStateService.wfAppId = wfAppId;
                    sdkStateService.wfOrgId = wfOrgId;
                    _a.label = 3;
                case 3:
                    sdkStateService.persistState(generateUUID());
                    return [2];
            }
        });
    });
}
function fetchAndSetEnterpriseId(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var enterpriseId, jsMetadataResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isSelfHosted) {
                        return [2, ""];
                    }
                    enterpriseId = "";
                    return [4, fetchObserverMetadata(traceId)];
                case 1:
                    jsMetadataResponse = _a.sent();
                    if (jsMetadataResponse !== null) {
                        enterpriseId = jsMetadataResponse === null || jsMetadataResponse === void 0 ? void 0 : jsMetadataResponse.entId;
                        wfAppId = jsMetadataResponse === null || jsMetadataResponse === void 0 ? void 0 : jsMetadataResponse.appId;
                        wfOrgId = jsMetadataResponse === null || jsMetadataResponse === void 0 ? void 0 : jsMetadataResponse.orgId;
                        jsMetadata = jsMetadataResponse;
                    }
                    return [2, enterpriseId];
            }
        });
    });
}
function fetchObserverMetadata(traceId) {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, jsModuleHeaders, moduleResponse, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseUrl = getBaseURLUsingAPIKey(configBaseUrl, appApiKey);
                    jsModuleHeaders = {
                        "X-Wf-ApiKey": appApiKey,
                        "Content-Type": "application/json",
                        "Allow-Control-Access-Origin": "*"
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log("fetchObserverMetadata(): Fetching observer metadata", { baseUrl: baseUrl, appApiKey: appApiKey });
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                        event_name: OBSERVER_EVENTS.NETWORK.FETCH_OBSERVER_METADATA_STARTED,
                        level: ObserverLogLevel.DEBUG,
                    }, traceId);
                    return [4, fetch("".concat(baseUrl, "odin/api/v1/js-metadata"), {
                            method: "GET",
                            headers: jsModuleHeaders,
                        })];
                case 2:
                    moduleResponse = _a.sent();
                    if (!moduleResponse.ok) {
                        sendObserverLogs({
                            category: OBSERVER_EVENT_CATEGORIES.NETWORK,
                            event_name: OBSERVER_EVENTS.NETWORK.FETCH_OBSERVER_METADATA_FAILED,
                            properties: {
                                baseUrl: baseUrl,
                                status: moduleResponse.status
                            },
                            level: ObserverLogLevel.DEBUG,
                        }, traceId);
                        return [2, null];
                    }
                    return [4, moduleResponse.json()];
                case 3: return [2, _a.sent()];
                case 4:
                    error_13 = _a.sent();
                    console.error("fetchObserverMetadata(): unable to fetch observer metadata", error_13);
                    sendObserverLogs({
                        category: OBSERVER_EVENT_CATEGORIES.ERROR,
                        event_name: OBSERVER_EVENTS.ERROR.FETCH_OBSERVER_METADATA_ERROR,
                        properties: {
                            baseUrl: baseUrl,
                            error: error_13
                        },
                        level: ObserverLogLevel.ERROR,
                    }, traceId);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
function getBaseURLUsingAPIKey(baseUrl, apiKey) {
    var metadataEndpoint = "https://leap-api-in.whatfix.com/";
    if ((apiKey === null || apiKey === void 0 ? void 0 : apiKey.substring(0, 4)) === "eus:") {
        metadataEndpoint = "https://leap-api-eus.whatfix.com/";
    }
    else if ((apiKey === null || apiKey === void 0 ? void 0 : apiKey.substring(0, 3)) === "eu:") {
        metadataEndpoint = "https://leap-api-eu.whatfix.com/";
    }
    else if (baseUrl === null || baseUrl === void 0 ? void 0 : baseUrl.includes("quickolabs.com")) {
        metadataEndpoint = baseUrl;
    }
    return metadataEndpoint;
}
window.receiveDataFromNativeLayer = receiveDataFromNativeLayer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "mobile-js-core";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(104);
/******/ 	
/******/ })()
;