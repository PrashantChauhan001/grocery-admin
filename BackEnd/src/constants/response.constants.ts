const INFO_CODES = {
  100: { code: 100, message: 'Continue: The server has received the request headers, and the client should proceed to send the request body.' },
  101: { code: 101, message: 'Switching Protocols: The requester has asked the server to switch protocols.' },
  102: { code: 102, message: 'Processing: The server has received and is processing the request, but no response is available yet.' },
  103: { code: 103, message: 'Early Hints: Used to return some response headers before the final response.' },
};
const SUCCESS_CODES = {
  200: { code: 200, message: 'OK: The request has succeeded.' },
  201: { code: 201, message: 'Created: The request has been fulfilled and a new resource has been created.' },
  202: { code: 202, message: 'Accepted: The request has been accepted for processing, but not completed yet.' },
  203: { code: 203, message: 'Non-Authoritative Information: The returned meta-information is from a local or third-party copy.' },
  204: { code: 204, message: 'No Content: The server successfully processed the request, but no content is returned.' },
  205: { code: 205, message: 'Reset Content: The server processed the request and asks the client to reset its view.' },
  206: { code: 206, message: 'Partial Content: The server is delivering only part of the resource due to a range header.' },
  207: { code: 207, message: 'Multi-Status: Provides multiple status codes for different parts of a multi-part response.' },
  208: { code: 208, message: 'Already Reported: The members of a DAV binding have already been enumerated.' },
  226: { code: 226, message: 'IM Used: The server has fulfilled a GET request using instance-manipulations.' },
};
const REDIRECTION_CODES = {
  300: { code: 300, message: 'Multiple Choices: The request has more than one possible response.' },
  301: { code: 301, message: 'Moved Permanently: The resource has been moved to a new URL permanently.' },
  302: { code: 302, message: 'Found: The resource resides temporarily under a different URL.' },
  303: { code: 303, message: 'See Other: The response can be found under another URI using GET.' },
  304: { code: 304, message: 'Not Modified: The resource has not been modified since the last request.' },
  305: { code: 305, message: 'Use Proxy: The requested resource must be accessed through a proxy (deprecated).' },
  307: { code: 307, message: 'Temporary Redirect: The resource is temporarily under a different URI.' },
  308: { code: 308, message: 'Permanent Redirect: The resource has been permanently moved to a new URI.' },
};
const CLIENT_ERROR_CODES = {
  400: { code: 400, message: 'Bad Request: The server could not understand the request due to invalid syntax.' },
  401: { code: 401, message: 'Unauthorized: Authentication is required or has failed.' },
  402: { code: 402, message: 'Payment Required: Reserved for future use (used by some APIs for payment-related errors).' },
  403: { code: 403, message: 'Forbidden: The client does not have permission to access the resource.' },
  404: { code: 404, message: 'Not Found: The requested resource could not be found.' },
  405: { code: 405, message: 'Method Not Allowed: The HTTP method is not allowed for the resource.' },
  406: { code: 406, message: 'Not Acceptable: The server cannot produce a response matching the request headers.' },
  407: { code: 407, message: 'Proxy Authentication Required: Authentication with the proxy is required.' },
  408: { code: 408, message: 'Request Timeout: The client did not send a request in the time the server expected.' },
  409: { code: 409, message: 'Conflict: The request conflicts with the current state of the resource.' },
  410: { code: 410, message: 'Gone: The resource requested is no longer available and will not be available again.' },
  411: { code: 411, message: 'Length Required: The server requires a Content-Length header.' },
  412: { code: 412, message: 'Precondition Failed: One or more conditions in the request header fields failed.' },
  413: { code: 413, message: 'Payload Too Large: The request body is too large.' },
  414: { code: 414, message: 'URI Too Long: The request URI is too long for the server to process.' },
  415: { code: 415, message: 'Unsupported Media Type: The request entity has a media type not supported by the server.' },
  416: { code: 416, message: 'Range Not Satisfiable: The range specified in the request cannot be fulfilled.' },
  417: { code: 417, message: 'Expectation Failed: The expectation given in the request header could not be met.' },
  418: { code: 418, message: "I'm a Teapot: A playful status code defined in RFC 2324 (not expected to be implemented)." },
  421: { code: 421, message: 'Misdirected Request: The request was directed at a server that cannot produce a response.' },
  422: { code: 422, message: 'Unprocessable Entity: The request is well-formed but cannot be processed.' },
  423: { code: 423, message: 'Locked: The resource being accessed is locked.' },
  424: { code: 424, message: 'Failed Dependency: The request failed due to failure of a previous request.' },
  425: { code: 425, message: 'Too Early: The server is unwilling to risk processing a request that might be replayed.' },
  426: { code: 426, message: 'Upgrade Required: The client should switch to a different protocol.' },
  428: { code: 428, message: 'Precondition Required: The origin server requires the request to be conditional.' },
  429: { code: 429, message: 'Too Many Requests: The user has sent too many requests in a given amount of time.' },
  431: { code: 431, message: 'Request Header Fields Too Large: The request’s header fields are too large.' },
  451: { code: 451, message: 'Unavailable For Legal Reasons: The resource is unavailable due to legal demands.' },
};
const SERVER_ERROR_CODES = {
  500: { code: 500, message: 'Internal Server Error: The server encountered an unexpected condition.' },
  501: { code: 501, message: 'Not Implemented: The server does not support the functionality required.' },
  502: { code: 502, message: 'Bad Gateway: The server received an invalid response from an upstream server.' },
  503: { code: 503, message: 'Service Unavailable: The server is currently unavailable (overloaded or down).' },
  504: { code: 504, message: 'Gateway Timeout: The server did not receive a timely response from the upstream server.' },
  505: { code: 505, message: 'HTTP Version Not Supported: The server does not support the HTTP protocol version.' },
  506: { code: 506, message: 'Variant Also Negotiates: Transparent content negotiation resulted in a circular reference.' },
  507: { code: 507, message: 'Insufficient Storage: The server is unable to store the representation needed.' },
  508: { code: 508, message: 'Loop Detected: The server detected an infinite loop while processing a request.' },
  510: { code: 510, message: 'Not Extended: Further extensions to the request are required for the server to fulfill it.' },
  511: { code: 511, message: 'Network Authentication Required: The client needs to authenticate to gain network access.' },
};

const RESPONSE_CODES = {
  // 1xx: Informational
  ...INFO_CODES,

  // 2xx: Success
  ...SUCCESS_CODES,

  // 3xx: Redirection
  ...REDIRECTION_CODES,

  // 4xx: Client Error
  ...CLIENT_ERROR_CODES,

  // 5xx: Server Error
  ...SERVER_ERROR_CODES,
};

export default RESPONSE_CODES;
