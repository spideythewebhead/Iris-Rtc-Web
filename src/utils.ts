import {
  ChannelMediaRelayError,
  ChannelMediaRelayEvent,
  ChannelMediaRelayState,
  ConnectionDisconnectedReason,
  ConnectionState,
} from 'agora-rtc-sdk-ng';
import {
  CHANNEL_MEDIA_RELAY_ERROR,
  CHANNEL_MEDIA_RELAY_EVENT,
  CHANNEL_MEDIA_RELAY_STATE,
  CONNECTION_CHANGED_REASON_TYPE,
  CONNECTION_STATE_TYPE,
  INJECT_STREAM_STATUS,
  QUALITY_TYPE,
  RTMP_STREAM_PUBLISH_ERROR,
  USER_OFFLINE_REASON_TYPE,
} from './types.native';

export function printf(tag: string, ...params: any[]) {
  console.log('agora-iris', tag, ...params);
}

export function ConnectionStateToNative(
  state?: ConnectionState
): CONNECTION_STATE_TYPE {
  switch (state) {
    case 'DISCONNECTED':
      return CONNECTION_STATE_TYPE.CONNECTION_STATE_DISCONNECTED;
    case 'CONNECTING':
      return CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTING;
    case 'RECONNECTING':
      return CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING;
    case 'CONNECTED':
      return CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED;
    case 'DISCONNECTING':
    default:
      return CONNECTION_STATE_TYPE.CONNECTION_STATE_DISCONNECTED;
  }
}

export function ConnectionDisconnectedReasonToNative(
  reason?: ConnectionDisconnectedReason
): CONNECTION_CHANGED_REASON_TYPE {
  switch (reason) {
    case ConnectionDisconnectedReason.LEAVE:
      return CONNECTION_CHANGED_REASON_TYPE.CONNECTION_CHANGED_LEAVE_CHANNEL;
    case ConnectionDisconnectedReason.NETWORK_ERROR:
    case ConnectionDisconnectedReason.SERVER_ERROR:
      return CONNECTION_CHANGED_REASON_TYPE.CONNECTION_CHANGED_INTERRUPTED;
    case ConnectionDisconnectedReason.UID_BANNED:
      return CONNECTION_CHANGED_REASON_TYPE.CONNECTION_CHANGED_REJECTED_BY_SERVER;
    case ConnectionDisconnectedReason.IP_BANNED:
    case ConnectionDisconnectedReason.CHANNEL_BANNED:
      return CONNECTION_CHANGED_REASON_TYPE.CONNECTION_CHANGED_BANNED_BY_SERVER;
    default:
      return CONNECTION_CHANGED_REASON_TYPE.CONNECTION_CHANGED_JOIN_SUCCESS;
  }
}

export function UserLeftReasonToNative(
  reason?: string
): USER_OFFLINE_REASON_TYPE {
  switch (reason) {
    case 'Quit':
      return USER_OFFLINE_REASON_TYPE.USER_OFFLINE_QUIT;
    case 'ServerTimeOut':
      return USER_OFFLINE_REASON_TYPE.USER_OFFLINE_DROPPED;
    case 'BecomeAudience':
      return USER_OFFLINE_REASON_TYPE.USER_OFFLINE_BECOME_AUDIENCE;
    default:
      return USER_OFFLINE_REASON_TYPE.USER_OFFLINE_QUIT;
  }
}

export function NetworkQualityToNative(
  quality: 0 | 1 | 2 | 3 | 4 | 5 | 6
): QUALITY_TYPE {
  switch (quality) {
    case 0:
      return QUALITY_TYPE.QUALITY_UNKNOWN;
    case 1:
      return QUALITY_TYPE.QUALITY_EXCELLENT;
    case 2:
      return QUALITY_TYPE.QUALITY_GOOD;
    case 3:
      return QUALITY_TYPE.QUALITY_POOR;
    case 4:
      return QUALITY_TYPE.QUALITY_BAD;
    case 5:
      return QUALITY_TYPE.QUALITY_VBAD;
    case 6:
      return QUALITY_TYPE.QUALITY_DOWN;
  }
}

export function RtmpStreamingErrorToNative(
  code: string
): RTMP_STREAM_PUBLISH_ERROR {
  switch (code) {
    case 'LIVE_STREAMING_INVALID_ARGUMENT':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT;
    case 'LIVE_STREAMING_INTERNAL_SERVER_ERROR':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR;
    case 'LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED;
    case 'LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED;
    case 'LIVE_STREAMING_CDN_ERROR':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR;
    case 'LIVE_STREAMING_INVALID_RAW_STREAM':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT;
    case 'LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT;
    case 'LIVE_STREAMING_WARN_FREQUENT_REQUEST':
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN;
    default:
      return RTMP_STREAM_PUBLISH_ERROR.RTMP_STREAM_PUBLISH_ERROR_OK;
  }
}

export function InjectStreamEventStatusToNative(
  status: number
): INJECT_STREAM_STATUS {
  switch (status) {
    case 0:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_SUCCESS;
    case 1:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_ALREADY_EXISTS;
    case 2:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_UNAUTHORIZED;
    case 3:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_TIMEDOUT;
    case 4:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_FAILED;
    case 5:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_STOP_SUCCESS;
    case 6:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_STOP_NOT_FOUND;
    case 7:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_STOP_UNAUTHORIZED;
    case 8:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_STOP_TIMEDOUT;
    case 9:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_STOP_FAILED;
    case 10:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_BROKEN;
    default:
      return INJECT_STREAM_STATUS.INJECT_STREAM_STATUS_START_UNAUTHORIZED;
  }
}

export function ChannelMediaRelayStateToNative(
  state: ChannelMediaRelayState
): CHANNEL_MEDIA_RELAY_STATE {
  switch (state) {
    case ChannelMediaRelayState.RELAY_STATE_IDLE:
      return CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE;
    case ChannelMediaRelayState.RELAY_STATE_CONNECTING:
      return CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_CONNECTING;
    case ChannelMediaRelayState.RELAY_STATE_RUNNING:
      return CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING;
    case ChannelMediaRelayState.RELAY_STATE_FAILURE:
      return CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE;
  }
}

export function ChannelMediaRelayErrorToNative(
  error: ChannelMediaRelayError
): CHANNEL_MEDIA_RELAY_ERROR {
  switch (error) {
    case ChannelMediaRelayError.RELAY_OK:
      return CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK;
    case ChannelMediaRelayError.SERVER_CONNECTION_LOST:
      return CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_CONNECTION_LOST;
    case ChannelMediaRelayError.SRC_TOKEN_EXPIRED:
      return CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SRC_TOKEN_EXPIRED;
    case ChannelMediaRelayError.DEST_TOKEN_EXPIRED:
      return CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_DEST_TOKEN_EXPIRED;
  }
}

export function ChannelMediaRelayEventToNative(
  event: ChannelMediaRelayEvent
): CHANNEL_MEDIA_RELAY_EVENT {
  switch (event) {
    case ChannelMediaRelayEvent.NETWORK_DISCONNECTED:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_NETWORK_DISCONNECTED;
    case ChannelMediaRelayEvent.NETWORK_CONNECTED:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_NETWORK_CONNECTED;
    case ChannelMediaRelayEvent.PACKET_JOINED_SRC_CHANNEL:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL;
    case ChannelMediaRelayEvent.PACKET_JOINED_DEST_CHANNEL:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL;
    case ChannelMediaRelayEvent.PACKET_SENT_TO_DEST_CHANNEL:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL;
    case ChannelMediaRelayEvent.PACKET_RECEIVED_VIDEO_FROM_SRC:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC;
    case ChannelMediaRelayEvent.PACKET_RECEIVED_AUDIO_FROM_SRC:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC;
    case ChannelMediaRelayEvent.PACKET_UPDATE_DEST_CHANNEL:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL;
    case ChannelMediaRelayEvent.PACKET_UPDATE_DEST_CHANNEL_REFUSED:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED;
    case ChannelMediaRelayEvent.PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE:
      return CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE;
  }
}

export class Completer<T> {
  constructor() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  private _promise: Promise<T>;
  private _resolve: (value: T | PromiseLike<T>) => void;
  private _reject: (reason?: any) => void;

  get promise() {
    return this._promise;
  }

  complete(value: T | PromiseLike<T>) {
    this._resolve(value);
  }

  completeError(reason?: any) {
    this._reject(reason);
  }
}
