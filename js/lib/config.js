/*!
 * Webogram v0.5.7.1 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

Config = window.Config || {}

/*

 IMPORTANT NOTICE
 ================

 Do not publish your Webogram fork with my app credentials (below), or your application may be blocked.
 You can get your own api_id, api_hash at https://my.telegram.org, see manual at https://core.telegram.org/api/obtaining_api_id.

 */

Config.App = {
    id: 2496,
    hash: '8da85b0d5bfe62527e5b244c209159c3',
    version: '0.5.7.1',
    domains: ['web.telegram.org', 'zhukov.github.io']
}

Config.Modes = {
    test: location.search.indexOf('test=1') > 0,
    debug: location.search.indexOf('debug=1') > 0,
    http: location.search.indexOf('http=1') > 0,
    ssl: location.search.indexOf('ssl=1') > 0 || location.protocol == 'https:' && location.search.indexOf('ssl=0') == -1,
    force_mobile: location.search.indexOf('mobile=1') > 0,
    force_desktop: location.search.indexOf('desktop=1') > 0,
    nacl: location.search.indexOf('nacl=0') == -1,
    webcrypto: location.search.indexOf('webcrypto=0') == -1,
    packed: location.protocol == 'app:' || location.protocol == 'chrome-extension:',
    ios_standalone: window.navigator.standalone && navigator.userAgent.match(/iOS|iPhone|iPad/),
    chrome_packed: window.chrome && chrome.app && chrome.app.window && true || false,
    animations: true,
    memory_only: false,
    allow_tmpfs: location.search.indexOf('tmpfs=yeahImSureIknowWhatImDoing') > 0 || false,
    push_api: location.search.indexOf('push=1') == -1
}

Config.Navigator = {
    osX: (navigator.platform || '').toLowerCase().indexOf('mac') != -1 ||
    (navigator.userAgent || '').toLowerCase().indexOf('mac') != -1,
    msie: (navigator.userAgent || '').search(/MSIE | Trident\/|Edge\//) != -1,
    retina: window.devicePixelRatio > 1,
    ffos: navigator.userAgent.search(/mobi.+Gecko/i) != -1,
    ffos2p: navigator.userAgent.search(/mobi.+Gecko\/[34567]/i) != -1,
    touch: screen.width <= 768 || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    mobile: screen.width && screen.width < 480 || navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1
}

// Touch detect: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

Config.I18n = {
    locale: 'en-us',
    supported: [
        'en-us'
        , 'es-es'
        , 'de-de'
        , 'it-it'
        , 'nl-nl'
        , 'pt-br'
        // ,"ru-ru"
    ], // To be copied to package.json
    languages: {
        'en-us': 'English',
        'de-de': 'Deutsch',
        'es-es': 'Español',
        'it-it': 'Italiano',
        'ru-ru': 'Русский',
        'nl-nl': 'Nederlands',
        'pt-br': 'Português (Brazil)'
    },
    aliases: {
        'en': 'en-us',
        'de': 'de-de',
        'es': 'es-es',
        'it': 'it-it',
        'ru': 'ru-ru',
        'nl': 'nl-nl'
    },
    messages: {},
    fallback_messages: {}
}

Config.ExtCredentials = {
    gmaps: {
        api_key: 'AIzaSyC72t5GDcP-dob20d-ARwSwOQ41-zgbArg'
    }
}

Config.Schema = Config.Schema || {}

Config.Schema.MTProto = {
    'constructors': [{
        'id': '481674261',
        'predicate': 'vector',
        'params': [],
        'type': 'Vector t'
    }, {
        'id': '85337187',
        'predicate': 'resPQ',
        'params': [{'name': 'nonce', 'type': 'int128'}, {'name': 'server_nonce', 'type': 'int128'}, {
            'name': 'pq',
            'type': 'bytes'
        }, {'name': 'server_public_key_fingerprints', 'type': 'Vector<long>'}],
        'type': 'ResPQ'
    }, {
        'id': '-2083955988',
        'predicate': 'p_q_inner_data',
        'params': [{'name': 'pq', 'type': 'bytes'}, {'name': 'p', 'type': 'bytes'}, {
            'name': 'q',
            'type': 'bytes'
        }, {'name': 'nonce', 'type': 'int128'}, {'name': 'server_nonce', 'type': 'int128'}, {
            'name': 'new_nonce',
            'type': 'int256'
        }],
        'type': 'P_Q_inner_data'
    }, {
        'id': '2043348061',
        'predicate': 'server_DH_params_fail',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'new_nonce_hash', 'type': 'int128'}],
        'type': 'Server_DH_Params'
    }, {
        'id': '-790100132',
        'predicate': 'server_DH_params_ok',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'encrypted_answer', 'type': 'bytes'}],
        'type': 'Server_DH_Params'
    }, {
        'id': '-1249309254',
        'predicate': 'server_DH_inner_data',
        'params': [{'name': 'nonce', 'type': 'int128'}, {'name': 'server_nonce', 'type': 'int128'}, {
            'name': 'g',
            'type': 'int'
        }, {'name': 'dh_prime', 'type': 'bytes'}, {'name': 'g_a', 'type': 'bytes'}, {
            'name': 'server_time',
            'type': 'int'
        }],
        'type': 'Server_DH_inner_data'
    }, {
        'id': '1715713620',
        'predicate': 'client_DH_inner_data',
        'params': [{'name': 'nonce', 'type': 'int128'}, {'name': 'server_nonce', 'type': 'int128'}, {
            'name': 'retry_id',
            'type': 'long'
        }, {'name': 'g_b', 'type': 'bytes'}],
        'type': 'Client_DH_Inner_Data'
    }, {
        'id': '1003222836',
        'predicate': 'dh_gen_ok',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'new_nonce_hash1', 'type': 'int128'}],
        'type': 'Set_client_DH_params_answer'
    }, {
        'id': '1188831161',
        'predicate': 'dh_gen_retry',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'new_nonce_hash2', 'type': 'int128'}],
        'type': 'Set_client_DH_params_answer'
    }, {
        'id': '-1499615742',
        'predicate': 'dh_gen_fail',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'new_nonce_hash3', 'type': 'int128'}],
        'type': 'Set_client_DH_params_answer'
    }, {
        'id': '-212046591',
        'predicate': 'rpc_result',
        'params': [{'name': 'req_msg_id', 'type': 'long'}, {'name': 'result', 'type': 'Object'}],
        'type': 'RpcResult'
    }, {
        'id': '558156313',
        'predicate': 'rpc_error',
        'params': [{'name': 'error_code', 'type': 'int'}, {'name': 'error_message', 'type': 'string'}],
        'type': 'RpcError'
    }, {'id': '1579864942', 'predicate': 'rpc_answer_unknown', 'params': [], 'type': 'RpcDropAnswer'}, {
        'id': '-847714938',
        'predicate': 'rpc_answer_dropped_running',
        'params': [],
        'type': 'RpcDropAnswer'
    }, {
        'id': '-1539647305',
        'predicate': 'rpc_answer_dropped',
        'params': [{'name': 'msg_id', 'type': 'long'}, {'name': 'seq_no', 'type': 'int'}, {
            'name': 'bytes',
            'type': 'int'
        }],
        'type': 'RpcDropAnswer'
    }, {
        'id': '155834844',
        'predicate': 'future_salt',
        'params': [{'name': 'valid_since', 'type': 'int'}, {'name': 'valid_until', 'type': 'int'}, {
            'name': 'salt',
            'type': 'long'
        }],
        'type': 'FutureSalt'
    }, {
        'id': '-1370486635',
        'predicate': 'future_salts',
        'params': [{'name': 'req_msg_id', 'type': 'long'}, {'name': 'now', 'type': 'int'}, {
            'name': 'salts',
            'type': 'vector<future_salt>'
        }],
        'type': 'FutureSalts'
    }, {
        'id': '880243653',
        'predicate': 'pong',
        'params': [{'name': 'msg_id', 'type': 'long'}, {'name': 'ping_id', 'type': 'long'}],
        'type': 'Pong'
    }, {
        'id': '-501201412',
        'predicate': 'destroy_session_ok',
        'params': [{'name': 'session_id', 'type': 'long'}],
        'type': 'DestroySessionRes'
    }, {
        'id': '1658015945',
        'predicate': 'destroy_session_none',
        'params': [{'name': 'session_id', 'type': 'long'}],
        'type': 'DestroySessionRes'
    }, {
        'id': '-1631450872',
        'predicate': 'new_session_created',
        'params': [{'name': 'first_msg_id', 'type': 'long'}, {'name': 'unique_id', 'type': 'long'}, {
            'name': 'server_salt',
            'type': 'long'
        }],
        'type': 'NewSession'
    }, {
        'id': '1945237724',
        'predicate': 'msg_container',
        'params': [{'name': 'messages', 'type': 'vector<%Message>'}],
        'type': 'MessageContainer'
    }, {
        'id': '1538843921',
        'predicate': 'message',
        'params': [{'name': 'msg_id', 'type': 'long'}, {'name': 'seqno', 'type': 'int'}, {
            'name': 'bytes',
            'type': 'int'
        }, {'name': 'body', 'type': 'Object'}],
        'type': 'Message'
    }, {
        'id': '-530561358',
        'predicate': 'msg_copy',
        'params': [{'name': 'orig_message', 'type': 'Message'}],
        'type': 'MessageCopy'
    }, {
        'id': '812830625',
        'predicate': 'gzip_packed',
        'params': [{'name': 'packed_data', 'type': 'bytes'}],
        'type': 'Object'
    }, {
        'id': '1658238041',
        'predicate': 'msgs_ack',
        'params': [{'name': 'msg_ids', 'type': 'Vector<long>'}],
        'type': 'MsgsAck'
    }, {
        'id': '-1477445615',
        'predicate': 'bad_msg_notification',
        'params': [{'name': 'bad_msg_id', 'type': 'long'}, {'name': 'bad_msg_seqno', 'type': 'int'}, {
            'name': 'error_code',
            'type': 'int'
        }],
        'type': 'BadMsgNotification'
    }, {
        'id': '-307542917',
        'predicate': 'bad_server_salt',
        'params': [{'name': 'bad_msg_id', 'type': 'long'}, {'name': 'bad_msg_seqno', 'type': 'int'}, {
            'name': 'error_code',
            'type': 'int'
        }, {'name': 'new_server_salt', 'type': 'long'}],
        'type': 'BadMsgNotification'
    }, {
        'id': '2105940488',
        'predicate': 'msg_resend_req',
        'params': [{'name': 'msg_ids', 'type': 'Vector<long>'}],
        'type': 'MsgResendReq'
    }, {
        'id': '-630588590',
        'predicate': 'msgs_state_req',
        'params': [{'name': 'msg_ids', 'type': 'Vector<long>'}],
        'type': 'MsgsStateReq'
    }, {
        'id': '81704317',
        'predicate': 'msgs_state_info',
        'params': [{'name': 'req_msg_id', 'type': 'long'}, {'name': 'info', 'type': 'bytes'}],
        'type': 'MsgsStateInfo'
    }, {
        'id': '-1933520591',
        'predicate': 'msgs_all_info',
        'params': [{'name': 'msg_ids', 'type': 'Vector<long>'}, {'name': 'info', 'type': 'bytes'}],
        'type': 'MsgsAllInfo'
    }, {
        'id': '661470918',
        'predicate': 'msg_detailed_info',
        'params': [{'name': 'msg_id', 'type': 'long'}, {'name': 'answer_msg_id', 'type': 'long'}, {
            'name': 'bytes',
            'type': 'int'
        }, {'name': 'status', 'type': 'int'}],
        'type': 'MsgDetailedInfo'
    }, {
        'id': '-2137147681',
        'predicate': 'msg_new_detailed_info',
        'params': [{'name': 'answer_msg_id', 'type': 'long'}, {'name': 'bytes', 'type': 'int'}, {
            'name': 'status',
            'type': 'int'
        }],
        'type': 'MsgDetailedInfo'
    }],
    'methods': [{
        'id': '1615239032',
        'method': 'req_pq',
        'params': [{'name': 'nonce', 'type': 'int128'}],
        'type': 'ResPQ'
    }, {
        'id': '-686627650',
        'method': 'req_DH_params',
        'params': [{'name': 'nonce', 'type': 'int128'}, {'name': 'server_nonce', 'type': 'int128'}, {
            'name': 'p',
            'type': 'bytes'
        }, {'name': 'q', 'type': 'bytes'}, {
            'name': 'public_key_fingerprint',
            'type': 'long'
        }, {'name': 'encrypted_data', 'type': 'bytes'}],
        'type': 'Server_DH_Params'
    }, {
        'id': '-184262881',
        'method': 'set_client_DH_params',
        'params': [{'name': 'nonce', 'type': 'int128'}, {
            'name': 'server_nonce',
            'type': 'int128'
        }, {'name': 'encrypted_data', 'type': 'bytes'}],
        'type': 'Set_client_DH_params_answer'
    }, {
        'id': '1491380032',
        'method': 'rpc_drop_answer',
        'params': [{'name': 'req_msg_id', 'type': 'long'}],
        'type': 'RpcDropAnswer'
    }, {
        'id': '-1188971260',
        'method': 'get_future_salts',
        'params': [{'name': 'num', 'type': 'int'}],
        'type': 'FutureSalts'
    }, {
        'id': '2059302892',
        'method': 'ping',
        'params': [{'name': 'ping_id', 'type': 'long'}],
        'type': 'Pong'
    }, {
        'id': '-213746804',
        'method': 'ping_delay_disconnect',
        'params': [{'name': 'ping_id', 'type': 'long'}, {'name': 'disconnect_delay', 'type': 'int'}],
        'type': 'Pong'
    }, {
        'id': '-414113498',
        'method': 'destroy_session',
        'params': [{'name': 'session_id', 'type': 'long'}],
        'type': 'DestroySessionRes'
    }, {
        'id': '-1835453025',
        'method': 'http_wait',
        'params': [{'name': 'max_delay', 'type': 'int'}, {'name': 'wait_after', 'type': 'int'}, {
            'name': 'max_wait',
            'type': 'int'
        }],
        'type': 'HttpWait'
    }]
}

// From https://github.com/stephenmathieson/node-tlds/blob/master/index.js
Config.TLD = ['abogado', 'ac', 'academy', 'accountants', 'active', 'actor', 'ad', 'adult', 'ae', 'aero', 'af', 'ag', 'agency', 'ai', 'airforce', 'al', 'allfinanz', 'alsace', 'am', 'amsterdam', 'an', 'android', 'ao', 'apartments', 'aq', 'aquarelle', 'ar', 'archi', 'army', 'arpa', 'as', 'asia', 'associates', 'at', 'attorney', 'au', 'auction', 'audio', 'autos', 'aw', 'ax', 'axa', 'az', 'ba', 'band', 'bank', 'bar', 'barclaycard', 'barclays', 'bargains', 'bayern', 'bb', 'bd', 'be', 'beer', 'berlin', 'best', 'bf', 'bg', 'bh', 'bi', 'bid', 'bike', 'bingo', 'bio', 'biz', 'bj', 'black', 'blackfriday', 'bloomberg', 'blue', 'bm', 'bmw', 'bn', 'bnpparibas', 'bo', 'boo', 'boutique', 'br', 'brussels', 'bs', 'bt', 'budapest', 'build', 'builders', 'business', 'buzz', 'bv', 'bw', 'by', 'bz', 'bzh', 'ca', 'cab', 'cal', 'camera', 'camp', 'cancerresearch', 'canon', 'capetown', 'capital', 'caravan', 'cards', 'care', 'career', 'careers', 'cartier', 'casa', 'cash', 'cat', 'catering', 'cc', 'cd', 'center', 'ceo', 'cern', 'cf', 'cg', 'ch', 'channel', 'chat', 'cheap', 'christmas', 'chrome', 'church', 'ci', 'citic', 'city', 'ck', 'cl', 'claims', 'cleaning', 'click', 'clinic', 'clothing', 'club', 'cm', 'cn', 'co', 'coach', 'codes', 'coffee', 'college', 'cologne', 'com', 'community', 'company', 'computer', 'condos', 'construction', 'consulting', 'contractors', 'cooking', 'cool', 'coop', 'country', 'cr', 'credit', 'creditcard', 'cricket', 'crs', 'cruises', 'cu', 'cuisinella', 'cv', 'cw', 'cx', 'cy', 'cymru', 'cz', 'dabur', 'dad', 'dance', 'dating', 'day', 'dclk', 'de', 'deals', 'degree', 'delivery', 'democrat', 'dental', 'dentist', 'desi', 'design', 'dev', 'diamonds', 'diet', 'digital', 'direct', 'directory', 'discount', 'dj', 'dk', 'dm', 'dnp', 'do', 'docs', 'domains', 'doosan', 'durban', 'dvag', 'dz', 'eat', 'ec', 'edu', 'education', 'ee', 'eg', 'email', 'emerck', 'energy', 'engineer', 'engineering', 'enterprises', 'equipment', 'er', 'es', 'esq', 'estate', 'et', 'eu', 'eurovision', 'eus', 'events', 'everbank', 'exchange', 'expert', 'exposed', 'fail', 'farm', 'fashion', 'feedback', 'fi', 'finance', 'financial', 'firmdale', 'fish', 'fishing', 'fit', 'fitness', 'fj', 'fk', 'flights', 'florist', 'flowers', 'flsmidth', 'fly', 'fm', 'fo', 'foo', 'forsale', 'foundation', 'fr', 'frl', 'frogans', 'fund', 'furniture', 'futbol', 'ga', 'gal', 'gallery', 'garden', 'gb', 'gbiz', 'gd', 'ge', 'gent', 'gf', 'gg', 'ggee', 'gh', 'gi', 'gift', 'gifts', 'gives', 'gl', 'glass', 'gle', 'global', 'globo', 'gm', 'gmail', 'gmo', 'gmx', 'gn', 'goog', 'google', 'gop', 'gov', 'gp', 'gq', 'gr', 'graphics', 'gratis', 'green', 'gripe', 'gs', 'gt', 'gu', 'guide', 'guitars', 'guru', 'gw', 'gy', 'hamburg', 'hangout', 'haus', 'healthcare', 'help', 'here', 'hermes', 'hiphop', 'hiv', 'hk', 'hm', 'hn', 'holdings', 'holiday', 'homes', 'horse', 'host', 'hosting', 'house', 'how', 'hr', 'ht', 'hu', 'ibm', 'id', 'ie', 'ifm', 'il', 'im', 'immo', 'immobilien', 'in', 'industries', 'info', 'ing', 'ink', 'institute', 'insure', 'int', 'international', 'investments', 'io', 'iq', 'ir', 'irish', 'is', 'it', 'iwc', 'jcb', 'je', 'jetzt', 'jm', 'jo', 'jobs', 'joburg', 'jp', 'juegos', 'kaufen', 'kddi', 'ke', 'kg', 'kh', 'ki', 'kim', 'kitchen', 'kiwi', 'km', 'kn', 'koeln', 'kp', 'kr', 'krd', 'kred', 'kw', 'ky', 'kyoto', 'kz', 'la', 'lacaixa', 'land', 'lat', 'latrobe', 'lawyer', 'lb', 'lc', 'lds', 'lease', 'legal', 'lgbt', 'li', 'lidl', 'life', 'lighting', 'limited', 'limo', 'link', 'lk', 'loans', 'london', 'lotte', 'lotto', 'lr', 'ls', 'lt', 'ltda', 'lu', 'luxe', 'luxury', 'lv', 'ly', 'ma', 'madrid', 'maison', 'management', 'mango', 'market', 'marketing', 'marriott', 'mc', 'md', 'me', 'media', 'meet', 'melbourne', 'meme', 'memorial', 'menu', 'mg', 'mh', 'miami', 'mil', 'mini', 'mk', 'ml', 'mm', 'mn', 'mo', 'mobi', 'moda', 'moe', 'monash', 'money', 'mormon', 'mortgage', 'moscow', 'motorcycles', 'mov', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'museum', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nagoya', 'name', 'navy', 'nc', 'ne', 'net', 'network', 'neustar', 'new', 'nexus', 'nf', 'ng', 'ngo', 'nhk', 'ni', 'nico', 'ninja', 'nl', 'no', 'np', 'nr', 'nra', 'nrw', 'ntt', 'nu', 'nyc', 'nz', 'okinawa', 'om', 'one', 'ong', 'onl', 'ooo', 'org', 'organic', 'osaka', 'otsuka', 'ovh', 'pa', 'paris', 'partners', 'parts', 'party', 'pe', 'pf', 'pg', 'ph', 'pharmacy', 'photo', 'photography', 'photos', 'physio', 'pics', 'pictures', 'pink', 'pizza', 'pk', 'pl', 'place', 'plumbing', 'pm', 'pn', 'pohl', 'poker', 'porn', 'post', 'pr', 'praxi', 'press', 'pro', 'prod', 'productions', 'prof', 'properties', 'property', 'ps', 'pt', 'pub', 'pw', 'py', 'qa', 'qpon', 'quebec', 're', 'realtor', 'recipes', 'red', 'rehab', 'reise', 'reisen', 'reit', 'ren', 'rentals', 'repair', 'report', 'republican', 'rest', 'restaurant', 'reviews', 'rich', 'rio', 'rip', 'ro', 'rocks', 'rodeo', 'rs', 'rsvp', 'ru', 'ruhr', 'rw', 'ryukyu', 'sa', 'saarland', 'sale', 'samsung', 'sarl', 'saxo', 'sb', 'sc', 'sca', 'scb', 'schmidt', 'schule', 'schwarz', 'science', 'scot', 'sd', 'se', 'services', 'sew', 'sexy', 'sg', 'sh', 'shiksha', 'shoes', 'shriram', 'si', 'singles', 'sj', 'sk', 'sky', 'sl', 'sm', 'sn', 'so', 'social', 'software', 'sohu', 'solar', 'solutions', 'soy', 'space', 'spiegel', 'sr', 'st', 'style', 'su', 'supplies', 'supply', 'support', 'surf', 'surgery', 'suzuki', 'sv', 'sx', 'sy', 'sydney', 'systems', 'sz', 'taipei', 'tatar', 'tattoo', 'tax', 'tc', 'td', 'technology', 'tel', 'temasek', 'tennis', 'tf', 'tg', 'th', 'tienda', 'tips', 'tires', 'tirol', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'today', 'tokyo', 'tools', 'top', 'toshiba', 'town', 'toys', 'tp', 'tr', 'trade', 'training', 'travel', 'trust', 'tt', 'tui', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'university', 'uno', 'uol', 'us', 'uy', 'uz', 'va', 'vacations', 'vc', 've', 'vegas', 'ventures', 'versicherung', 'vet', 'vg', 'vi', 'viajes', 'video', 'villas', 'vision', 'vlaanderen', 'vn', 'vodka', 'vote', 'voting', 'voto', 'voyage', 'vu', 'wales', 'wang', 'watch', 'webcam', 'website', 'wed', 'wedding', 'wf', 'whoswho', 'wien', 'wiki', 'williamhill', 'wme', 'work', 'works', 'world', 'ws', 'wtc', 'wtf', '佛山', '集团', '在线', '한국', 'ভারত', '八卦', 'موقع', '公益', '公司', '移动', '我爱你', 'москва', 'қаз', 'онлайн', 'сайт', 'срб', '淡马锡', 'орг', '삼성', 'சிங்கப்பூர்', '商标', '商店', '商城', 'дети', 'мкд', '中文网', '中信', '中国', '中國', '谷歌', 'భారత్', 'ලංකා', 'ભારત', 'भारत', '网店', 'संगठन', '网络', 'укр', '香港', '台湾', '台灣', '手机', 'мон', 'الجزائر', 'عمان', 'ایران', 'امارات', 'بازار', 'الاردن', 'بھارت', 'المغرب', 'السعودية', 'مليسيا', 'شبكة', 'გე', '机构', '组织机构', 'ไทย', 'سورية', 'рус', 'рф', 'تونس', 'みんな', 'グーグル', '世界', 'ਭਾਰਤ', '网址', '游戏', 'vermögensberater', 'vermögensberatung', '企业', 'مصر', 'قطر', '广东', 'இலங்கை', 'இந்தியா', '新加坡', 'فلسطين', '政务', 'xxx', 'xyz', 'yachts', 'yandex', 'ye', 'yoga', 'yokohama', 'youtube', 'yt', 'za', 'zip', 'zm', 'zone', 'zuerich', 'zw']

Config.Schema.API = {
    "constructors": [{
        "id": "-1132882121",
        "predicate": "boolFalse",
        "params": [],
        "type": "Bool"
    }, {"id": "-1720552011", "predicate": "boolTrue", "params": [], "type": "Bool"}, {
        "id": "1072550713",
        "predicate": "true",
        "params": [],
        "type": "True"
    }, {"id": "481674261", "predicate": "vector", "params": [], "type": "Vector t"}, {
        "id": "-994444869",
        "predicate": "error",
        "params": [{"name": "code", "type": "int"}, {"name": "text", "type": "string"}],
        "type": "Error"
    }, {"id": "1450380236", "predicate": "null", "params": [], "type": "Null"}, {
        "id": "2134579434",
        "predicate": "inputPeerEmpty",
        "params": [],
        "type": "InputPeer"
    }, {"id": "2107670217", "predicate": "inputPeerSelf", "params": [], "type": "InputPeer"}, {
        "id": "396093539",
        "predicate": "inputPeerChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "InputPeer"
    }, {"id": "-1182234929", "predicate": "inputUserEmpty", "params": [], "type": "InputUser"}, {
        "id": "-138301121",
        "predicate": "inputUserSelf",
        "params": [],
        "type": "InputUser"
    }, {
        "id": "-208488460",
        "predicate": "inputPhoneContact",
        "params": [{"name": "client_id", "type": "long"}, {"name": "phone", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}],
        "type": "InputContact"
    }, {
        "id": "-181407105",
        "predicate": "inputFile",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "name",
            "type": "string"
        }, {"name": "md5_checksum", "type": "string"}],
        "type": "InputFile"
    }, {"id": "-1771768449", "predicate": "inputMediaEmpty", "params": [], "type": "InputMedia"}, {
        "id": "1661770481",
        "predicate": "inputMediaUploadedPhoto",
        "params": [{"name": "flags", "type": "#"}, {"name": "file", "type": "InputFile"}, {
            "name": "caption",
            "type": "string"
        }, {"name": "stickers", "type": "flags.0?Vector<InputDocument>"}],
        "type": "InputMedia"
    }, {
        "id": "-373312269",
        "predicate": "inputMediaPhoto",
        "params": [{"name": "id", "type": "InputPhoto"}, {"name": "caption", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "-104578748",
        "predicate": "inputMediaGeoPoint",
        "params": [{"name": "geo_point", "type": "InputGeoPoint"}],
        "type": "InputMedia"
    }, {
        "id": "-1494984313",
        "predicate": "inputMediaContact",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "480546647",
        "predicate": "inputChatPhotoEmpty",
        "params": [],
        "type": "InputChatPhoto"
    }, {
        "id": "-1837345356",
        "predicate": "inputChatUploadedPhoto",
        "params": [{"name": "file", "type": "InputFile"}],
        "type": "InputChatPhoto"
    }, {
        "id": "-1991004873",
        "predicate": "inputChatPhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "InputChatPhoto"
    }, {"id": "-457104426", "predicate": "inputGeoPointEmpty", "params": [], "type": "InputGeoPoint"}, {
        "id": "-206066487",
        "predicate": "inputGeoPoint",
        "params": [{"name": "lat", "type": "double"}, {"name": "long", "type": "double"}],
        "type": "InputGeoPoint"
    }, {"id": "483901197", "predicate": "inputPhotoEmpty", "params": [], "type": "InputPhoto"}, {
        "id": "-74070332",
        "predicate": "inputPhoto",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPhoto"
    }, {
        "id": "342061462",
        "predicate": "inputFileLocation",
        "params": [{"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}, {
            "name": "secret",
            "type": "long"
        }],
        "type": "InputFileLocation"
    }, {
        "id": "1996904104",
        "predicate": "inputAppEvent",
        "params": [{"name": "time", "type": "double"}, {"name": "type", "type": "string"}, {
            "name": "peer",
            "type": "long"
        }, {"name": "data", "type": "string"}],
        "type": "InputAppEvent"
    }, {
        "id": "-1649296275",
        "predicate": "peerUser",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "Peer"
    }, {
        "id": "-1160714821",
        "predicate": "peerChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Peer"
    }, {
        "id": "-1432995067",
        "predicate": "storage.fileUnknown",
        "params": [],
        "type": "storage.FileType"
    }, {"id": "1086091090", "predicate": "storage.filePartial", "params": [], "type": "storage.FileType"}, {
        "id": "8322574",
        "predicate": "storage.fileJpeg",
        "params": [],
        "type": "storage.FileType"
    }, {"id": "-891180321", "predicate": "storage.fileGif", "params": [], "type": "storage.FileType"}, {
        "id": "172975040",
        "predicate": "storage.filePng",
        "params": [],
        "type": "storage.FileType"
    }, {"id": "-1373745011", "predicate": "storage.filePdf", "params": [], "type": "storage.FileType"}, {
        "id": "1384777335",
        "predicate": "storage.fileMp3",
        "params": [],
        "type": "storage.FileType"
    }, {"id": "1258941372", "predicate": "storage.fileMov", "params": [], "type": "storage.FileType"}, {
        "id": "-1278304028",
        "predicate": "storage.fileMp4",
        "params": [],
        "type": "storage.FileType"
    }, {"id": "276907596", "predicate": "storage.fileWebp", "params": [], "type": "storage.FileType"}, {
        "id": "2086234950",
        "predicate": "fileLocationUnavailable",
        "params": [{"name": "volume_id", "type": "long"}, {"name": "local_id", "type": "int"}, {
            "name": "secret",
            "type": "long"
        }],
        "type": "FileLocation"
    }, {
        "id": "1406570614",
        "predicate": "fileLocation",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "volume_id", "type": "long"}, {
            "name": "local_id",
            "type": "int"
        }, {"name": "secret", "type": "long"}],
        "type": "FileLocation"
    }, {
        "id": "537022650",
        "predicate": "userEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "User"
    }, {
        "id": "1326562017",
        "predicate": "userProfilePhotoEmpty",
        "params": [],
        "type": "UserProfilePhoto"
    }, {
        "id": "-715532088",
        "predicate": "userProfilePhoto",
        "params": [{"name": "photo_id", "type": "long"}, {
            "name": "photo_small",
            "type": "FileLocation"
        }, {"name": "photo_big", "type": "FileLocation"}],
        "type": "UserProfilePhoto"
    }, {"id": "164646985", "predicate": "userStatusEmpty", "params": [], "type": "UserStatus"}, {
        "id": "-306628279",
        "predicate": "userStatusOnline",
        "params": [{"name": "expires", "type": "int"}],
        "type": "UserStatus"
    }, {
        "id": "9203775",
        "predicate": "userStatusOffline",
        "params": [{"name": "was_online", "type": "int"}],
        "type": "UserStatus"
    }, {
        "id": "-1683826688",
        "predicate": "chatEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "Chat"
    }, {
        "id": "-652419756",
        "predicate": "chat",
        "params": [{"name": "flags", "type": "#"}, {"name": "creator", "type": "flags.0?true"}, {
            "name": "kicked",
            "type": "flags.1?true"
        }, {"name": "left", "type": "flags.2?true"}, {"name": "admins_enabled", "type": "flags.3?true"}, {
            "name": "admin",
            "type": "flags.4?true"
        }, {"name": "deactivated", "type": "flags.5?true"}, {"name": "id", "type": "int"}, {
            "name": "title",
            "type": "string"
        }, {"name": "photo", "type": "ChatPhoto"}, {"name": "participants_count", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "version", "type": "int"}, {"name": "migrated_to", "type": "flags.6?InputChannel"}],
        "type": "Chat"
    }, {
        "id": "120753115",
        "predicate": "chatForbidden",
        "params": [{"name": "id", "type": "int"}, {"name": "title", "type": "string"}],
        "type": "Chat"
    }, {
        "id": "771925524",
        "predicate": "chatFull",
        "params": [{"name": "id", "type": "int"}, {
            "name": "participants",
            "type": "ChatParticipants"
        }, {"name": "chat_photo", "type": "Photo"}, {
            "name": "notify_settings",
            "type": "PeerNotifySettings"
        }, {"name": "exported_invite", "type": "ExportedChatInvite"}, {"name": "bot_info", "type": "Vector<BotInfo>"}],
        "type": "ChatFull"
    }, {
        "id": "-925415106",
        "predicate": "chatParticipant",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChatParticipant"
    }, {
        "id": "-57668565",
        "predicate": "chatParticipantsForbidden",
        "params": [{"name": "flags", "type": "#"}, {"name": "chat_id", "type": "int"}, {
            "name": "self_participant",
            "type": "flags.0?ChatParticipant"
        }],
        "type": "ChatParticipants"
    }, {
        "id": "1061556205",
        "predicate": "chatParticipants",
        "params": [{"name": "chat_id", "type": "int"}, {
            "name": "participants",
            "type": "Vector<ChatParticipant>"
        }, {"name": "version", "type": "int"}],
        "type": "ChatParticipants"
    }, {"id": "935395612", "predicate": "chatPhotoEmpty", "params": [], "type": "ChatPhoto"}, {
        "id": "1632839530",
        "predicate": "chatPhoto",
        "params": [{"name": "photo_small", "type": "FileLocation"}, {"name": "photo_big", "type": "FileLocation"}],
        "type": "ChatPhoto"
    }, {
        "id": "-2082087340",
        "predicate": "messageEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "Message"
    }, {
        "id": "-1063525281",
        "predicate": "message",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "post",
            "type": "flags.14?true"
        }, {"name": "id", "type": "int"}, {"name": "from_id", "type": "flags.8?int"}, {
            "name": "to_id",
            "type": "Peer"
        }, {"name": "fwd_from", "type": "flags.2?MessageFwdHeader"}, {
            "name": "via_bot_id",
            "type": "flags.11?int"
        }, {"name": "reply_to_msg_id", "type": "flags.3?int"}, {"name": "date", "type": "int"}, {
            "name": "message",
            "type": "string"
        }, {"name": "media", "type": "flags.9?MessageMedia"}, {
            "name": "reply_markup",
            "type": "flags.6?ReplyMarkup"
        }, {"name": "entities", "type": "flags.7?Vector<MessageEntity>"}, {
            "name": "views",
            "type": "flags.10?int"
        }, {"name": "edit_date", "type": "flags.15?int"}],
        "type": "Message"
    }, {
        "id": "-1642487306",
        "predicate": "messageService",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "post",
            "type": "flags.14?true"
        }, {"name": "id", "type": "int"}, {"name": "from_id", "type": "flags.8?int"}, {
            "name": "to_id",
            "type": "Peer"
        }, {"name": "reply_to_msg_id", "type": "flags.3?int"}, {"name": "date", "type": "int"}, {
            "name": "action",
            "type": "MessageAction"
        }],
        "type": "Message"
    }, {"id": "1038967584", "predicate": "messageMediaEmpty", "params": [], "type": "MessageMedia"}, {
        "id": "1032643901",
        "predicate": "messageMediaPhoto",
        "params": [{"name": "photo", "type": "Photo"}, {"name": "caption", "type": "string"}],
        "type": "MessageMedia"
    }, {
        "id": "1457575028",
        "predicate": "messageMediaGeo",
        "params": [{"name": "geo", "type": "GeoPoint"}],
        "type": "MessageMedia"
    }, {
        "id": "1585262393",
        "predicate": "messageMediaContact",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "user_id", "type": "int"}],
        "type": "MessageMedia"
    }, {
        "id": "-1618676578",
        "predicate": "messageMediaUnsupported",
        "params": [],
        "type": "MessageMedia"
    }, {
        "id": "-1230047312",
        "predicate": "messageActionEmpty",
        "params": [],
        "type": "MessageAction"
    }, {
        "id": "-1503425638",
        "predicate": "messageActionChatCreate",
        "params": [{"name": "title", "type": "string"}, {"name": "users", "type": "Vector<int>"}],
        "type": "MessageAction"
    }, {
        "id": "-1247687078",
        "predicate": "messageActionChatEditTitle",
        "params": [{"name": "title", "type": "string"}],
        "type": "MessageAction"
    }, {
        "id": "2144015272",
        "predicate": "messageActionChatEditPhoto",
        "params": [{"name": "photo", "type": "Photo"}],
        "type": "MessageAction"
    }, {
        "id": "-1780220945",
        "predicate": "messageActionChatDeletePhoto",
        "params": [],
        "type": "MessageAction"
    }, {
        "id": "1217033015",
        "predicate": "messageActionChatAddUser",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "MessageAction"
    }, {
        "id": "-1297179892",
        "predicate": "messageActionChatDeleteUser",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "id": "1728035348",
        "predicate": "dialog",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.2?true"}, {
            "name": "peer",
            "type": "Peer"
        }, {"name": "top_message", "type": "int"}, {
            "name": "read_inbox_max_id",
            "type": "int"
        }, {"name": "read_outbox_max_id", "type": "int"}, {
            "name": "unread_count",
            "type": "int"
        }, {"name": "notify_settings", "type": "PeerNotifySettings"}, {
            "name": "pts",
            "type": "flags.0?int"
        }, {"name": "draft", "type": "flags.1?DraftMessage"}],
        "type": "Dialog"
    }, {
        "id": "590459437",
        "predicate": "photoEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "Photo"
    }, {
        "id": "-1836524247",
        "predicate": "photo",
        "params": [{"name": "flags", "type": "#"}, {"name": "has_stickers", "type": "flags.0?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "date", "type": "int"}, {
            "name": "sizes",
            "type": "Vector<PhotoSize>"
        }],
        "type": "Photo"
    }, {
        "id": "236446268",
        "predicate": "photoSizeEmpty",
        "params": [{"name": "type", "type": "string"}],
        "type": "PhotoSize"
    }, {
        "id": "2009052699",
        "predicate": "photoSize",
        "params": [{"name": "type", "type": "string"}, {"name": "location", "type": "FileLocation"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}, {"name": "size", "type": "int"}],
        "type": "PhotoSize"
    }, {
        "id": "-374917894",
        "predicate": "photoCachedSize",
        "params": [{"name": "type", "type": "string"}, {"name": "location", "type": "FileLocation"}, {
            "name": "w",
            "type": "int"
        }, {"name": "h", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "PhotoSize"
    }, {"id": "286776671", "predicate": "geoPointEmpty", "params": [], "type": "GeoPoint"}, {
        "id": "541710092",
        "predicate": "geoPoint",
        "params": [{"name": "long", "type": "double"}, {"name": "lat", "type": "double"}],
        "type": "GeoPoint"
    }, {
        "id": "-2128698738",
        "predicate": "auth.checkedPhone",
        "params": [{"name": "phone_registered", "type": "Bool"}],
        "type": "auth.CheckedPhone"
    }, {
        "id": "1577067778",
        "predicate": "auth.sentCode",
        "params": [{"name": "flags", "type": "#"}, {"name": "phone_registered", "type": "flags.0?true"}, {
            "name": "type",
            "type": "auth.SentCodeType"
        }, {"name": "phone_code_hash", "type": "string"}, {
            "name": "next_type",
            "type": "flags.1?auth.CodeType"
        }, {"name": "timeout", "type": "flags.2?int"}],
        "type": "auth.SentCode"
    }, {
        "id": "-855308010",
        "predicate": "auth.authorization",
        "params": [{"name": "flags", "type": "#"}, {"name": "tmp_sessions", "type": "flags.0?int"}, {
            "name": "user",
            "type": "User"
        }],
        "type": "auth.Authorization"
    }, {
        "id": "-543777747",
        "predicate": "auth.exportedAuthorization",
        "params": [{"name": "id", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "auth.ExportedAuthorization"
    }, {
        "id": "-1195615476",
        "predicate": "inputNotifyPeer",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "InputNotifyPeer"
    }, {"id": "423314455", "predicate": "inputNotifyUsers", "params": [], "type": "InputNotifyPeer"}, {
        "id": "1251338318",
        "predicate": "inputNotifyChats",
        "params": [],
        "type": "InputNotifyPeer"
    }, {"id": "-1540769658", "predicate": "inputNotifyAll", "params": [], "type": "InputNotifyPeer"}, {
        "id": "-265263912",
        "predicate": "inputPeerNotifyEventsEmpty",
        "params": [],
        "type": "InputPeerNotifyEvents"
    }, {
        "id": "-395694988",
        "predicate": "inputPeerNotifyEventsAll",
        "params": [],
        "type": "InputPeerNotifyEvents"
    }, {
        "id": "949182130",
        "predicate": "inputPeerNotifySettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "show_previews", "type": "flags.0?true"}, {
            "name": "silent",
            "type": "flags.1?true"
        }, {"name": "mute_until", "type": "int"}, {"name": "sound", "type": "string"}],
        "type": "InputPeerNotifySettings"
    }, {
        "id": "-1378534221",
        "predicate": "peerNotifyEventsEmpty",
        "params": [],
        "type": "PeerNotifyEvents"
    }, {
        "id": "1830677896",
        "predicate": "peerNotifyEventsAll",
        "params": [],
        "type": "PeerNotifyEvents"
    }, {
        "id": "1889961234",
        "predicate": "peerNotifySettingsEmpty",
        "params": [],
        "type": "PeerNotifySettings"
    }, {
        "id": "-1697798976",
        "predicate": "peerNotifySettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "show_previews", "type": "flags.0?true"}, {
            "name": "silent",
            "type": "flags.1?true"
        }, {"name": "mute_until", "type": "int"}, {"name": "sound", "type": "string"}],
        "type": "PeerNotifySettings"
    }, {
        "id": "-2122045747",
        "predicate": "peerSettings",
        "params": [{"name": "flags", "type": "#"}, {"name": "report_spam", "type": "flags.0?true"}],
        "type": "PeerSettings"
    }, {
        "id": "-860866985",
        "predicate": "wallPaper",
        "params": [{"name": "id", "type": "int"}, {"name": "title", "type": "string"}, {
            "name": "sizes",
            "type": "Vector<PhotoSize>"
        }, {"name": "color", "type": "int"}],
        "type": "WallPaper"
    }, {"id": "1490799288", "predicate": "inputReportReasonSpam", "params": [], "type": "ReportReason"}, {
        "id": "505595789",
        "predicate": "inputReportReasonViolence",
        "params": [],
        "type": "ReportReason"
    }, {
        "id": "777640226",
        "predicate": "inputReportReasonPornography",
        "params": [],
        "type": "ReportReason"
    }, {
        "id": "-512463606",
        "predicate": "inputReportReasonOther",
        "params": [{"name": "text", "type": "string"}],
        "type": "ReportReason"
    }, {
        "id": "253890367",
        "predicate": "userFull",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "blocked",
            "type": "flags.0?true"
        }, {"name": "phone_calls_available", "type": "flags.4?true"}, {
            "name": "phone_calls_private",
            "type": "flags.5?true"
        }, {"name": "user", "type": "User"}, {"name": "about", "type": "flags.1?string"}, {
            "name": "link",
            "type": "contacts.Link"
        }, {"name": "profile_photo", "type": "flags.2?Photo"}, {
            "name": "notify_settings",
            "type": "PeerNotifySettings"
        }, {"name": "bot_info", "type": "flags.3?BotInfo"}, {"name": "common_chats_count", "type": "int"}],
        "type": "UserFull"
    }, {
        "id": "-116274796",
        "predicate": "contact",
        "params": [{"name": "user_id", "type": "int"}, {"name": "mutual", "type": "Bool"}],
        "type": "Contact"
    }, {
        "id": "-805141448",
        "predicate": "importedContact",
        "params": [{"name": "user_id", "type": "int"}, {"name": "client_id", "type": "long"}],
        "type": "ImportedContact"
    }, {
        "id": "1444661369",
        "predicate": "contactBlocked",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "ContactBlocked"
    }, {
        "id": "-748155807",
        "predicate": "contactStatus",
        "params": [{"name": "user_id", "type": "int"}, {"name": "status", "type": "UserStatus"}],
        "type": "ContactStatus"
    }, {
        "id": "986597452",
        "predicate": "contacts.link",
        "params": [{"name": "my_link", "type": "ContactLink"}, {
            "name": "foreign_link",
            "type": "ContactLink"
        }, {"name": "user", "type": "User"}],
        "type": "contacts.Link"
    }, {
        "id": "-1219778094",
        "predicate": "contacts.contactsNotModified",
        "params": [],
        "type": "contacts.Contacts"
    }, {
        "id": "1871416498",
        "predicate": "contacts.contacts",
        "params": [{"name": "contacts", "type": "Vector<Contact>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Contacts"
    }, {
        "id": "-1387117803",
        "predicate": "contacts.importedContacts",
        "params": [{"name": "imported", "type": "Vector<ImportedContact>"}, {
            "name": "retry_contacts",
            "type": "Vector<long>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.ImportedContacts"
    }, {
        "id": "471043349",
        "predicate": "contacts.blocked",
        "params": [{"name": "blocked", "type": "Vector<ContactBlocked>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Blocked"
    }, {
        "id": "-1878523231",
        "predicate": "contacts.blockedSlice",
        "params": [{"name": "count", "type": "int"}, {
            "name": "blocked",
            "type": "Vector<ContactBlocked>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.Blocked"
    }, {
        "id": "364538944",
        "predicate": "messages.dialogs",
        "params": [{"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Dialogs"
    }, {
        "id": "1910543603",
        "predicate": "messages.dialogsSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Dialogs"
    }, {
        "id": "-1938715001",
        "predicate": "messages.messages",
        "params": [{"name": "messages", "type": "Vector<Message>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Messages"
    }, {
        "id": "189033187",
        "predicate": "messages.messagesSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "messages", "type": "Vector<Message>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.Messages"
    }, {
        "id": "1694474197",
        "predicate": "messages.chats",
        "params": [{"name": "chats", "type": "Vector<Chat>"}],
        "type": "messages.Chats"
    }, {
        "id": "-438840932",
        "predicate": "messages.chatFull",
        "params": [{"name": "full_chat", "type": "ChatFull"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "messages.ChatFull"
    }, {
        "id": "-1269012015",
        "predicate": "messages.affectedHistory",
        "params": [{"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "offset",
            "type": "int"
        }],
        "type": "messages.AffectedHistory"
    }, {
        "id": "1474492012",
        "predicate": "inputMessagesFilterEmpty",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1777752804",
        "predicate": "inputMessagesFilterPhotos",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1614803355",
        "predicate": "inputMessagesFilterVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "1458172132",
        "predicate": "inputMessagesFilterPhotoVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-648121413",
        "predicate": "inputMessagesFilterPhotoVideoDocuments",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1629621880",
        "predicate": "inputMessagesFilterDocument",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "2129714567",
        "predicate": "inputMessagesFilterUrl",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-3644025",
        "predicate": "inputMessagesFilterGif",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "522914557",
        "predicate": "updateNewMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "1318109142",
        "predicate": "updateMessageID",
        "params": [{"name": "id", "type": "int"}, {"name": "random_id", "type": "long"}],
        "type": "Update"
    }, {
        "id": "-1576161051",
        "predicate": "updateDeleteMessages",
        "params": [{"name": "messages", "type": "Vector<int>"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "1548249383",
        "predicate": "updateUserTyping",
        "params": [{"name": "user_id", "type": "int"}, {"name": "action", "type": "SendMessageAction"}],
        "type": "Update"
    }, {
        "id": "-1704596961",
        "predicate": "updateChatUserTyping",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "action",
            "type": "SendMessageAction"
        }],
        "type": "Update"
    }, {
        "id": "125178264",
        "predicate": "updateChatParticipants",
        "params": [{"name": "participants", "type": "ChatParticipants"}],
        "type": "Update"
    }, {
        "id": "469489699",
        "predicate": "updateUserStatus",
        "params": [{"name": "user_id", "type": "int"}, {"name": "status", "type": "UserStatus"}],
        "type": "Update"
    }, {
        "id": "-1489818765",
        "predicate": "updateUserName",
        "params": [{"name": "user_id", "type": "int"}, {"name": "first_name", "type": "string"}, {
            "name": "last_name",
            "type": "string"
        }, {"name": "username", "type": "string"}],
        "type": "Update"
    }, {
        "id": "-1791935732",
        "predicate": "updateUserPhoto",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "photo",
            "type": "UserProfilePhoto"
        }, {"name": "previous", "type": "Bool"}],
        "type": "Update"
    }, {
        "id": "628472761",
        "predicate": "updateContactRegistered",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1657903163",
        "predicate": "updateContactLink",
        "params": [{"name": "user_id", "type": "int"}, {"name": "my_link", "type": "ContactLink"}, {
            "name": "foreign_link",
            "type": "ContactLink"
        }],
        "type": "Update"
    }, {
        "id": "-1519637954",
        "predicate": "updates.state",
        "params": [{"name": "pts", "type": "int"}, {"name": "qts", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "seq", "type": "int"}, {"name": "unread_count", "type": "int"}],
        "type": "updates.State"
    }, {
        "id": "1567990072",
        "predicate": "updates.differenceEmpty",
        "params": [{"name": "date", "type": "int"}, {"name": "seq", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "id": "16030880",
        "predicate": "updates.difference",
        "params": [{"name": "new_messages", "type": "Vector<Message>"}, {
            "name": "new_encrypted_messages",
            "type": "Vector<EncryptedMessage>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "state", "type": "updates.State"}],
        "type": "updates.Difference"
    }, {
        "id": "-1459938943",
        "predicate": "updates.differenceSlice",
        "params": [{"name": "new_messages", "type": "Vector<Message>"}, {
            "name": "new_encrypted_messages",
            "type": "Vector<EncryptedMessage>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "intermediate_state", "type": "updates.State"}],
        "type": "updates.Difference"
    }, {"id": "-484987010", "predicate": "updatesTooLong", "params": [], "type": "Updates"}, {
        "id": "-1857044719",
        "predicate": "updateShortMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "user_id", "type": "int"}, {"name": "message", "type": "string"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}, {"name": "date", "type": "int"}, {
            "name": "fwd_from",
            "type": "flags.2?MessageFwdHeader"
        }, {"name": "via_bot_id", "type": "flags.11?int"}, {
            "name": "reply_to_msg_id",
            "type": "flags.3?int"
        }, {"name": "entities", "type": "flags.7?Vector<MessageEntity>"}],
        "type": "Updates"
    }, {
        "id": "377562760",
        "predicate": "updateShortChatMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "mentioned",
            "type": "flags.4?true"
        }, {"name": "media_unread", "type": "flags.5?true"}, {"name": "silent", "type": "flags.13?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "from_id", "type": "int"}, {"name": "chat_id", "type": "int"}, {
            "name": "message",
            "type": "string"
        }, {"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "fwd_from", "type": "flags.2?MessageFwdHeader"}, {
            "name": "via_bot_id",
            "type": "flags.11?int"
        }, {"name": "reply_to_msg_id", "type": "flags.3?int"}, {
            "name": "entities",
            "type": "flags.7?Vector<MessageEntity>"
        }],
        "type": "Updates"
    }, {
        "id": "2027216577",
        "predicate": "updateShort",
        "params": [{"name": "update", "type": "Update"}, {"name": "date", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "1918567619",
        "predicate": "updatesCombined",
        "params": [{"name": "updates", "type": "Vector<Update>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "date", "type": "int"}, {
            "name": "seq_start",
            "type": "int"
        }, {"name": "seq", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "1957577280",
        "predicate": "updates",
        "params": [{"name": "updates", "type": "Vector<Update>"}, {
            "name": "users",
            "type": "Vector<User>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "date", "type": "int"}, {"name": "seq", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "-1916114267",
        "predicate": "photos.photos",
        "params": [{"name": "photos", "type": "Vector<Photo>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "photos.Photos"
    }, {
        "id": "352657236",
        "predicate": "photos.photosSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "photos", "type": "Vector<Photo>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "photos.Photos"
    }, {
        "id": "539045032",
        "predicate": "photos.photo",
        "params": [{"name": "photo", "type": "Photo"}, {"name": "users", "type": "Vector<User>"}],
        "type": "photos.Photo"
    }, {
        "id": "157948117",
        "predicate": "upload.file",
        "params": [{"name": "type", "type": "storage.FileType"}, {"name": "mtime", "type": "int"}, {
            "name": "bytes",
            "type": "bytes"
        }],
        "type": "upload.File"
    }, {
        "id": "98092748",
        "predicate": "dcOption",
        "params": [{"name": "flags", "type": "#"}, {"name": "ipv6", "type": "flags.0?true"}, {
            "name": "media_only",
            "type": "flags.1?true"
        }, {"name": "tcpo_only", "type": "flags.2?true"}, {"name": "cdn", "type": "flags.3?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "ip_address", "type": "string"}, {"name": "port", "type": "int"}],
        "type": "DcOption"
    }, {
        "id": "-882895228",
        "predicate": "config",
        "params": [{"name": "flags", "type": "#"}, {"name": "phonecalls_enabled", "type": "flags.1?true"}, {
            "name": "date",
            "type": "int"
        }, {"name": "expires", "type": "int"}, {"name": "test_mode", "type": "Bool"}, {
            "name": "this_dc",
            "type": "int"
        }, {"name": "dc_options", "type": "Vector<DcOption>"}, {
            "name": "chat_size_max",
            "type": "int"
        }, {"name": "megagroup_size_max", "type": "int"}, {
            "name": "forwarded_count_max",
            "type": "int"
        }, {"name": "online_update_period_ms", "type": "int"}, {
            "name": "offline_blur_timeout_ms",
            "type": "int"
        }, {"name": "offline_idle_timeout_ms", "type": "int"}, {
            "name": "online_cloud_timeout_ms",
            "type": "int"
        }, {"name": "notify_cloud_delay_ms", "type": "int"}, {
            "name": "notify_default_delay_ms",
            "type": "int"
        }, {"name": "chat_big_size", "type": "int"}, {
            "name": "push_chat_period_ms",
            "type": "int"
        }, {"name": "push_chat_limit", "type": "int"}, {
            "name": "saved_gifs_limit",
            "type": "int"
        }, {"name": "edit_time_limit", "type": "int"}, {
            "name": "rating_e_decay",
            "type": "int"
        }, {"name": "stickers_recent_limit", "type": "int"}, {
            "name": "tmp_sessions",
            "type": "flags.0?int"
        }, {"name": "pinned_dialogs_count_max", "type": "int"}, {
            "name": "call_receive_timeout_ms",
            "type": "int"
        }, {"name": "call_ring_timeout_ms", "type": "int"}, {
            "name": "call_connect_timeout_ms",
            "type": "int"
        }, {"name": "call_packet_timeout_ms", "type": "int"}, {
            "name": "me_url_prefix",
            "type": "string"
        }, {"name": "disabled_features", "type": "Vector<DisabledFeature>"}],
        "type": "Config"
    }, {
        "id": "-1910892683",
        "predicate": "nearestDc",
        "params": [{"name": "country", "type": "string"}, {"name": "this_dc", "type": "int"}, {
            "name": "nearest_dc",
            "type": "int"
        }],
        "type": "NearestDc"
    }, {
        "id": "-1987579119",
        "predicate": "help.appUpdate",
        "params": [{"name": "id", "type": "int"}, {"name": "critical", "type": "Bool"}, {
            "name": "url",
            "type": "string"
        }, {"name": "text", "type": "string"}],
        "type": "help.AppUpdate"
    }, {"id": "-1000708810", "predicate": "help.noAppUpdate", "params": [], "type": "help.AppUpdate"}, {
        "id": "415997816",
        "predicate": "help.inviteText",
        "params": [{"name": "message", "type": "string"}],
        "type": "help.InviteText"
    }, {
        "id": "1662091044",
        "predicate": "wallPaperSolid",
        "params": [{"name": "id", "type": "int"}, {"name": "title", "type": "string"}, {
            "name": "bg_color",
            "type": "int"
        }, {"name": "color", "type": "int"}],
        "type": "WallPaper"
    }, {
        "id": "314359194",
        "predicate": "updateNewEncryptedMessage",
        "params": [{"name": "message", "type": "EncryptedMessage"}, {"name": "qts", "type": "int"}],
        "type": "Update"
    }, {
        "id": "386986326",
        "predicate": "updateEncryptedChatTyping",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1264392051",
        "predicate": "updateEncryption",
        "params": [{"name": "chat", "type": "EncryptedChat"}, {"name": "date", "type": "int"}],
        "type": "Update"
    }, {
        "id": "956179895",
        "predicate": "updateEncryptedMessagesRead",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "max_date", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-1417756512",
        "predicate": "encryptedChatEmpty",
        "params": [{"name": "id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "id": "1006044124",
        "predicate": "encryptedChatWaiting",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "id": "-931638658",
        "predicate": "encryptedChatRequested",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a",
            "type": "bytes"
        }],
        "type": "EncryptedChat"
    }, {
        "id": "-94974410",
        "predicate": "encryptedChat",
        "params": [{"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a_or_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}],
        "type": "EncryptedChat"
    }, {
        "id": "332848423",
        "predicate": "encryptedChatDiscarded",
        "params": [{"name": "id", "type": "int"}],
        "type": "EncryptedChat"
    }, {
        "id": "-247351839",
        "predicate": "inputEncryptedChat",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputEncryptedChat"
    }, {"id": "-1038136962", "predicate": "encryptedFileEmpty", "params": [], "type": "EncryptedFile"}, {
        "id": "1248893260",
        "predicate": "encryptedFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "size",
            "type": "int"
        }, {"name": "dc_id", "type": "int"}, {"name": "key_fingerprint", "type": "int"}],
        "type": "EncryptedFile"
    }, {
        "id": "406307684",
        "predicate": "inputEncryptedFileEmpty",
        "params": [],
        "type": "InputEncryptedFile"
    }, {
        "id": "1690108678",
        "predicate": "inputEncryptedFileUploaded",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "md5_checksum",
            "type": "string"
        }, {"name": "key_fingerprint", "type": "int"}],
        "type": "InputEncryptedFile"
    }, {
        "id": "1511503333",
        "predicate": "inputEncryptedFile",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputEncryptedFile"
    }, {
        "id": "-182231723",
        "predicate": "inputEncryptedFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputFileLocation"
    }, {
        "id": "-317144808",
        "predicate": "encryptedMessage",
        "params": [{"name": "random_id", "type": "long"}, {"name": "chat_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "bytes", "type": "bytes"}, {"name": "file", "type": "EncryptedFile"}],
        "type": "EncryptedMessage"
    }, {
        "id": "594758406",
        "predicate": "encryptedMessageService",
        "params": [{"name": "random_id", "type": "long"}, {"name": "chat_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "bytes", "type": "bytes"}],
        "type": "EncryptedMessage"
    }, {
        "id": "-1058912715",
        "predicate": "messages.dhConfigNotModified",
        "params": [{"name": "random", "type": "bytes"}],
        "type": "messages.DhConfig"
    }, {
        "id": "740433629",
        "predicate": "messages.dhConfig",
        "params": [{"name": "g", "type": "int"}, {"name": "p", "type": "bytes"}, {
            "name": "version",
            "type": "int"
        }, {"name": "random", "type": "bytes"}],
        "type": "messages.DhConfig"
    }, {
        "id": "1443858741",
        "predicate": "messages.sentEncryptedMessage",
        "params": [{"name": "date", "type": "int"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "id": "-1802240206",
        "predicate": "messages.sentEncryptedFile",
        "params": [{"name": "date", "type": "int"}, {"name": "file", "type": "EncryptedFile"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "id": "-95482955",
        "predicate": "inputFileBig",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "name",
            "type": "string"
        }],
        "type": "InputFile"
    }, {
        "id": "767652808",
        "predicate": "inputEncryptedFileBigUploaded",
        "params": [{"name": "id", "type": "long"}, {"name": "parts", "type": "int"}, {
            "name": "key_fingerprint",
            "type": "int"
        }],
        "type": "InputEncryptedFile"
    }, {
        "id": "-364179876",
        "predicate": "updateChatParticipantAdd",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "inviter_id",
            "type": "int"
        }, {"name": "date", "type": "int"}, {"name": "version", "type": "int"}],
        "type": "Update"
    }, {
        "id": "1851755554",
        "predicate": "updateChatParticipantDelete",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "version",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-1906403213",
        "predicate": "updateDcOptions",
        "params": [{"name": "dc_options", "type": "Vector<DcOption>"}],
        "type": "Update"
    }, {
        "id": "-797904407",
        "predicate": "inputMediaUploadedDocument",
        "params": [{"name": "flags", "type": "#"}, {"name": "file", "type": "InputFile"}, {
            "name": "mime_type",
            "type": "string"
        }, {"name": "attributes", "type": "Vector<DocumentAttribute>"}, {
            "name": "caption",
            "type": "string"
        }, {"name": "stickers", "type": "flags.0?Vector<InputDocument>"}],
        "type": "InputMedia"
    }, {
        "id": "1356369070",
        "predicate": "inputMediaUploadedThumbDocument",
        "params": [{"name": "flags", "type": "#"}, {"name": "file", "type": "InputFile"}, {
            "name": "thumb",
            "type": "InputFile"
        }, {"name": "mime_type", "type": "string"}, {
            "name": "attributes",
            "type": "Vector<DocumentAttribute>"
        }, {"name": "caption", "type": "string"}, {"name": "stickers", "type": "flags.0?Vector<InputDocument>"}],
        "type": "InputMedia"
    }, {
        "id": "444068508",
        "predicate": "inputMediaDocument",
        "params": [{"name": "id", "type": "InputDocument"}, {"name": "caption", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "-203411800",
        "predicate": "messageMediaDocument",
        "params": [{"name": "document", "type": "Document"}, {"name": "caption", "type": "string"}],
        "type": "MessageMedia"
    }, {"id": "1928391342", "predicate": "inputDocumentEmpty", "params": [], "type": "InputDocument"}, {
        "id": "410618194",
        "predicate": "inputDocument",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputDocument"
    }, {
        "id": "1125058340",
        "predicate": "inputDocumentFileLocation",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "version",
            "type": "int"
        }],
        "type": "InputFileLocation"
    }, {
        "id": "922273905",
        "predicate": "documentEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "Document"
    }, {
        "id": "-2027738169",
        "predicate": "document",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "mime_type", "type": "string"}, {"name": "size", "type": "int"}, {
            "name": "thumb",
            "type": "PhotoSize"
        }, {"name": "dc_id", "type": "int"}, {"name": "version", "type": "int"}, {
            "name": "attributes",
            "type": "Vector<DocumentAttribute>"
        }],
        "type": "Document"
    }, {
        "id": "398898678",
        "predicate": "help.support",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "user", "type": "User"}],
        "type": "help.Support"
    }, {
        "id": "-1613493288",
        "predicate": "notifyPeer",
        "params": [{"name": "peer", "type": "Peer"}],
        "type": "NotifyPeer"
    }, {"id": "-1261946036", "predicate": "notifyUsers", "params": [], "type": "NotifyPeer"}, {
        "id": "-1073230141",
        "predicate": "notifyChats",
        "params": [],
        "type": "NotifyPeer"
    }, {"id": "1959820384", "predicate": "notifyAll", "params": [], "type": "NotifyPeer"}, {
        "id": "-2131957734",
        "predicate": "updateUserBlocked",
        "params": [{"name": "user_id", "type": "int"}, {"name": "blocked", "type": "Bool"}],
        "type": "Update"
    }, {
        "id": "-1094555409",
        "predicate": "updateNotifySettings",
        "params": [{"name": "peer", "type": "NotifyPeer"}, {"name": "notify_settings", "type": "PeerNotifySettings"}],
        "type": "Update"
    }, {
        "id": "381645902",
        "predicate": "sendMessageTypingAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "-44119819",
        "predicate": "sendMessageCancelAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "-1584933265",
        "predicate": "sendMessageRecordVideoAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "-378127636",
        "predicate": "sendMessageUploadVideoAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "id": "-718310409",
        "predicate": "sendMessageRecordAudioAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "-212740181",
        "predicate": "sendMessageUploadAudioAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "id": "-774682074",
        "predicate": "sendMessageUploadPhotoAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "id": "-1441998364",
        "predicate": "sendMessageUploadDocumentAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "id": "393186209",
        "predicate": "sendMessageGeoLocationAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "1653390447",
        "predicate": "sendMessageChooseContactAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "446822276",
        "predicate": "contacts.found",
        "params": [{"name": "results", "type": "Vector<Peer>"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "contacts.Found"
    }, {
        "id": "-337352679",
        "predicate": "updateServiceNotification",
        "params": [{"name": "flags", "type": "#"}, {"name": "popup", "type": "flags.0?true"}, {
            "name": "inbox_date",
            "type": "flags.1?int"
        }, {"name": "type", "type": "string"}, {"name": "message", "type": "string"}, {
            "name": "media",
            "type": "MessageMedia"
        }, {"name": "entities", "type": "Vector<MessageEntity>"}],
        "type": "Update"
    }, {"id": "-496024847", "predicate": "userStatusRecently", "params": [], "type": "UserStatus"}, {
        "id": "129960444",
        "predicate": "userStatusLastWeek",
        "params": [],
        "type": "UserStatus"
    }, {"id": "2011940674", "predicate": "userStatusLastMonth", "params": [], "type": "UserStatus"}, {
        "id": "-298113238",
        "predicate": "updatePrivacy",
        "params": [{"name": "key", "type": "PrivacyKey"}, {"name": "rules", "type": "Vector<PrivacyRule>"}],
        "type": "Update"
    }, {
        "id": "1335282456",
        "predicate": "inputPrivacyKeyStatusTimestamp",
        "params": [],
        "type": "InputPrivacyKey"
    }, {
        "id": "-1137792208",
        "predicate": "privacyKeyStatusTimestamp",
        "params": [],
        "type": "PrivacyKey"
    }, {
        "id": "218751099",
        "predicate": "inputPrivacyValueAllowContacts",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "id": "407582158",
        "predicate": "inputPrivacyValueAllowAll",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "id": "320652927",
        "predicate": "inputPrivacyValueAllowUsers",
        "params": [{"name": "users", "type": "Vector<InputUser>"}],
        "type": "InputPrivacyRule"
    }, {
        "id": "195371015",
        "predicate": "inputPrivacyValueDisallowContacts",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "id": "-697604407",
        "predicate": "inputPrivacyValueDisallowAll",
        "params": [],
        "type": "InputPrivacyRule"
    }, {
        "id": "-1877932953",
        "predicate": "inputPrivacyValueDisallowUsers",
        "params": [{"name": "users", "type": "Vector<InputUser>"}],
        "type": "InputPrivacyRule"
    }, {
        "id": "-123988",
        "predicate": "privacyValueAllowContacts",
        "params": [],
        "type": "PrivacyRule"
    }, {"id": "1698855810", "predicate": "privacyValueAllowAll", "params": [], "type": "PrivacyRule"}, {
        "id": "1297858060",
        "predicate": "privacyValueAllowUsers",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "id": "-125240806",
        "predicate": "privacyValueDisallowContacts",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "id": "-1955338397",
        "predicate": "privacyValueDisallowAll",
        "params": [],
        "type": "PrivacyRule"
    }, {
        "id": "209668535",
        "predicate": "privacyValueDisallowUsers",
        "params": [{"name": "users", "type": "Vector<int>"}],
        "type": "PrivacyRule"
    }, {
        "id": "1430961007",
        "predicate": "account.privacyRules",
        "params": [{"name": "rules", "type": "Vector<PrivacyRule>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "account.PrivacyRules"
    }, {
        "id": "-1194283041",
        "predicate": "accountDaysTTL",
        "params": [{"name": "days", "type": "int"}],
        "type": "AccountDaysTTL"
    }, {
        "id": "314130811",
        "predicate": "updateUserPhone",
        "params": [{"name": "user_id", "type": "int"}, {"name": "phone", "type": "string"}],
        "type": "Update"
    }, {
        "id": "1815593308",
        "predicate": "documentAttributeImageSize",
        "params": [{"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "DocumentAttribute"
    }, {
        "id": "297109817",
        "predicate": "documentAttributeAnimated",
        "params": [],
        "type": "DocumentAttribute"
    }, {
        "id": "1662637586",
        "predicate": "documentAttributeSticker",
        "params": [{"name": "flags", "type": "#"}, {"name": "mask", "type": "flags.1?true"}, {
            "name": "alt",
            "type": "string"
        }, {"name": "stickerset", "type": "InputStickerSet"}, {"name": "mask_coords", "type": "flags.0?MaskCoords"}],
        "type": "DocumentAttribute"
    }, {
        "id": "250621158",
        "predicate": "documentAttributeVideo",
        "params": [{"name": "flags", "type": "#"}, {"name": "round_message", "type": "flags.0?true"}, {
            "name": "duration",
            "type": "int"
        }, {"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "DocumentAttribute"
    }, {
        "id": "-1739392570",
        "predicate": "documentAttributeAudio",
        "params": [{"name": "flags", "type": "#"}, {"name": "voice", "type": "flags.10?true"}, {
            "name": "duration",
            "type": "int"
        }, {"name": "title", "type": "flags.0?string"}, {
            "name": "performer",
            "type": "flags.1?string"
        }, {"name": "waveform", "type": "flags.2?bytes"}],
        "type": "DocumentAttribute"
    }, {
        "id": "358154344",
        "predicate": "documentAttributeFilename",
        "params": [{"name": "file_name", "type": "string"}],
        "type": "DocumentAttribute"
    }, {
        "id": "-244016606",
        "predicate": "messages.stickersNotModified",
        "params": [],
        "type": "messages.Stickers"
    }, {
        "id": "-1970352846",
        "predicate": "messages.stickers",
        "params": [{"name": "hash", "type": "string"}, {"name": "stickers", "type": "Vector<Document>"}],
        "type": "messages.Stickers"
    }, {
        "id": "313694676",
        "predicate": "stickerPack",
        "params": [{"name": "emoticon", "type": "string"}, {"name": "documents", "type": "Vector<long>"}],
        "type": "StickerPack"
    }, {
        "id": "-395967805",
        "predicate": "messages.allStickersNotModified",
        "params": [],
        "type": "messages.AllStickers"
    }, {
        "id": "-302170017",
        "predicate": "messages.allStickers",
        "params": [{"name": "hash", "type": "int"}, {"name": "sets", "type": "Vector<StickerSet>"}],
        "type": "messages.AllStickers"
    }, {
        "id": "-1369215196",
        "predicate": "disabledFeature",
        "params": [{"name": "feature", "type": "string"}, {"name": "description", "type": "string"}],
        "type": "DisabledFeature"
    }, {
        "id": "-1721631396",
        "predicate": "updateReadHistoryInbox",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "max_id", "type": "int"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "id": "791617983",
        "predicate": "updateReadHistoryOutbox",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "max_id", "type": "int"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-2066640507",
        "predicate": "messages.affectedMessages",
        "params": [{"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}],
        "type": "messages.AffectedMessages"
    }, {"id": "1599050311", "predicate": "contactLinkUnknown", "params": [], "type": "ContactLink"}, {
        "id": "-17968211",
        "predicate": "contactLinkNone",
        "params": [],
        "type": "ContactLink"
    }, {"id": "646922073", "predicate": "contactLinkHasPhone", "params": [], "type": "ContactLink"}, {
        "id": "-721239344",
        "predicate": "contactLinkContact",
        "params": [],
        "type": "ContactLink"
    }, {
        "id": "2139689491",
        "predicate": "updateWebPage",
        "params": [{"name": "webpage", "type": "WebPage"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-350980120",
        "predicate": "webPageEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "WebPage"
    }, {
        "id": "-981018084",
        "predicate": "webPagePending",
        "params": [{"name": "id", "type": "long"}, {"name": "date", "type": "int"}],
        "type": "WebPage"
    }, {
        "id": "1594340540",
        "predicate": "webPage",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "url",
            "type": "string"
        }, {"name": "display_url", "type": "string"}, {"name": "hash", "type": "int"}, {
            "name": "type",
            "type": "flags.0?string"
        }, {"name": "site_name", "type": "flags.1?string"}, {
            "name": "title",
            "type": "flags.2?string"
        }, {"name": "description", "type": "flags.3?string"}, {
            "name": "photo",
            "type": "flags.4?Photo"
        }, {"name": "embed_url", "type": "flags.5?string"}, {
            "name": "embed_type",
            "type": "flags.5?string"
        }, {"name": "embed_width", "type": "flags.6?int"}, {
            "name": "embed_height",
            "type": "flags.6?int"
        }, {"name": "duration", "type": "flags.7?int"}, {"name": "author", "type": "flags.8?string"}, {
            "name": "document",
            "type": "flags.9?Document"
        }, {"name": "cached_page", "type": "flags.10?Page"}],
        "type": "WebPage"
    }, {
        "id": "-1557277184",
        "predicate": "messageMediaWebPage",
        "params": [{"name": "webpage", "type": "WebPage"}],
        "type": "MessageMedia"
    }, {
        "id": "2079516406",
        "predicate": "authorization",
        "params": [{"name": "hash", "type": "long"}, {"name": "flags", "type": "int"}, {
            "name": "device_model",
            "type": "string"
        }, {"name": "platform", "type": "string"}, {"name": "system_version", "type": "string"}, {
            "name": "api_id",
            "type": "int"
        }, {"name": "app_name", "type": "string"}, {"name": "app_version", "type": "string"}, {
            "name": "date_created",
            "type": "int"
        }, {"name": "date_active", "type": "int"}, {"name": "ip", "type": "string"}, {
            "name": "country",
            "type": "string"
        }, {"name": "region", "type": "string"}],
        "type": "Authorization"
    }, {
        "id": "307276766",
        "predicate": "account.authorizations",
        "params": [{"name": "authorizations", "type": "Vector<Authorization>"}],
        "type": "account.Authorizations"
    }, {
        "id": "-1764049896",
        "predicate": "account.noPassword",
        "params": [{"name": "new_salt", "type": "bytes"}, {"name": "email_unconfirmed_pattern", "type": "string"}],
        "type": "account.Password"
    }, {
        "id": "2081952796",
        "predicate": "account.password",
        "params": [{"name": "current_salt", "type": "bytes"}, {"name": "new_salt", "type": "bytes"}, {
            "name": "hint",
            "type": "string"
        }, {"name": "has_recovery", "type": "Bool"}, {"name": "email_unconfirmed_pattern", "type": "string"}],
        "type": "account.Password"
    }, {
        "id": "-1212732749",
        "predicate": "account.passwordSettings",
        "params": [{"name": "email", "type": "string"}],
        "type": "account.PasswordSettings"
    }, {
        "id": "-2037289493",
        "predicate": "account.passwordInputSettings",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "new_salt",
            "type": "flags.0?bytes"
        }, {"name": "new_password_hash", "type": "flags.0?bytes"}, {
            "name": "hint",
            "type": "flags.0?string"
        }, {"name": "email", "type": "flags.1?string"}],
        "type": "account.PasswordInputSettings"
    }, {
        "id": "326715557",
        "predicate": "auth.passwordRecovery",
        "params": [{"name": "email_pattern", "type": "string"}],
        "type": "auth.PasswordRecovery"
    }, {
        "id": "673687578",
        "predicate": "inputMediaVenue",
        "params": [{"name": "geo_point", "type": "InputGeoPoint"}, {"name": "title", "type": "string"}, {
            "name": "address",
            "type": "string"
        }, {"name": "provider", "type": "string"}, {"name": "venue_id", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "2031269663",
        "predicate": "messageMediaVenue",
        "params": [{"name": "geo", "type": "GeoPoint"}, {"name": "title", "type": "string"}, {
            "name": "address",
            "type": "string"
        }, {"name": "provider", "type": "string"}, {"name": "venue_id", "type": "string"}],
        "type": "MessageMedia"
    }, {
        "id": "-1551583367",
        "predicate": "receivedNotifyMessage",
        "params": [{"name": "id", "type": "int"}, {"name": "flags", "type": "int"}],
        "type": "ReceivedNotifyMessage"
    }, {"id": "1776236393", "predicate": "chatInviteEmpty", "params": [], "type": "ExportedChatInvite"}, {
        "id": "-64092740",
        "predicate": "chatInviteExported",
        "params": [{"name": "link", "type": "string"}],
        "type": "ExportedChatInvite"
    }, {
        "id": "1516793212",
        "predicate": "chatInviteAlready",
        "params": [{"name": "chat", "type": "Chat"}],
        "type": "ChatInvite"
    }, {
        "id": "-613092008",
        "predicate": "chatInvite",
        "params": [{"name": "flags", "type": "#"}, {"name": "channel", "type": "flags.0?true"}, {
            "name": "broadcast",
            "type": "flags.1?true"
        }, {"name": "public", "type": "flags.2?true"}, {"name": "megagroup", "type": "flags.3?true"}, {
            "name": "title",
            "type": "string"
        }, {"name": "photo", "type": "ChatPhoto"}, {"name": "participants_count", "type": "int"}, {
            "name": "participants",
            "type": "flags.4?Vector<User>"
        }],
        "type": "ChatInvite"
    }, {
        "id": "-123931160",
        "predicate": "messageActionChatJoinedByLink",
        "params": [{"name": "inviter_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "id": "1757493555",
        "predicate": "updateReadMessagesContents",
        "params": [{"name": "messages", "type": "Vector<int>"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-4838507",
        "predicate": "inputStickerSetEmpty",
        "params": [],
        "type": "InputStickerSet"
    }, {
        "id": "-1645763991",
        "predicate": "inputStickerSetID",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputStickerSet"
    }, {
        "id": "-2044933984",
        "predicate": "inputStickerSetShortName",
        "params": [{"name": "short_name", "type": "string"}],
        "type": "InputStickerSet"
    }, {
        "id": "-852477119",
        "predicate": "stickerSet",
        "params": [{"name": "flags", "type": "#"}, {"name": "installed", "type": "flags.0?true"}, {
            "name": "archived",
            "type": "flags.1?true"
        }, {"name": "official", "type": "flags.2?true"}, {"name": "masks", "type": "flags.3?true"}, {
            "name": "id",
            "type": "long"
        }, {"name": "access_hash", "type": "long"}, {"name": "title", "type": "string"}, {
            "name": "short_name",
            "type": "string"
        }, {"name": "count", "type": "int"}, {"name": "hash", "type": "int"}],
        "type": "StickerSet"
    }, {
        "id": "-1240849242",
        "predicate": "messages.stickerSet",
        "params": [{"name": "set", "type": "StickerSet"}, {
            "name": "packs",
            "type": "Vector<StickerPack>"
        }, {"name": "documents", "type": "Vector<Document>"}],
        "type": "messages.StickerSet"
    }, {
        "id": "773059779",
        "predicate": "user",
        "params": [{"name": "flags", "type": "#"}, {"name": "self", "type": "flags.10?true"}, {
            "name": "contact",
            "type": "flags.11?true"
        }, {"name": "mutual_contact", "type": "flags.12?true"}, {
            "name": "deleted",
            "type": "flags.13?true"
        }, {"name": "bot", "type": "flags.14?true"}, {
            "name": "bot_chat_history",
            "type": "flags.15?true"
        }, {"name": "bot_nochats", "type": "flags.16?true"}, {
            "name": "verified",
            "type": "flags.17?true"
        }, {"name": "restricted", "type": "flags.18?true"}, {
            "name": "min",
            "type": "flags.20?true"
        }, {"name": "bot_inline_geo", "type": "flags.21?true"}, {"name": "id", "type": "int"}, {
            "name": "access_hash",
            "type": "flags.0?long"
        }, {"name": "first_name", "type": "flags.1?string"}, {
            "name": "last_name",
            "type": "flags.2?string"
        }, {"name": "username", "type": "flags.3?string"}, {"name": "phone", "type": "flags.4?string"}, {
            "name": "photo",
            "type": "flags.5?UserProfilePhoto"
        }, {"name": "status", "type": "flags.6?UserStatus"}, {
            "name": "bot_info_version",
            "type": "flags.14?int"
        }, {"name": "restriction_reason", "type": "flags.18?string"}, {
            "name": "bot_inline_placeholder",
            "type": "flags.19?string"
        }, {"name": "lang_code", "type": "flags.22?string"}],
        "type": "User"
    }, {
        "id": "-1032140601",
        "predicate": "botCommand",
        "params": [{"name": "command", "type": "string"}, {"name": "description", "type": "string"}],
        "type": "BotCommand"
    }, {
        "id": "-1729618630",
        "predicate": "botInfo",
        "params": [{"name": "user_id", "type": "int"}, {"name": "description", "type": "string"}, {
            "name": "commands",
            "type": "Vector<BotCommand>"
        }],
        "type": "BotInfo"
    }, {
        "id": "-1560655744",
        "predicate": "keyboardButton",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "2002815875",
        "predicate": "keyboardButtonRow",
        "params": [{"name": "buttons", "type": "Vector<KeyboardButton>"}],
        "type": "KeyboardButtonRow"
    }, {
        "id": "-1606526075",
        "predicate": "replyKeyboardHide",
        "params": [{"name": "flags", "type": "#"}, {"name": "selective", "type": "flags.2?true"}],
        "type": "ReplyMarkup"
    }, {
        "id": "-200242528",
        "predicate": "replyKeyboardForceReply",
        "params": [{"name": "flags", "type": "#"}, {"name": "single_use", "type": "flags.1?true"}, {
            "name": "selective",
            "type": "flags.2?true"
        }],
        "type": "ReplyMarkup"
    }, {
        "id": "889353612",
        "predicate": "replyKeyboardMarkup",
        "params": [{"name": "flags", "type": "#"}, {"name": "resize", "type": "flags.0?true"}, {
            "name": "single_use",
            "type": "flags.1?true"
        }, {"name": "selective", "type": "flags.2?true"}, {"name": "rows", "type": "Vector<KeyboardButtonRow>"}],
        "type": "ReplyMarkup"
    }, {
        "id": "2072935910",
        "predicate": "inputPeerUser",
        "params": [{"name": "user_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPeer"
    }, {
        "id": "-668391402",
        "predicate": "inputUser",
        "params": [{"name": "user_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputUser"
    }, {
        "id": "-1148011883",
        "predicate": "messageEntityUnknown",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "-100378723",
        "predicate": "messageEntityMention",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "1868782349",
        "predicate": "messageEntityHashtag",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "1827637959",
        "predicate": "messageEntityBotCommand",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "1859134776",
        "predicate": "messageEntityUrl",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "1692693954",
        "predicate": "messageEntityEmail",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "-1117713463",
        "predicate": "messageEntityBold",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "-2106619040",
        "predicate": "messageEntityItalic",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "681706865",
        "predicate": "messageEntityCode",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}],
        "type": "MessageEntity"
    }, {
        "id": "1938967520",
        "predicate": "messageEntityPre",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "language",
            "type": "string"
        }],
        "type": "MessageEntity"
    }, {
        "id": "1990644519",
        "predicate": "messageEntityTextUrl",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "url",
            "type": "string"
        }],
        "type": "MessageEntity"
    }, {
        "id": "301019932",
        "predicate": "updateShortSentMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "out", "type": "flags.1?true"}, {
            "name": "id",
            "type": "int"
        }, {"name": "pts", "type": "int"}, {"name": "pts_count", "type": "int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "media", "type": "flags.9?MessageMedia"}, {
            "name": "entities",
            "type": "flags.7?Vector<MessageEntity>"
        }],
        "type": "Updates"
    }, {"id": "-292807034", "predicate": "inputChannelEmpty", "params": [], "type": "InputChannel"}, {
        "id": "-1343524562",
        "predicate": "inputChannel",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputChannel"
    }, {
        "id": "-1109531342",
        "predicate": "peerChannel",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "Peer"
    }, {
        "id": "548253432",
        "predicate": "inputPeerChannel",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPeer"
    }, {
        "id": "-1588737454",
        "predicate": "channel",
        "params": [{"name": "flags", "type": "#"}, {"name": "creator", "type": "flags.0?true"}, {
            "name": "kicked",
            "type": "flags.1?true"
        }, {"name": "left", "type": "flags.2?true"}, {"name": "editor", "type": "flags.3?true"}, {
            "name": "moderator",
            "type": "flags.4?true"
        }, {"name": "broadcast", "type": "flags.5?true"}, {
            "name": "verified",
            "type": "flags.7?true"
        }, {"name": "megagroup", "type": "flags.8?true"}, {
            "name": "restricted",
            "type": "flags.9?true"
        }, {"name": "democracy", "type": "flags.10?true"}, {"name": "signatures", "type": "flags.11?true"}, {
            "name": "min",
            "type": "flags.12?true"
        }, {"name": "id", "type": "int"}, {"name": "access_hash", "type": "flags.13?long"}, {
            "name": "title",
            "type": "string"
        }, {"name": "username", "type": "flags.6?string"}, {"name": "photo", "type": "ChatPhoto"}, {
            "name": "date",
            "type": "int"
        }, {"name": "version", "type": "int"}, {"name": "restriction_reason", "type": "flags.9?string"}],
        "type": "Chat"
    }, {
        "id": "-2059962289",
        "predicate": "channelForbidden",
        "params": [{"name": "flags", "type": "#"}, {"name": "broadcast", "type": "flags.5?true"}, {
            "name": "megagroup",
            "type": "flags.8?true"
        }, {"name": "id", "type": "int"}, {"name": "access_hash", "type": "long"}, {"name": "title", "type": "string"}],
        "type": "Chat"
    }, {
        "id": "2131196633",
        "predicate": "contacts.resolvedPeer",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "contacts.ResolvedPeer"
    }, {
        "id": "-1009430225",
        "predicate": "channelFull",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "can_view_participants",
            "type": "flags.3?true"
        }, {"name": "can_set_username", "type": "flags.6?true"}, {"name": "id", "type": "int"}, {
            "name": "about",
            "type": "string"
        }, {"name": "participants_count", "type": "flags.0?int"}, {
            "name": "admins_count",
            "type": "flags.1?int"
        }, {"name": "kicked_count", "type": "flags.2?int"}, {
            "name": "read_inbox_max_id",
            "type": "int"
        }, {"name": "read_outbox_max_id", "type": "int"}, {"name": "unread_count", "type": "int"}, {
            "name": "chat_photo",
            "type": "Photo"
        }, {"name": "notify_settings", "type": "PeerNotifySettings"}, {
            "name": "exported_invite",
            "type": "ExportedChatInvite"
        }, {"name": "bot_info", "type": "Vector<BotInfo>"}, {
            "name": "migrated_from_chat_id",
            "type": "flags.4?int"
        }, {"name": "migrated_from_max_id", "type": "flags.4?int"}, {"name": "pinned_msg_id", "type": "flags.5?int"}],
        "type": "ChatFull"
    }, {
        "id": "182649427",
        "predicate": "messageRange",
        "params": [{"name": "min_id", "type": "int"}, {"name": "max_id", "type": "int"}],
        "type": "MessageRange"
    }, {
        "id": "-1725551049",
        "predicate": "messages.channelMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "pts", "type": "int"}, {
            "name": "count",
            "type": "int"
        }, {"name": "messages", "type": "Vector<Message>"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "messages.Messages"
    }, {
        "id": "-1781355374",
        "predicate": "messageActionChannelCreate",
        "params": [{"name": "title", "type": "string"}],
        "type": "MessageAction"
    }, {
        "id": "-352032773",
        "predicate": "updateChannelTooLong",
        "params": [{"name": "flags", "type": "#"}, {"name": "channel_id", "type": "int"}, {
            "name": "pts",
            "type": "flags.0?int"
        }],
        "type": "Update"
    }, {
        "id": "-1227598250",
        "predicate": "updateChannel",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "Update"
    }, {
        "id": "1656358105",
        "predicate": "updateNewChannelMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "1108669311",
        "predicate": "updateReadChannelInbox",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "max_id", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1015733815",
        "predicate": "updateDeleteChannelMessages",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "messages", "type": "Vector<int>"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1734268085",
        "predicate": "updateChannelMessageViews",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "id", "type": "int"}, {
            "name": "views",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "1041346555",
        "predicate": "updates.channelDifferenceEmpty",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "timeout", "type": "flags.1?int"}],
        "type": "updates.ChannelDifference"
    }, {
        "id": "1091431943",
        "predicate": "updates.channelDifferenceTooLong",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "timeout", "type": "flags.1?int"}, {"name": "top_message", "type": "int"}, {
            "name": "read_inbox_max_id",
            "type": "int"
        }, {"name": "read_outbox_max_id", "type": "int"}, {"name": "unread_count", "type": "int"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "updates.ChannelDifference"
    }, {
        "id": "543450958",
        "predicate": "updates.channelDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "final", "type": "flags.0?true"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "timeout", "type": "flags.1?int"}, {
            "name": "new_messages",
            "type": "Vector<Message>"
        }, {"name": "other_updates", "type": "Vector<Update>"}, {"name": "chats", "type": "Vector<Chat>"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "updates.ChannelDifference"
    }, {
        "id": "-1798033689",
        "predicate": "channelMessagesFilterEmpty",
        "params": [],
        "type": "ChannelMessagesFilter"
    }, {
        "id": "-847783593",
        "predicate": "channelMessagesFilter",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "exclude_new_messages",
            "type": "flags.1?true"
        }, {"name": "ranges", "type": "Vector<MessageRange>"}],
        "type": "ChannelMessagesFilter"
    }, {
        "id": "367766557",
        "predicate": "channelParticipant",
        "params": [{"name": "user_id", "type": "int"}, {"name": "date", "type": "int"}],
        "type": "ChannelParticipant"
    }, {
        "id": "-1557620115",
        "predicate": "channelParticipantSelf",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChannelParticipant"
    }, {
        "id": "-1861910545",
        "predicate": "channelParticipantModerator",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChannelParticipant"
    }, {
        "id": "-1743180447",
        "predicate": "channelParticipantEditor",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChannelParticipant"
    }, {
        "id": "-1933187430",
        "predicate": "channelParticipantKicked",
        "params": [{"name": "user_id", "type": "int"}, {"name": "kicked_by", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChannelParticipant"
    }, {
        "id": "-471670279",
        "predicate": "channelParticipantCreator",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "ChannelParticipant"
    }, {
        "id": "-566281095",
        "predicate": "channelParticipantsRecent",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "id": "-1268741783",
        "predicate": "channelParticipantsAdmins",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "id": "1010285434",
        "predicate": "channelParticipantsKicked",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "id": "-1299865402",
        "predicate": "channelRoleEmpty",
        "params": [],
        "type": "ChannelParticipantRole"
    }, {
        "id": "-1776756363",
        "predicate": "channelRoleModerator",
        "params": [],
        "type": "ChannelParticipantRole"
    }, {
        "id": "-2113143156",
        "predicate": "channelRoleEditor",
        "params": [],
        "type": "ChannelParticipantRole"
    }, {
        "id": "-177282392",
        "predicate": "channels.channelParticipants",
        "params": [{"name": "count", "type": "int"}, {
            "name": "participants",
            "type": "Vector<ChannelParticipant>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "channels.ChannelParticipants"
    }, {
        "id": "-791039645",
        "predicate": "channels.channelParticipant",
        "params": [{"name": "participant", "type": "ChannelParticipant"}, {"name": "users", "type": "Vector<User>"}],
        "type": "channels.ChannelParticipant"
    }, {
        "id": "-636267638",
        "predicate": "chatParticipantCreator",
        "params": [{"name": "user_id", "type": "int"}],
        "type": "ChatParticipant"
    }, {
        "id": "-489233354",
        "predicate": "chatParticipantAdmin",
        "params": [{"name": "user_id", "type": "int"}, {"name": "inviter_id", "type": "int"}, {
            "name": "date",
            "type": "int"
        }],
        "type": "ChatParticipant"
    }, {
        "id": "1855224129",
        "predicate": "updateChatAdmins",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "enabled", "type": "Bool"}, {
            "name": "version",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-1232070311",
        "predicate": "updateChatParticipantAdmin",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "is_admin",
            "type": "Bool"
        }, {"name": "version", "type": "int"}],
        "type": "Update"
    }, {
        "id": "1371385889",
        "predicate": "messageActionChatMigrateTo",
        "params": [{"name": "channel_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "id": "-1336546578",
        "predicate": "messageActionChannelMigrateFrom",
        "params": [{"name": "title", "type": "string"}, {"name": "chat_id", "type": "int"}],
        "type": "MessageAction"
    }, {
        "id": "-1328445861",
        "predicate": "channelParticipantsBots",
        "params": [],
        "type": "ChannelParticipantsFilter"
    }, {
        "id": "-236044656",
        "predicate": "help.termsOfService",
        "params": [{"name": "text", "type": "string"}],
        "type": "help.TermsOfService"
    }, {
        "id": "1753886890",
        "predicate": "updateNewStickerSet",
        "params": [{"name": "stickerset", "type": "messages.StickerSet"}],
        "type": "Update"
    }, {
        "id": "196268545",
        "predicate": "updateStickerSetsOrder",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "order",
            "type": "Vector<long>"
        }],
        "type": "Update"
    }, {"id": "1135492588", "predicate": "updateStickerSets", "params": [], "type": "Update"}, {
        "id": "372165663",
        "predicate": "foundGif",
        "params": [{"name": "url", "type": "string"}, {"name": "thumb_url", "type": "string"}, {
            "name": "content_url",
            "type": "string"
        }, {"name": "content_type", "type": "string"}, {"name": "w", "type": "int"}, {"name": "h", "type": "int"}],
        "type": "FoundGif"
    }, {
        "id": "-1670052855",
        "predicate": "foundGifCached",
        "params": [{"name": "url", "type": "string"}, {"name": "photo", "type": "Photo"}, {
            "name": "document",
            "type": "Document"
        }],
        "type": "FoundGif"
    }, {
        "id": "1212395773",
        "predicate": "inputMediaGifExternal",
        "params": [{"name": "url", "type": "string"}, {"name": "q", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "1158290442",
        "predicate": "messages.foundGifs",
        "params": [{"name": "next_offset", "type": "int"}, {"name": "results", "type": "Vector<FoundGif>"}],
        "type": "messages.FoundGifs"
    }, {
        "id": "-402498398",
        "predicate": "messages.savedGifsNotModified",
        "params": [],
        "type": "messages.SavedGifs"
    }, {
        "id": "772213157",
        "predicate": "messages.savedGifs",
        "params": [{"name": "hash", "type": "int"}, {"name": "gifs", "type": "Vector<Document>"}],
        "type": "messages.SavedGifs"
    }, {"id": "-1821035490", "predicate": "updateSavedGifs", "params": [], "type": "Update"}, {
        "id": "691006739",
        "predicate": "inputBotInlineMessageMediaAuto",
        "params": [{"name": "flags", "type": "#"}, {"name": "caption", "type": "string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "InputBotInlineMessage"
    }, {
        "id": "1036876423",
        "predicate": "inputBotInlineMessageText",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.0?true"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.1?Vector<MessageEntity>"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "InputBotInlineMessage"
    }, {
        "id": "750510426",
        "predicate": "inputBotInlineResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {"name": "description", "type": "flags.2?string"}, {
            "name": "url",
            "type": "flags.3?string"
        }, {"name": "thumb_url", "type": "flags.4?string"}, {
            "name": "content_url",
            "type": "flags.5?string"
        }, {"name": "content_type", "type": "flags.5?string"}, {"name": "w", "type": "flags.6?int"}, {
            "name": "h",
            "type": "flags.6?int"
        }, {"name": "duration", "type": "flags.7?int"}, {"name": "send_message", "type": "InputBotInlineMessage"}],
        "type": "InputBotInlineResult"
    }, {
        "id": "175419739",
        "predicate": "botInlineMessageMediaAuto",
        "params": [{"name": "flags", "type": "#"}, {"name": "caption", "type": "string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "BotInlineMessage"
    }, {
        "id": "-1937807902",
        "predicate": "botInlineMessageText",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.0?true"}, {
            "name": "message",
            "type": "string"
        }, {"name": "entities", "type": "flags.1?Vector<MessageEntity>"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "BotInlineMessage"
    }, {
        "id": "-1679053127",
        "predicate": "botInlineResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {"name": "description", "type": "flags.2?string"}, {
            "name": "url",
            "type": "flags.3?string"
        }, {"name": "thumb_url", "type": "flags.4?string"}, {
            "name": "content_url",
            "type": "flags.5?string"
        }, {"name": "content_type", "type": "flags.5?string"}, {"name": "w", "type": "flags.6?int"}, {
            "name": "h",
            "type": "flags.6?int"
        }, {"name": "duration", "type": "flags.7?int"}, {"name": "send_message", "type": "BotInlineMessage"}],
        "type": "BotInlineResult"
    }, {
        "id": "-858565059",
        "predicate": "messages.botResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "gallery", "type": "flags.0?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "next_offset", "type": "flags.1?string"}, {
            "name": "switch_pm",
            "type": "flags.2?InlineBotSwitchPM"
        }, {"name": "results", "type": "Vector<BotInlineResult>"}, {"name": "cache_time", "type": "int"}],
        "type": "messages.BotResults"
    }, {
        "id": "1417832080",
        "predicate": "updateBotInlineQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "query", "type": "string"}, {"name": "geo", "type": "flags.0?GeoPoint"}, {
            "name": "offset",
            "type": "string"
        }],
        "type": "Update"
    }, {
        "id": "239663460",
        "predicate": "updateBotInlineSend",
        "params": [{"name": "flags", "type": "#"}, {"name": "user_id", "type": "int"}, {
            "name": "query",
            "type": "string"
        }, {"name": "geo", "type": "flags.0?GeoPoint"}, {"name": "id", "type": "string"}, {
            "name": "msg_id",
            "type": "flags.1?InputBotInlineMessageID"
        }],
        "type": "Update"
    }, {
        "id": "1358283666",
        "predicate": "inputMessagesFilterVoice",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "928101534",
        "predicate": "inputMessagesFilterMusic",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1107622874",
        "predicate": "inputPrivacyKeyChatInvite",
        "params": [],
        "type": "InputPrivacyKey"
    }, {"id": "1343122938", "predicate": "privacyKeyChatInvite", "params": [], "type": "PrivacyKey"}, {
        "id": "524838915",
        "predicate": "exportedMessageLink",
        "params": [{"name": "link", "type": "string"}],
        "type": "ExportedMessageLink"
    }, {
        "id": "-947462709",
        "predicate": "messageFwdHeader",
        "params": [{"name": "flags", "type": "#"}, {"name": "from_id", "type": "flags.0?int"}, {
            "name": "date",
            "type": "int"
        }, {"name": "channel_id", "type": "flags.1?int"}, {"name": "channel_post", "type": "flags.2?int"}],
        "type": "MessageFwdHeader"
    }, {
        "id": "457133559",
        "predicate": "updateEditChannelMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-1738988427",
        "predicate": "updateChannelPinnedMessage",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "id", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1799538451",
        "predicate": "messageActionPinMessage",
        "params": [],
        "type": "MessageAction"
    }, {"id": "1923290508", "predicate": "auth.codeTypeSms", "params": [], "type": "auth.CodeType"}, {
        "id": "1948046307",
        "predicate": "auth.codeTypeCall",
        "params": [],
        "type": "auth.CodeType"
    }, {
        "id": "577556219",
        "predicate": "auth.codeTypeFlashCall",
        "params": [],
        "type": "auth.CodeType"
    }, {
        "id": "1035688326",
        "predicate": "auth.sentCodeTypeApp",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "id": "-1073693790",
        "predicate": "auth.sentCodeTypeSms",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "id": "1398007207",
        "predicate": "auth.sentCodeTypeCall",
        "params": [{"name": "length", "type": "int"}],
        "type": "auth.SentCodeType"
    }, {
        "id": "-1425815847",
        "predicate": "auth.sentCodeTypeFlashCall",
        "params": [{"name": "pattern", "type": "string"}],
        "type": "auth.SentCodeType"
    }, {
        "id": "629866245",
        "predicate": "keyboardButtonUrl",
        "params": [{"name": "text", "type": "string"}, {"name": "url", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "1748655686",
        "predicate": "keyboardButtonCallback",
        "params": [{"name": "text", "type": "string"}, {"name": "data", "type": "bytes"}],
        "type": "KeyboardButton"
    }, {
        "id": "-1318425559",
        "predicate": "keyboardButtonRequestPhone",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "-59151553",
        "predicate": "keyboardButtonRequestGeoLocation",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "90744648",
        "predicate": "keyboardButtonSwitchInline",
        "params": [{"name": "flags", "type": "#"}, {"name": "same_peer", "type": "flags.0?true"}, {
            "name": "text",
            "type": "string"
        }, {"name": "query", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "1218642516",
        "predicate": "replyInlineMarkup",
        "params": [{"name": "rows", "type": "Vector<KeyboardButtonRow>"}],
        "type": "ReplyMarkup"
    }, {
        "id": "911761060",
        "predicate": "messages.botCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "alert", "type": "flags.1?true"}, {
            "name": "has_url",
            "type": "flags.3?true"
        }, {"name": "message", "type": "flags.0?string"}, {"name": "url", "type": "flags.2?string"}, {
            "name": "cache_time",
            "type": "int"
        }],
        "type": "messages.BotCallbackAnswer"
    }, {
        "id": "-415938591",
        "predicate": "updateBotCallbackQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "peer", "type": "Peer"}, {"name": "msg_id", "type": "int"}, {
            "name": "chat_instance",
            "type": "long"
        }, {"name": "data", "type": "flags.0?bytes"}, {"name": "game_short_name", "type": "flags.1?string"}],
        "type": "Update"
    }, {
        "id": "649453030",
        "predicate": "messages.messageEditData",
        "params": [{"name": "flags", "type": "#"}, {"name": "caption", "type": "flags.0?true"}],
        "type": "messages.MessageEditData"
    }, {
        "id": "-469536605",
        "predicate": "updateEditMessage",
        "params": [{"name": "message", "type": "Message"}, {"name": "pts", "type": "int"}, {
            "name": "pts_count",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-190472735",
        "predicate": "inputBotInlineMessageMediaGeo",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "InputBotInlineMessage"
    }, {
        "id": "-1431327288",
        "predicate": "inputBotInlineMessageMediaVenue",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo_point", "type": "InputGeoPoint"}, {
            "name": "title",
            "type": "string"
        }, {"name": "address", "type": "string"}, {"name": "provider", "type": "string"}, {
            "name": "venue_id",
            "type": "string"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "id": "766443943",
        "predicate": "inputBotInlineMessageMediaContact",
        "params": [{"name": "flags", "type": "#"}, {"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "id": "982505656",
        "predicate": "botInlineMessageMediaGeo",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo", "type": "GeoPoint"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }],
        "type": "BotInlineMessage"
    }, {
        "id": "1130767150",
        "predicate": "botInlineMessageMediaVenue",
        "params": [{"name": "flags", "type": "#"}, {"name": "geo", "type": "GeoPoint"}, {
            "name": "title",
            "type": "string"
        }, {"name": "address", "type": "string"}, {"name": "provider", "type": "string"}, {
            "name": "venue_id",
            "type": "string"
        }, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "BotInlineMessage"
    }, {
        "id": "904770772",
        "predicate": "botInlineMessageMediaContact",
        "params": [{"name": "flags", "type": "#"}, {"name": "phone_number", "type": "string"}, {
            "name": "first_name",
            "type": "string"
        }, {"name": "last_name", "type": "string"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "BotInlineMessage"
    }, {
        "id": "-1462213465",
        "predicate": "inputBotInlineResultPhoto",
        "params": [{"name": "id", "type": "string"}, {"name": "type", "type": "string"}, {
            "name": "photo",
            "type": "InputPhoto"
        }, {"name": "send_message", "type": "InputBotInlineMessage"}],
        "type": "InputBotInlineResult"
    }, {
        "id": "-459324",
        "predicate": "inputBotInlineResultDocument",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "title", "type": "flags.1?string"}, {
            "name": "description",
            "type": "flags.2?string"
        }, {"name": "document", "type": "InputDocument"}, {"name": "send_message", "type": "InputBotInlineMessage"}],
        "type": "InputBotInlineResult"
    }, {
        "id": "400266251",
        "predicate": "botInlineMediaResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "string"}, {
            "name": "type",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?Photo"}, {"name": "document", "type": "flags.1?Document"}, {
            "name": "title",
            "type": "flags.2?string"
        }, {"name": "description", "type": "flags.3?string"}, {"name": "send_message", "type": "BotInlineMessage"}],
        "type": "BotInlineResult"
    }, {
        "id": "-1995686519",
        "predicate": "inputBotInlineMessageID",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }],
        "type": "InputBotInlineMessageID"
    }, {
        "id": "-103646630",
        "predicate": "updateInlineBotCallbackQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "msg_id", "type": "InputBotInlineMessageID"}, {
            "name": "chat_instance",
            "type": "long"
        }, {"name": "data", "type": "flags.0?bytes"}, {"name": "game_short_name", "type": "flags.1?string"}],
        "type": "Update"
    }, {
        "id": "1008755359",
        "predicate": "inlineBotSwitchPM",
        "params": [{"name": "text", "type": "string"}, {"name": "start_param", "type": "string"}],
        "type": "InlineBotSwitchPM"
    }, {
        "id": "863093588",
        "predicate": "messages.peerDialogs",
        "params": [{"name": "dialogs", "type": "Vector<Dialog>"}, {
            "name": "messages",
            "type": "Vector<Message>"
        }, {"name": "chats", "type": "Vector<Chat>"}, {"name": "users", "type": "Vector<User>"}, {
            "name": "state",
            "type": "updates.State"
        }],
        "type": "messages.PeerDialogs"
    }, {
        "id": "-305282981",
        "predicate": "topPeer",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "rating", "type": "double"}],
        "type": "TopPeer"
    }, {
        "id": "-1419371685",
        "predicate": "topPeerCategoryBotsPM",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "id": "344356834",
        "predicate": "topPeerCategoryBotsInline",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "id": "104314861",
        "predicate": "topPeerCategoryCorrespondents",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "id": "-1122524854",
        "predicate": "topPeerCategoryGroups",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "id": "371037736",
        "predicate": "topPeerCategoryChannels",
        "params": [],
        "type": "TopPeerCategory"
    }, {
        "id": "-75283823",
        "predicate": "topPeerCategoryPeers",
        "params": [{"name": "category", "type": "TopPeerCategory"}, {"name": "count", "type": "int"}, {
            "name": "peers",
            "type": "Vector<TopPeer>"
        }],
        "type": "TopPeerCategoryPeers"
    }, {
        "id": "-567906571",
        "predicate": "contacts.topPeersNotModified",
        "params": [],
        "type": "contacts.TopPeers"
    }, {
        "id": "1891070632",
        "predicate": "contacts.topPeers",
        "params": [{"name": "categories", "type": "Vector<TopPeerCategoryPeers>"}, {
            "name": "chats",
            "type": "Vector<Chat>"
        }, {"name": "users", "type": "Vector<User>"}],
        "type": "contacts.TopPeers"
    }, {
        "id": "892193368",
        "predicate": "messageEntityMentionName",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "user_id",
            "type": "int"
        }],
        "type": "MessageEntity"
    }, {
        "id": "546203849",
        "predicate": "inputMessageEntityMentionName",
        "params": [{"name": "offset", "type": "int"}, {"name": "length", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }],
        "type": "MessageEntity"
    }, {
        "id": "975236280",
        "predicate": "inputMessagesFilterChatPhotos",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "634833351",
        "predicate": "updateReadChannelOutbox",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "max_id", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-299124375",
        "predicate": "updateDraftMessage",
        "params": [{"name": "peer", "type": "Peer"}, {"name": "draft", "type": "DraftMessage"}],
        "type": "Update"
    }, {"id": "-1169445179", "predicate": "draftMessageEmpty", "params": [], "type": "DraftMessage"}, {
        "id": "-40996577",
        "predicate": "draftMessage",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "no_webpage",
            "type": "flags.1?true"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {"name": "message", "type": "string"}, {
            "name": "entities",
            "type": "flags.3?Vector<MessageEntity>"
        }, {"name": "date", "type": "int"}],
        "type": "DraftMessage"
    }, {
        "id": "-1615153660",
        "predicate": "messageActionHistoryClear",
        "params": [],
        "type": "MessageAction"
    }, {
        "id": "82699215",
        "predicate": "messages.featuredStickersNotModified",
        "params": [],
        "type": "messages.FeaturedStickers"
    }, {
        "id": "-123893531",
        "predicate": "messages.featuredStickers",
        "params": [{"name": "hash", "type": "int"}, {
            "name": "sets",
            "type": "Vector<StickerSetCovered>"
        }, {"name": "unread", "type": "Vector<long>"}],
        "type": "messages.FeaturedStickers"
    }, {"id": "1461528386", "predicate": "updateReadFeaturedStickers", "params": [], "type": "Update"}, {
        "id": "186120336",
        "predicate": "messages.recentStickersNotModified",
        "params": [],
        "type": "messages.RecentStickers"
    }, {
        "id": "1558317424",
        "predicate": "messages.recentStickers",
        "params": [{"name": "hash", "type": "int"}, {"name": "stickers", "type": "Vector<Document>"}],
        "type": "messages.RecentStickers"
    }, {"id": "-1706939360", "predicate": "updateRecentStickers", "params": [], "type": "Update"}, {
        "id": "1338747336",
        "predicate": "messages.archivedStickers",
        "params": [{"name": "count", "type": "int"}, {"name": "sets", "type": "Vector<StickerSetCovered>"}],
        "type": "messages.ArchivedStickers"
    }, {
        "id": "946083368",
        "predicate": "messages.stickerSetInstallResultSuccess",
        "params": [],
        "type": "messages.StickerSetInstallResult"
    }, {
        "id": "904138920",
        "predicate": "messages.stickerSetInstallResultArchive",
        "params": [{"name": "sets", "type": "Vector<StickerSetCovered>"}],
        "type": "messages.StickerSetInstallResult"
    }, {
        "id": "1678812626",
        "predicate": "stickerSetCovered",
        "params": [{"name": "set", "type": "StickerSet"}, {"name": "cover", "type": "Document"}],
        "type": "StickerSetCovered"
    }, {"id": "-1574314746", "predicate": "updateConfig", "params": [], "type": "Update"}, {
        "id": "861169551",
        "predicate": "updatePtsChanged",
        "params": [],
        "type": "Update"
    }, {
        "id": "-1252045032",
        "predicate": "inputMediaPhotoExternal",
        "params": [{"name": "url", "type": "string"}, {"name": "caption", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "-437690244",
        "predicate": "inputMediaDocumentExternal",
        "params": [{"name": "url", "type": "string"}, {"name": "caption", "type": "string"}],
        "type": "InputMedia"
    }, {
        "id": "872932635",
        "predicate": "stickerSetMultiCovered",
        "params": [{"name": "set", "type": "StickerSet"}, {"name": "covers", "type": "Vector<Document>"}],
        "type": "StickerSetCovered"
    }, {
        "id": "-1361650766",
        "predicate": "maskCoords",
        "params": [{"name": "n", "type": "int"}, {"name": "x", "type": "double"}, {
            "name": "y",
            "type": "double"
        }, {"name": "zoom", "type": "double"}],
        "type": "MaskCoords"
    }, {
        "id": "-1744710921",
        "predicate": "documentAttributeHasStickers",
        "params": [],
        "type": "DocumentAttribute"
    }, {
        "id": "1251549527",
        "predicate": "inputStickeredMediaPhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "InputStickeredMedia"
    }, {
        "id": "70813275",
        "predicate": "inputStickeredMediaDocument",
        "params": [{"name": "id", "type": "InputDocument"}],
        "type": "InputStickeredMedia"
    }, {
        "id": "-1107729093",
        "predicate": "game",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "short_name", "type": "string"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "Photo"}, {"name": "document", "type": "flags.0?Document"}],
        "type": "Game"
    }, {
        "id": "1336154098",
        "predicate": "inputBotInlineResultGame",
        "params": [{"name": "id", "type": "string"}, {"name": "short_name", "type": "string"}, {
            "name": "send_message",
            "type": "InputBotInlineMessage"
        }],
        "type": "InputBotInlineResult"
    }, {
        "id": "1262639204",
        "predicate": "inputBotInlineMessageGame",
        "params": [{"name": "flags", "type": "#"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "InputBotInlineMessage"
    }, {
        "id": "-38694904",
        "predicate": "messageMediaGame",
        "params": [{"name": "game", "type": "Game"}],
        "type": "MessageMedia"
    }, {
        "id": "-750828557",
        "predicate": "inputMediaGame",
        "params": [{"name": "id", "type": "InputGame"}],
        "type": "InputMedia"
    }, {
        "id": "53231223",
        "predicate": "inputGameID",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputGame"
    }, {
        "id": "-1020139510",
        "predicate": "inputGameShortName",
        "params": [{"name": "bot_id", "type": "InputUser"}, {"name": "short_name", "type": "string"}],
        "type": "InputGame"
    }, {
        "id": "1358175439",
        "predicate": "keyboardButtonGame",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "-1834538890",
        "predicate": "messageActionGameScore",
        "params": [{"name": "game_id", "type": "long"}, {"name": "score", "type": "int"}],
        "type": "MessageAction"
    }, {
        "id": "1493171408",
        "predicate": "highScore",
        "params": [{"name": "pos", "type": "int"}, {"name": "user_id", "type": "int"}, {
            "name": "score",
            "type": "int"
        }],
        "type": "HighScore"
    }, {
        "id": "-1707344487",
        "predicate": "messages.highScores",
        "params": [{"name": "scores", "type": "Vector<HighScore>"}, {"name": "users", "type": "Vector<User>"}],
        "type": "messages.HighScores"
    }, {
        "id": "1258196845",
        "predicate": "updates.differenceTooLong",
        "params": [{"name": "pts", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "id": "1081547008",
        "predicate": "updateChannelWebPage",
        "params": [{"name": "channel_id", "type": "int"}, {"name": "webpage", "type": "WebPage"}, {
            "name": "pts",
            "type": "int"
        }, {"name": "pts_count", "type": "int"}],
        "type": "Update"
    }, {
        "id": "-1663561404",
        "predicate": "messages.chatsSlice",
        "params": [{"name": "count", "type": "int"}, {"name": "chats", "type": "Vector<Chat>"}],
        "type": "messages.Chats"
    }, {"id": "-599948721", "predicate": "textEmpty", "params": [], "type": "RichText"}, {
        "id": "1950782688",
        "predicate": "textPlain",
        "params": [{"name": "text", "type": "string"}],
        "type": "RichText"
    }, {
        "id": "1730456516",
        "predicate": "textBold",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "id": "-653089380",
        "predicate": "textItalic",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "id": "-1054465340",
        "predicate": "textUnderline",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "id": "-1678197867",
        "predicate": "textStrike",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "id": "1816074681",
        "predicate": "textFixed",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "RichText"
    }, {
        "id": "1009288385",
        "predicate": "textUrl",
        "params": [{"name": "text", "type": "RichText"}, {"name": "url", "type": "string"}, {
            "name": "webpage_id",
            "type": "long"
        }],
        "type": "RichText"
    }, {
        "id": "-564523562",
        "predicate": "textEmail",
        "params": [{"name": "text", "type": "RichText"}, {"name": "email", "type": "string"}],
        "type": "RichText"
    }, {
        "id": "2120376535",
        "predicate": "textConcat",
        "params": [{"name": "texts", "type": "Vector<RichText>"}],
        "type": "RichText"
    }, {"id": "324435594", "predicate": "pageBlockUnsupported", "params": [], "type": "PageBlock"}, {
        "id": "1890305021",
        "predicate": "pageBlockTitle",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-1879401953",
        "predicate": "pageBlockSubtitle",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-1162877472",
        "predicate": "pageBlockAuthorDate",
        "params": [{"name": "author", "type": "RichText"}, {"name": "published_date", "type": "int"}],
        "type": "PageBlock"
    }, {
        "id": "-1076861716",
        "predicate": "pageBlockHeader",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-248793375",
        "predicate": "pageBlockSubheader",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "1182402406",
        "predicate": "pageBlockParagraph",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-1066346178",
        "predicate": "pageBlockPreformatted",
        "params": [{"name": "text", "type": "RichText"}, {"name": "language", "type": "string"}],
        "type": "PageBlock"
    }, {
        "id": "1216809369",
        "predicate": "pageBlockFooter",
        "params": [{"name": "text", "type": "RichText"}],
        "type": "PageBlock"
    }, {"id": "-618614392", "predicate": "pageBlockDivider", "params": [], "type": "PageBlock"}, {
        "id": "-837994576",
        "predicate": "pageBlockAnchor",
        "params": [{"name": "name", "type": "string"}],
        "type": "PageBlock"
    }, {
        "id": "978896884",
        "predicate": "pageBlockList",
        "params": [{"name": "ordered", "type": "Bool"}, {"name": "items", "type": "Vector<RichText>"}],
        "type": "PageBlock"
    }, {
        "id": "641563686",
        "predicate": "pageBlockBlockquote",
        "params": [{"name": "text", "type": "RichText"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "1329878739",
        "predicate": "pageBlockPullquote",
        "params": [{"name": "text", "type": "RichText"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-372860542",
        "predicate": "pageBlockPhoto",
        "params": [{"name": "photo_id", "type": "long"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-640214938",
        "predicate": "pageBlockVideo",
        "params": [{"name": "flags", "type": "#"}, {"name": "autoplay", "type": "flags.0?true"}, {
            "name": "loop",
            "type": "flags.1?true"
        }, {"name": "video_id", "type": "long"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "972174080",
        "predicate": "pageBlockCover",
        "params": [{"name": "cover", "type": "PageBlock"}],
        "type": "PageBlock"
    }, {
        "id": "-840826671",
        "predicate": "pageBlockEmbed",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "full_width",
            "type": "flags.0?true"
        }, {"name": "allow_scrolling", "type": "flags.3?true"}, {"name": "url", "type": "flags.1?string"}, {
            "name": "html",
            "type": "flags.2?string"
        }, {"name": "poster_photo_id", "type": "flags.4?long"}, {"name": "w", "type": "int"}, {
            "name": "h",
            "type": "int"
        }, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "690781161",
        "predicate": "pageBlockEmbedPost",
        "params": [{"name": "url", "type": "string"}, {"name": "webpage_id", "type": "long"}, {
            "name": "author_photo_id",
            "type": "long"
        }, {"name": "author", "type": "string"}, {"name": "date", "type": "int"}, {
            "name": "blocks",
            "type": "Vector<PageBlock>"
        }, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "145955919",
        "predicate": "pageBlockCollage",
        "params": [{"name": "items", "type": "Vector<PageBlock>"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "319588707",
        "predicate": "pageBlockSlideshow",
        "params": [{"name": "items", "type": "Vector<PageBlock>"}, {"name": "caption", "type": "RichText"}],
        "type": "PageBlock"
    }, {
        "id": "-1913754556",
        "predicate": "pagePart",
        "params": [{"name": "blocks", "type": "Vector<PageBlock>"}, {
            "name": "photos",
            "type": "Vector<Photo>"
        }, {"name": "videos", "type": "Vector<Document>"}],
        "type": "Page"
    }, {
        "id": "-677274263",
        "predicate": "pageFull",
        "params": [{"name": "blocks", "type": "Vector<PageBlock>"}, {
            "name": "photos",
            "type": "Vector<Photo>"
        }, {"name": "videos", "type": "Vector<Document>"}],
        "type": "Page"
    }, {"id": "-2054908813", "predicate": "webPageNotModified", "params": [], "type": "WebPage"}, {
        "id": "-88417185",
        "predicate": "inputPrivacyKeyPhoneCall",
        "params": [],
        "type": "InputPrivacyKey"
    }, {"id": "1030105979", "predicate": "privacyKeyPhoneCall", "params": [], "type": "PrivacyKey"}, {
        "id": "-580219064",
        "predicate": "sendMessageGamePlayAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "-2048646399",
        "predicate": "phoneCallDiscardReasonMissed",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "id": "-527056480",
        "predicate": "phoneCallDiscardReasonDisconnect",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "id": "1471006352",
        "predicate": "phoneCallDiscardReasonHangup",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "id": "-84416311",
        "predicate": "phoneCallDiscardReasonBusy",
        "params": [],
        "type": "PhoneCallDiscardReason"
    }, {
        "id": "-686710068",
        "predicate": "updateDialogPinned",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "Peer"
        }],
        "type": "Update"
    }, {
        "id": "-657787251",
        "predicate": "updatePinnedDialogs",
        "params": [{"name": "flags", "type": "#"}, {"name": "order", "type": "flags.0?Vector<Peer>"}],
        "type": "Update"
    }, {
        "id": "2104790276",
        "predicate": "dataJSON",
        "params": [{"name": "data", "type": "string"}],
        "type": "DataJSON"
    }, {
        "id": "-2095595325",
        "predicate": "updateBotWebhookJSON",
        "params": [{"name": "data", "type": "DataJSON"}],
        "type": "Update"
    }, {
        "id": "-1684914010",
        "predicate": "updateBotWebhookJSONQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "data", "type": "DataJSON"}, {
            "name": "timeout",
            "type": "int"
        }],
        "type": "Update"
    }, {
        "id": "-886477832",
        "predicate": "labeledPrice",
        "params": [{"name": "label", "type": "string"}, {"name": "amount", "type": "long"}],
        "type": "LabeledPrice"
    }, {
        "id": "-1022713000",
        "predicate": "invoice",
        "params": [{"name": "flags", "type": "#"}, {"name": "test", "type": "flags.0?true"}, {
            "name": "name_requested",
            "type": "flags.1?true"
        }, {"name": "phone_requested", "type": "flags.2?true"}, {
            "name": "email_requested",
            "type": "flags.3?true"
        }, {"name": "shipping_address_requested", "type": "flags.4?true"}, {
            "name": "flexible",
            "type": "flags.5?true"
        }, {"name": "currency", "type": "string"}, {"name": "prices", "type": "Vector<LabeledPrice>"}],
        "type": "Invoice"
    }, {
        "id": "-1844103547",
        "predicate": "inputMediaInvoice",
        "params": [{"name": "flags", "type": "#"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?InputWebDocument"}, {
            "name": "invoice",
            "type": "Invoice"
        }, {"name": "payload", "type": "bytes"}, {"name": "provider", "type": "string"}, {
            "name": "start_param",
            "type": "string"
        }],
        "type": "InputMedia"
    }, {
        "id": "-368917890",
        "predicate": "paymentCharge",
        "params": [{"name": "id", "type": "string"}, {"name": "provider_charge_id", "type": "string"}],
        "type": "PaymentCharge"
    }, {
        "id": "-1892568281",
        "predicate": "messageActionPaymentSentMe",
        "params": [{"name": "flags", "type": "#"}, {"name": "currency", "type": "string"}, {
            "name": "total_amount",
            "type": "long"
        }, {"name": "payload", "type": "bytes"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {"name": "charge", "type": "PaymentCharge"}],
        "type": "MessageAction"
    }, {
        "id": "-2074799289",
        "predicate": "messageMediaInvoice",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "shipping_address_requested",
            "type": "flags.1?true"
        }, {"name": "test", "type": "flags.3?true"}, {"name": "title", "type": "string"}, {
            "name": "description",
            "type": "string"
        }, {"name": "photo", "type": "flags.0?WebDocument"}, {
            "name": "receipt_msg_id",
            "type": "flags.2?int"
        }, {"name": "currency", "type": "string"}, {"name": "total_amount", "type": "long"}, {
            "name": "start_param",
            "type": "string"
        }],
        "type": "MessageMedia"
    }, {
        "id": "512535275",
        "predicate": "postAddress",
        "params": [{"name": "street_line1", "type": "string"}, {"name": "street_line2", "type": "string"}, {
            "name": "city",
            "type": "string"
        }, {"name": "state", "type": "string"}, {"name": "country_iso2", "type": "string"}, {
            "name": "post_code",
            "type": "string"
        }],
        "type": "PostAddress"
    }, {
        "id": "-1868808300",
        "predicate": "paymentRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "name", "type": "flags.0?string"}, {
            "name": "phone",
            "type": "flags.1?string"
        }, {"name": "email", "type": "flags.2?string"}, {"name": "shipping_address", "type": "flags.3?PostAddress"}],
        "type": "PaymentRequestedInfo"
    }, {
        "id": "-1344716869",
        "predicate": "keyboardButtonBuy",
        "params": [{"name": "text", "type": "string"}],
        "type": "KeyboardButton"
    }, {
        "id": "1080663248",
        "predicate": "messageActionPaymentSent",
        "params": [{"name": "currency", "type": "string"}, {"name": "total_amount", "type": "long"}],
        "type": "MessageAction"
    }, {
        "id": "-842892769",
        "predicate": "paymentSavedCredentialsCard",
        "params": [{"name": "id", "type": "string"}, {"name": "title", "type": "string"}],
        "type": "PaymentSavedCredentials"
    }, {
        "id": "-971322408",
        "predicate": "webDocument",
        "params": [{"name": "url", "type": "string"}, {"name": "access_hash", "type": "long"}, {
            "name": "size",
            "type": "int"
        }, {"name": "mime_type", "type": "string"}, {
            "name": "attributes",
            "type": "Vector<DocumentAttribute>"
        }, {"name": "dc_id", "type": "int"}],
        "type": "WebDocument"
    }, {
        "id": "-1678949555",
        "predicate": "inputWebDocument",
        "params": [{"name": "url", "type": "string"}, {"name": "size", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }, {"name": "attributes", "type": "Vector<DocumentAttribute>"}],
        "type": "InputWebDocument"
    }, {
        "id": "-1036396922",
        "predicate": "inputWebFileLocation",
        "params": [{"name": "url", "type": "string"}, {"name": "access_hash", "type": "long"}],
        "type": "InputWebFileLocation"
    }, {
        "id": "568808380",
        "predicate": "upload.webFile",
        "params": [{"name": "size", "type": "int"}, {"name": "mime_type", "type": "string"}, {
            "name": "file_type",
            "type": "storage.FileType"
        }, {"name": "mtime", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "upload.WebFile"
    }, {
        "id": "1062645411",
        "predicate": "payments.paymentForm",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "can_save_credentials",
            "type": "flags.2?true"
        }, {"name": "password_missing", "type": "flags.3?true"}, {"name": "bot_id", "type": "int"}, {
            "name": "invoice",
            "type": "Invoice"
        }, {"name": "provider_id", "type": "int"}, {"name": "url", "type": "string"}, {
            "name": "native_provider",
            "type": "flags.4?string"
        }, {"name": "native_params", "type": "flags.4?DataJSON"}, {
            "name": "saved_info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "saved_credentials", "type": "flags.1?PaymentSavedCredentials"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "payments.PaymentForm"
    }, {
        "id": "-784000893",
        "predicate": "payments.validatedRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "flags.0?string"}, {
            "name": "shipping_options",
            "type": "flags.1?Vector<ShippingOption>"
        }],
        "type": "payments.ValidatedRequestedInfo"
    }, {
        "id": "1314881805",
        "predicate": "payments.paymentResult",
        "params": [{"name": "updates", "type": "Updates"}],
        "type": "payments.PaymentResult"
    }, {
        "id": "1800845601",
        "predicate": "payments.paymentVerficationNeeded",
        "params": [{"name": "url", "type": "string"}],
        "type": "payments.PaymentResult"
    }, {
        "id": "1342771681",
        "predicate": "payments.paymentReceipt",
        "params": [{"name": "flags", "type": "#"}, {"name": "date", "type": "int"}, {
            "name": "bot_id",
            "type": "int"
        }, {"name": "invoice", "type": "Invoice"}, {"name": "provider_id", "type": "int"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping", "type": "flags.1?ShippingOption"}, {
            "name": "currency",
            "type": "string"
        }, {"name": "total_amount", "type": "long"}, {"name": "credentials_title", "type": "string"}, {
            "name": "users",
            "type": "Vector<User>"
        }],
        "type": "payments.PaymentReceipt"
    }, {
        "id": "-74456004",
        "predicate": "payments.savedInfo",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "has_saved_credentials",
            "type": "flags.1?true"
        }, {"name": "saved_info", "type": "flags.0?PaymentRequestedInfo"}],
        "type": "payments.SavedInfo"
    }, {
        "id": "-1056001329",
        "predicate": "inputPaymentCredentialsSaved",
        "params": [{"name": "id", "type": "string"}, {"name": "tmp_password", "type": "bytes"}],
        "type": "InputPaymentCredentials"
    }, {
        "id": "873977640",
        "predicate": "inputPaymentCredentials",
        "params": [{"name": "flags", "type": "#"}, {"name": "save", "type": "flags.0?true"}, {
            "name": "data",
            "type": "DataJSON"
        }],
        "type": "InputPaymentCredentials"
    }, {
        "id": "-614138572",
        "predicate": "account.tmpPassword",
        "params": [{"name": "tmp_password", "type": "bytes"}, {"name": "valid_until", "type": "int"}],
        "type": "account.TmpPassword"
    }, {
        "id": "-1239335713",
        "predicate": "shippingOption",
        "params": [{"name": "id", "type": "string"}, {"name": "title", "type": "string"}, {
            "name": "prices",
            "type": "Vector<LabeledPrice>"
        }],
        "type": "ShippingOption"
    }, {
        "id": "-523384512",
        "predicate": "updateBotShippingQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "user_id", "type": "int"}, {
            "name": "payload",
            "type": "bytes"
        }, {"name": "shipping_address", "type": "PostAddress"}],
        "type": "Update"
    }, {
        "id": "1563376297",
        "predicate": "updateBotPrecheckoutQuery",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "user_id",
            "type": "int"
        }, {"name": "payload", "type": "bytes"}, {
            "name": "info",
            "type": "flags.0?PaymentRequestedInfo"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {
            "name": "currency",
            "type": "string"
        }, {"name": "total_amount", "type": "long"}],
        "type": "Update"
    }, {
        "id": "-6249322",
        "predicate": "inputStickerSetItem",
        "params": [{"name": "flags", "type": "#"}, {"name": "document", "type": "InputDocument"}, {
            "name": "emoji",
            "type": "string"
        }, {"name": "mask_coords", "type": "flags.0?MaskCoords"}],
        "type": "InputStickerSetItem"
    }, {
        "id": "-1425052898",
        "predicate": "updatePhoneCall",
        "params": [{"name": "phone_call", "type": "PhoneCall"}],
        "type": "Update"
    }, {
        "id": "506920429",
        "predicate": "inputPhoneCall",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}],
        "type": "InputPhoneCall"
    }, {
        "id": "1399245077",
        "predicate": "phoneCallEmpty",
        "params": [{"name": "id", "type": "long"}],
        "type": "PhoneCall"
    }, {
        "id": "462375633",
        "predicate": "phoneCallWaiting",
        "params": [{"name": "flags", "type": "#"}, {"name": "id", "type": "long"}, {
            "name": "access_hash",
            "type": "long"
        }, {"name": "date", "type": "int"}, {"name": "admin_id", "type": "int"}, {
            "name": "participant_id",
            "type": "int"
        }, {"name": "protocol", "type": "PhoneCallProtocol"}, {"name": "receive_date", "type": "flags.0?int"}],
        "type": "PhoneCall"
    }, {
        "id": "-2089411356",
        "predicate": "phoneCallRequested",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a_hash",
            "type": "bytes"
        }, {"name": "protocol", "type": "PhoneCallProtocol"}],
        "type": "PhoneCall"
    }, {
        "id": "1828732223",
        "predicate": "phoneCallAccepted",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_b",
            "type": "bytes"
        }, {"name": "protocol", "type": "PhoneCallProtocol"}],
        "type": "PhoneCall"
    }, {
        "id": "-1660057",
        "predicate": "phoneCall",
        "params": [{"name": "id", "type": "long"}, {"name": "access_hash", "type": "long"}, {
            "name": "date",
            "type": "int"
        }, {"name": "admin_id", "type": "int"}, {"name": "participant_id", "type": "int"}, {
            "name": "g_a_or_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }, {"name": "connection", "type": "PhoneConnection"}, {
            "name": "alternative_connections",
            "type": "Vector<PhoneConnection>"
        }, {"name": "start_date", "type": "int"}],
        "type": "PhoneCall"
    }, {
        "id": "1355435489",
        "predicate": "phoneCallDiscarded",
        "params": [{"name": "flags", "type": "#"}, {"name": "need_rating", "type": "flags.2?true"}, {
            "name": "need_debug",
            "type": "flags.3?true"
        }, {"name": "id", "type": "long"}, {
            "name": "reason",
            "type": "flags.0?PhoneCallDiscardReason"
        }, {"name": "duration", "type": "flags.1?int"}],
        "type": "PhoneCall"
    }, {
        "id": "-1655957568",
        "predicate": "phoneConnection",
        "params": [{"name": "id", "type": "long"}, {"name": "ip", "type": "string"}, {
            "name": "ipv6",
            "type": "string"
        }, {"name": "port", "type": "int"}, {"name": "peer_tag", "type": "bytes"}],
        "type": "PhoneConnection"
    }, {
        "id": "-1564789301",
        "predicate": "phoneCallProtocol",
        "params": [{"name": "flags", "type": "#"}, {"name": "udp_p2p", "type": "flags.0?true"}, {
            "name": "udp_reflector",
            "type": "flags.1?true"
        }, {"name": "min_layer", "type": "int"}, {"name": "max_layer", "type": "int"}],
        "type": "PhoneCallProtocol"
    }, {
        "id": "-326966976",
        "predicate": "phone.phoneCall",
        "params": [{"name": "phone_call", "type": "PhoneCall"}, {"name": "users", "type": "Vector<User>"}],
        "type": "phone.PhoneCall"
    }, {
        "id": "-2134272152",
        "predicate": "inputMessagesFilterPhoneCalls",
        "params": [{"name": "flags", "type": "#"}, {"name": "missed", "type": "flags.0?true"}],
        "type": "MessagesFilter"
    }, {
        "id": "-2132731265",
        "predicate": "messageActionPhoneCall",
        "params": [{"name": "flags", "type": "#"}, {"name": "call_id", "type": "long"}, {
            "name": "reason",
            "type": "flags.0?PhoneCallDiscardReason"
        }, {"name": "duration", "type": "flags.1?int"}],
        "type": "MessageAction"
    }, {
        "id": "2054952868",
        "predicate": "inputMessagesFilterRoundVoice",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1253451181",
        "predicate": "inputMessagesFilterRoundVideo",
        "params": [],
        "type": "MessagesFilter"
    }, {
        "id": "-1997373508",
        "predicate": "sendMessageRecordRoundAction",
        "params": [],
        "type": "SendMessageAction"
    }, {
        "id": "608050278",
        "predicate": "sendMessageUploadRoundAction",
        "params": [{"name": "progress", "type": "int"}],
        "type": "SendMessageAction"
    }, {
        "id": "352864346",
        "predicate": "upload.fileCdnRedirect",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "file_token", "type": "bytes"}, {
            "name": "encryption_key",
            "type": "bytes"
        }, {"name": "encryption_iv", "type": "bytes"}],
        "type": "upload.File"
    }, {
        "id": "-290921362",
        "predicate": "upload.cdnFileReuploadNeeded",
        "params": [{"name": "request_token", "type": "bytes"}],
        "type": "upload.CdnFile"
    }, {
        "id": "-1449145777",
        "predicate": "upload.cdnFile",
        "params": [{"name": "bytes", "type": "bytes"}],
        "type": "upload.CdnFile"
    }, {
        "id": "-914167110",
        "predicate": "cdnPublicKey",
        "params": [{"name": "dc_id", "type": "int"}, {"name": "public_key", "type": "string"}],
        "type": "CdnPublicKey"
    }, {
        "id": "1462101002",
        "predicate": "cdnConfig",
        "params": [{"name": "public_keys", "type": "Vector<CdnPublicKey>"}],
        "type": "CdnConfig"
    }, {
        "id": "-283684427",
        "predicate": "pageBlockChannel",
        "params": [{"name": "channel", "type": "Chat"}],
        "type": "PageBlock"
    }],
    "methods": [{
        "id": "-878758099",
        "method": "invokeAfterMsg",
        "params": [{"name": "msg_id", "type": "long"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "id": "1036301552",
        "method": "invokeAfterMsgs",
        "params": [{"name": "msg_ids", "type": "Vector<long>"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "id": "1877286395",
        "method": "auth.checkPhone",
        "params": [{"name": "phone_number", "type": "string"}],
        "type": "auth.CheckedPhone"
    }, {
        "id": "-2035355412",
        "method": "auth.sendCode",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "allow_flashcall",
            "type": "flags.0?true"
        }, {"name": "phone_number", "type": "string"}, {
            "name": "current_number",
            "type": "flags.0?Bool"
        }, {"name": "api_id", "type": "int"}, {"name": "api_hash", "type": "string"}],
        "type": "auth.SentCode"
    }, {
        "id": "453408308",
        "method": "auth.signUp",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}, {"name": "first_name", "type": "string"}, {
            "name": "last_name",
            "type": "string"
        }],
        "type": "auth.Authorization"
    }, {
        "id": "-1126886015",
        "method": "auth.signIn",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}],
        "type": "auth.Authorization"
    }, {"id": "1461180992", "method": "auth.logOut", "params": [], "type": "Bool"}, {
        "id": "-1616179942",
        "method": "auth.resetAuthorizations",
        "params": [],
        "type": "Bool"
    }, {
        "id": "1998331287",
        "method": "auth.sendInvites",
        "params": [{"name": "phone_numbers", "type": "Vector<string>"}, {"name": "message", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "-440401971",
        "method": "auth.exportAuthorization",
        "params": [{"name": "dc_id", "type": "int"}],
        "type": "auth.ExportedAuthorization"
    }, {
        "id": "-470837741",
        "method": "auth.importAuthorization",
        "params": [{"name": "id", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "auth.Authorization"
    }, {
        "id": "-841733627",
        "method": "auth.bindTempAuthKey",
        "params": [{"name": "perm_auth_key_id", "type": "long"}, {
            "name": "nonce",
            "type": "long"
        }, {"name": "expires_at", "type": "int"}, {"name": "encrypted_message", "type": "bytes"}],
        "type": "Bool"
    }, {
        "id": "1669245048",
        "method": "account.registerDevice",
        "params": [{"name": "token_type", "type": "int"}, {"name": "token", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "1707432768",
        "method": "account.unregisterDevice",
        "params": [{"name": "token_type", "type": "int"}, {"name": "token", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "-2067899501",
        "method": "account.updateNotifySettings",
        "params": [{"name": "peer", "type": "InputNotifyPeer"}, {
            "name": "settings",
            "type": "InputPeerNotifySettings"
        }],
        "type": "Bool"
    }, {
        "id": "313765169",
        "method": "account.getNotifySettings",
        "params": [{"name": "peer", "type": "InputNotifyPeer"}],
        "type": "PeerNotifySettings"
    }, {"id": "-612493497", "method": "account.resetNotifySettings", "params": [], "type": "Bool"}, {
        "id": "2018596725",
        "method": "account.updateProfile",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "first_name",
            "type": "flags.0?string"
        }, {"name": "last_name", "type": "flags.1?string"}, {"name": "about", "type": "flags.2?string"}],
        "type": "User"
    }, {
        "id": "1713919532",
        "method": "account.updateStatus",
        "params": [{"name": "offline", "type": "Bool"}],
        "type": "Bool"
    }, {
        "id": "-1068696894",
        "method": "account.getWallPapers",
        "params": [],
        "type": "Vector<WallPaper>"
    }, {
        "id": "-1374118561",
        "method": "account.reportPeer",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "reason", "type": "ReportReason"}],
        "type": "Bool"
    }, {
        "id": "227648840",
        "method": "users.getUsers",
        "params": [{"name": "id", "type": "Vector<InputUser>"}],
        "type": "Vector<User>"
    }, {
        "id": "-902781519",
        "method": "users.getFullUser",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "UserFull"
    }, {
        "id": "-995929106",
        "method": "contacts.getStatuses",
        "params": [],
        "type": "Vector<ContactStatus>"
    }, {
        "id": "583445000",
        "method": "contacts.getContacts",
        "params": [{"name": "hash", "type": "string"}],
        "type": "contacts.Contacts"
    }, {
        "id": "-634342611",
        "method": "contacts.importContacts",
        "params": [{"name": "contacts", "type": "Vector<InputContact>"}, {"name": "replace", "type": "Bool"}],
        "type": "contacts.ImportedContacts"
    }, {
        "id": "-1902823612",
        "method": "contacts.deleteContact",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "contacts.Link"
    }, {
        "id": "1504393374",
        "method": "contacts.deleteContacts",
        "params": [{"name": "id", "type": "Vector<InputUser>"}],
        "type": "Bool"
    }, {
        "id": "858475004",
        "method": "contacts.block",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "Bool"
    }, {
        "id": "-448724803",
        "method": "contacts.unblock",
        "params": [{"name": "id", "type": "InputUser"}],
        "type": "Bool"
    }, {
        "id": "-176409329",
        "method": "contacts.getBlocked",
        "params": [{"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "contacts.Blocked"
    }, {"id": "-2065352905", "method": "contacts.exportCard", "params": [], "type": "Vector<int>"}, {
        "id": "1340184318",
        "method": "contacts.importCard",
        "params": [{"name": "export_card", "type": "Vector<int>"}],
        "type": "User"
    }, {
        "id": "1109588596",
        "method": "messages.getMessages",
        "params": [{"name": "id", "type": "Vector<int>"}],
        "type": "messages.Messages"
    }, {
        "id": "421243333",
        "method": "messages.getDialogs",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "exclude_pinned",
            "type": "flags.0?true"
        }, {"name": "offset_date", "type": "int"}, {"name": "offset_id", "type": "int"}, {
            "name": "offset_peer",
            "type": "InputPeer"
        }, {"name": "limit", "type": "int"}],
        "type": "messages.Dialogs"
    }, {
        "id": "-1347868602",
        "method": "messages.getHistory",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "offset_id", "type": "int"}, {
            "name": "offset_date",
            "type": "int"
        }, {"name": "add_offset", "type": "int"}, {"name": "limit", "type": "int"}, {
            "name": "max_id",
            "type": "int"
        }, {"name": "min_id", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "id": "-732523960",
        "method": "messages.search",
        "params": [{"name": "flags", "type": "#"}, {"name": "peer", "type": "InputPeer"}, {
            "name": "q",
            "type": "string"
        }, {"name": "filter", "type": "MessagesFilter"}, {"name": "min_date", "type": "int"}, {
            "name": "max_date",
            "type": "int"
        }, {"name": "offset", "type": "int"}, {"name": "max_id", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "id": "238054714",
        "method": "messages.readHistory",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "max_id", "type": "int"}],
        "type": "messages.AffectedMessages"
    }, {
        "id": "469850889",
        "method": "messages.deleteHistory",
        "params": [{"name": "flags", "type": "#"}, {"name": "just_clear", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "max_id", "type": "int"}],
        "type": "messages.AffectedHistory"
    }, {
        "id": "-443640366",
        "method": "messages.deleteMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "revoke", "type": "flags.0?true"}, {
            "name": "id",
            "type": "Vector<int>"
        }],
        "type": "messages.AffectedMessages"
    }, {
        "id": "94983360",
        "method": "messages.receivedMessages",
        "params": [{"name": "max_id", "type": "int"}],
        "type": "Vector<ReceivedNotifyMessage>"
    }, {
        "id": "-1551737264",
        "method": "messages.setTyping",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "action", "type": "SendMessageAction"}],
        "type": "Bool"
    }, {
        "id": "-91733382",
        "method": "messages.sendMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "silent",
            "type": "flags.5?true"
        }, {"name": "background", "type": "flags.6?true"}, {
            "name": "clear_draft",
            "type": "flags.7?true"
        }, {"name": "peer", "type": "InputPeer"}, {
            "name": "reply_to_msg_id",
            "type": "flags.0?int"
        }, {"name": "message", "type": "string"}, {"name": "random_id", "type": "long"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}],
        "type": "Updates"
    }, {
        "id": "-923703407",
        "method": "messages.sendMedia",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "clear_draft", "type": "flags.7?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "media",
            "type": "InputMedia"
        }, {"name": "random_id", "type": "long"}, {"name": "reply_markup", "type": "flags.2?ReplyMarkup"}],
        "type": "Updates"
    }, {
        "id": "1888354709",
        "method": "messages.forwardMessages",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "with_my_score", "type": "flags.8?true"}, {"name": "from_peer", "type": "InputPeer"}, {
            "name": "id",
            "type": "Vector<int>"
        }, {"name": "random_id", "type": "Vector<long>"}, {"name": "to_peer", "type": "InputPeer"}],
        "type": "Updates"
    }, {
        "id": "-820669733",
        "method": "messages.reportSpam",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "id": "-1460572005",
        "method": "messages.hideReportSpam",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "id": "913498268",
        "method": "messages.getPeerSettings",
        "params": [{"name": "peer", "type": "InputPeer"}],
        "type": "PeerSettings"
    }, {
        "id": "1013621127",
        "method": "messages.getChats",
        "params": [{"name": "id", "type": "Vector<int>"}],
        "type": "messages.Chats"
    }, {
        "id": "998448230",
        "method": "messages.getFullChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "messages.ChatFull"
    }, {
        "id": "-599447467",
        "method": "messages.editChatTitle",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "-900957736",
        "method": "messages.editChatPhoto",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "photo", "type": "InputChatPhoto"}],
        "type": "Updates"
    }, {
        "id": "-106911223",
        "method": "messages.addChatUser",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "fwd_limit",
            "type": "int"
        }],
        "type": "Updates"
    }, {
        "id": "-530505962",
        "method": "messages.deleteChatUser",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}],
        "type": "Updates"
    }, {
        "id": "164303470",
        "method": "messages.createChat",
        "params": [{"name": "users", "type": "Vector<InputUser>"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {"id": "-304838614", "method": "updates.getState", "params": [], "type": "updates.State"}, {
        "id": "630429265",
        "method": "updates.getDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "pts", "type": "int"}, {
            "name": "pts_total_limit",
            "type": "flags.0?int"
        }, {"name": "date", "type": "int"}, {"name": "qts", "type": "int"}],
        "type": "updates.Difference"
    }, {
        "id": "-256159406",
        "method": "photos.updateProfilePhoto",
        "params": [{"name": "id", "type": "InputPhoto"}],
        "type": "UserProfilePhoto"
    }, {
        "id": "1328726168",
        "method": "photos.uploadProfilePhoto",
        "params": [{"name": "file", "type": "InputFile"}],
        "type": "photos.Photo"
    }, {
        "id": "-2016444625",
        "method": "photos.deletePhotos",
        "params": [{"name": "id", "type": "Vector<InputPhoto>"}],
        "type": "Vector<long>"
    }, {
        "id": "-1291540959",
        "method": "upload.saveFilePart",
        "params": [{"name": "file_id", "type": "long"}, {"name": "file_part", "type": "int"}, {
            "name": "bytes",
            "type": "bytes"
        }],
        "type": "Bool"
    }, {
        "id": "-475607115",
        "method": "upload.getFile",
        "params": [{"name": "location", "type": "InputFileLocation"}, {
            "name": "offset",
            "type": "int"
        }, {"name": "limit", "type": "int"}],
        "type": "upload.File"
    }, {"id": "-990308245", "method": "help.getConfig", "params": [], "type": "Config"}, {
        "id": "531836966",
        "method": "help.getNearestDc",
        "params": [],
        "type": "NearestDc"
    }, {
        "id": "-1372724842",
        "method": "help.getAppUpdate",
        "params": [],
        "type": "help.AppUpdate"
    }, {
        "id": "1862465352",
        "method": "help.saveAppLog",
        "params": [{"name": "events", "type": "Vector<InputAppEvent>"}],
        "type": "Bool"
    }, {
        "id": "1295590211",
        "method": "help.getInviteText",
        "params": [],
        "type": "help.InviteText"
    }, {
        "id": "-1848823128",
        "method": "photos.getUserPhotos",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "offset", "type": "int"}, {
            "name": "max_id",
            "type": "long"
        }, {"name": "limit", "type": "int"}],
        "type": "photos.Photos"
    }, {
        "id": "865483769",
        "method": "messages.forwardMessage",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}, {
            "name": "random_id",
            "type": "long"
        }],
        "type": "Updates"
    }, {
        "id": "651135312",
        "method": "messages.getDhConfig",
        "params": [{"name": "version", "type": "int"}, {"name": "random_length", "type": "int"}],
        "type": "messages.DhConfig"
    }, {
        "id": "-162681021",
        "method": "messages.requestEncryption",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "random_id", "type": "int"}, {
            "name": "g_a",
            "type": "bytes"
        }],
        "type": "EncryptedChat"
    }, {
        "id": "1035731989",
        "method": "messages.acceptEncryption",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "g_b",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}],
        "type": "EncryptedChat"
    }, {
        "id": "-304536635",
        "method": "messages.discardEncryption",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "2031374829",
        "method": "messages.setEncryptedTyping",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {"name": "typing", "type": "Bool"}],
        "type": "Bool"
    }, {
        "id": "2135648522",
        "method": "messages.readEncryptedHistory",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {"name": "max_date", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "-1451792525",
        "method": "messages.sendEncrypted",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "id": "-1701831834",
        "method": "messages.sendEncryptedFile",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}, {"name": "file", "type": "InputEncryptedFile"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "id": "852769188",
        "method": "messages.sendEncryptedService",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "data", "type": "bytes"}],
        "type": "messages.SentEncryptedMessage"
    }, {
        "id": "1436924774",
        "method": "messages.receivedQueue",
        "params": [{"name": "max_qts", "type": "int"}],
        "type": "Vector<long>"
    }, {
        "id": "1259113487",
        "method": "messages.reportEncryptedSpam",
        "params": [{"name": "peer", "type": "InputEncryptedChat"}],
        "type": "Bool"
    }, {
        "id": "-562337987",
        "method": "upload.saveBigFilePart",
        "params": [{"name": "file_id", "type": "long"}, {
            "name": "file_part",
            "type": "int"
        }, {"name": "file_total_parts", "type": "int"}, {"name": "bytes", "type": "bytes"}],
        "type": "Bool"
    }, {
        "id": "1769565673",
        "method": "initConnection",
        "params": [{"name": "api_id", "type": "int"}, {
            "name": "device_model",
            "type": "string"
        }, {"name": "system_version", "type": "string"}, {
            "name": "app_version",
            "type": "string"
        }, {"name": "lang_code", "type": "string"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {"id": "-1663104819", "method": "help.getSupport", "params": [], "type": "help.Support"}, {
        "id": "916930423",
        "method": "messages.readMessageContents",
        "params": [{"name": "id", "type": "Vector<int>"}],
        "type": "messages.AffectedMessages"
    }, {
        "id": "655677548",
        "method": "account.checkUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "1040964988",
        "method": "account.updateUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "User"
    }, {
        "id": "301470424",
        "method": "contacts.search",
        "params": [{"name": "q", "type": "string"}, {"name": "limit", "type": "int"}],
        "type": "contacts.Found"
    }, {
        "id": "-623130288",
        "method": "account.getPrivacy",
        "params": [{"name": "key", "type": "InputPrivacyKey"}],
        "type": "account.PrivacyRules"
    }, {
        "id": "-906486552",
        "method": "account.setPrivacy",
        "params": [{"name": "key", "type": "InputPrivacyKey"}, {"name": "rules", "type": "Vector<InputPrivacyRule>"}],
        "type": "account.PrivacyRules"
    }, {
        "id": "1099779595",
        "method": "account.deleteAccount",
        "params": [{"name": "reason", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "150761757",
        "method": "account.getAccountTTL",
        "params": [],
        "type": "AccountDaysTTL"
    }, {
        "id": "608323678",
        "method": "account.setAccountTTL",
        "params": [{"name": "ttl", "type": "AccountDaysTTL"}],
        "type": "Bool"
    }, {
        "id": "-627372787",
        "method": "invokeWithLayer",
        "params": [{"name": "layer", "type": "int"}, {"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "id": "-113456221",
        "method": "contacts.resolveUsername",
        "params": [{"name": "username", "type": "string"}],
        "type": "contacts.ResolvedPeer"
    }, {
        "id": "149257707",
        "method": "account.sendChangePhoneCode",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "allow_flashcall",
            "type": "flags.0?true"
        }, {"name": "phone_number", "type": "string"}, {"name": "current_number", "type": "flags.0?Bool"}],
        "type": "auth.SentCode"
    }, {
        "id": "1891839707",
        "method": "account.changePhone",
        "params": [{"name": "phone_number", "type": "string"}, {
            "name": "phone_code_hash",
            "type": "string"
        }, {"name": "phone_code", "type": "string"}],
        "type": "User"
    }, {
        "id": "479598769",
        "method": "messages.getAllStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.AllStickers"
    }, {
        "id": "954152242",
        "method": "account.updateDeviceLocked",
        "params": [{"name": "period", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "1738800940",
        "method": "auth.importBotAuthorization",
        "params": [{"name": "flags", "type": "int"}, {"name": "api_id", "type": "int"}, {
            "name": "api_hash",
            "type": "string"
        }, {"name": "bot_auth_token", "type": "string"}],
        "type": "auth.Authorization"
    }, {
        "id": "623001124",
        "method": "messages.getWebPagePreview",
        "params": [{"name": "message", "type": "string"}],
        "type": "MessageMedia"
    }, {
        "id": "-484392616",
        "method": "account.getAuthorizations",
        "params": [],
        "type": "account.Authorizations"
    }, {
        "id": "-545786948",
        "method": "account.resetAuthorization",
        "params": [{"name": "hash", "type": "long"}],
        "type": "Bool"
    }, {
        "id": "1418342645",
        "method": "account.getPassword",
        "params": [],
        "type": "account.Password"
    }, {
        "id": "-1131605573",
        "method": "account.getPasswordSettings",
        "params": [{"name": "current_password_hash", "type": "bytes"}],
        "type": "account.PasswordSettings"
    }, {
        "id": "-92517498",
        "method": "account.updatePasswordSettings",
        "params": [{"name": "current_password_hash", "type": "bytes"}, {
            "name": "new_settings",
            "type": "account.PasswordInputSettings"
        }],
        "type": "Bool"
    }, {
        "id": "174260510",
        "method": "auth.checkPassword",
        "params": [{"name": "password_hash", "type": "bytes"}],
        "type": "auth.Authorization"
    }, {
        "id": "-661144474",
        "method": "auth.requestPasswordRecovery",
        "params": [],
        "type": "auth.PasswordRecovery"
    }, {
        "id": "1319464594",
        "method": "auth.recoverPassword",
        "params": [{"name": "code", "type": "string"}],
        "type": "auth.Authorization"
    }, {
        "id": "-1080796745",
        "method": "invokeWithoutUpdates",
        "params": [{"name": "query", "type": "!X"}],
        "type": "X"
    }, {
        "id": "2106086025",
        "method": "messages.exportChatInvite",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "ExportedChatInvite"
    }, {
        "id": "1051570619",
        "method": "messages.checkChatInvite",
        "params": [{"name": "hash", "type": "string"}],
        "type": "ChatInvite"
    }, {
        "id": "1817183516",
        "method": "messages.importChatInvite",
        "params": [{"name": "hash", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "639215886",
        "method": "messages.getStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}],
        "type": "messages.StickerSet"
    }, {
        "id": "-946871200",
        "method": "messages.installStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {"name": "archived", "type": "Bool"}],
        "type": "messages.StickerSetInstallResult"
    }, {
        "id": "-110209570",
        "method": "messages.uninstallStickerSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}],
        "type": "Bool"
    }, {
        "id": "-421563528",
        "method": "messages.startBot",
        "params": [{"name": "bot", "type": "InputUser"}, {"name": "peer", "type": "InputPeer"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "start_param", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "-1877938321",
        "method": "help.getAppChangelog",
        "params": [{"name": "prev_app_version", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "-993483427",
        "method": "messages.getMessagesViews",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "Vector<int>"}, {
            "name": "increment",
            "type": "Bool"
        }],
        "type": "Vector<int>"
    }, {
        "id": "-871347913",
        "method": "channels.readHistory",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "max_id", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "-2067661490",
        "method": "channels.deleteMessages",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "Vector<int>"}],
        "type": "messages.AffectedMessages"
    }, {
        "id": "-787622117",
        "method": "channels.deleteUserHistory",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}],
        "type": "messages.AffectedHistory"
    }, {
        "id": "-32999408",
        "method": "channels.reportSpam",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "id",
            "type": "Vector<int>"
        }],
        "type": "Bool"
    }, {
        "id": "-1814580409",
        "method": "channels.getMessages",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "Vector<int>"}],
        "type": "messages.Messages"
    }, {
        "id": "618237842",
        "method": "channels.getParticipants",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "filter",
            "type": "ChannelParticipantsFilter"
        }, {"name": "offset", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "channels.ChannelParticipants"
    }, {
        "id": "1416484774",
        "method": "channels.getParticipant",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "user_id", "type": "InputUser"}],
        "type": "channels.ChannelParticipant"
    }, {
        "id": "176122811",
        "method": "channels.getChannels",
        "params": [{"name": "id", "type": "Vector<InputChannel>"}],
        "type": "messages.Chats"
    }, {
        "id": "141781513",
        "method": "channels.getFullChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "messages.ChatFull"
    }, {
        "id": "-192332417",
        "method": "channels.createChannel",
        "params": [{"name": "flags", "type": "#"}, {"name": "broadcast", "type": "flags.0?true"}, {
            "name": "megagroup",
            "type": "flags.1?true"
        }, {"name": "title", "type": "string"}, {"name": "about", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "333610782",
        "method": "channels.editAbout",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "about", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "-344583728",
        "method": "channels.editAdmin",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "role", "type": "ChannelParticipantRole"}],
        "type": "Updates"
    }, {
        "id": "1450044624",
        "method": "channels.editTitle",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "title", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "-248621111",
        "method": "channels.editPhoto",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "photo", "type": "InputChatPhoto"}],
        "type": "Updates"
    }, {
        "id": "283557164",
        "method": "channels.checkUsername",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "890549214",
        "method": "channels.updateUsername",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "username", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "615851205",
        "method": "channels.joinChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "id": "-130635115",
        "method": "channels.leaveChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "id": "429865580",
        "method": "channels.inviteToChannel",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "users", "type": "Vector<InputUser>"}],
        "type": "Updates"
    }, {
        "id": "-1502421484",
        "method": "channels.kickFromChannel",
        "params": [{"name": "channel", "type": "InputChannel"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "kicked", "type": "Bool"}],
        "type": "Updates"
    }, {
        "id": "-950663035",
        "method": "channels.exportInvite",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "ExportedChatInvite"
    }, {
        "id": "-1072619549",
        "method": "channels.deleteChannel",
        "params": [{"name": "channel", "type": "InputChannel"}],
        "type": "Updates"
    }, {
        "id": "51854712",
        "method": "updates.getChannelDifference",
        "params": [{"name": "flags", "type": "#"}, {"name": "force", "type": "flags.0?true"}, {
            "name": "channel",
            "type": "InputChannel"
        }, {"name": "filter", "type": "ChannelMessagesFilter"}, {"name": "pts", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "updates.ChannelDifference"
    }, {
        "id": "-326379039",
        "method": "messages.toggleChatAdmins",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "enabled", "type": "Bool"}],
        "type": "Updates"
    }, {
        "id": "-1444503762",
        "method": "messages.editChatAdmin",
        "params": [{"name": "chat_id", "type": "int"}, {"name": "user_id", "type": "InputUser"}, {
            "name": "is_admin",
            "type": "Bool"
        }],
        "type": "Bool"
    }, {
        "id": "363051235",
        "method": "messages.migrateChat",
        "params": [{"name": "chat_id", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "-1640190800",
        "method": "messages.searchGlobal",
        "params": [{"name": "q", "type": "string"}, {"name": "offset_date", "type": "int"}, {
            "name": "offset_peer",
            "type": "InputPeer"
        }, {"name": "offset_id", "type": "int"}, {"name": "limit", "type": "int"}],
        "type": "messages.Messages"
    }, {
        "id": "889286899",
        "method": "help.getTermsOfService",
        "params": [],
        "type": "help.TermsOfService"
    }, {
        "id": "2016638777",
        "method": "messages.reorderStickerSets",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "order",
            "type": "Vector<long>"
        }],
        "type": "Bool"
    }, {
        "id": "864953444",
        "method": "messages.getDocumentByHash",
        "params": [{"name": "sha256", "type": "bytes"}, {"name": "size", "type": "int"}, {
            "name": "mime_type",
            "type": "string"
        }],
        "type": "Document"
    }, {
        "id": "-1080395925",
        "method": "messages.searchGifs",
        "params": [{"name": "q", "type": "string"}, {"name": "offset", "type": "int"}],
        "type": "messages.FoundGifs"
    }, {
        "id": "-2084618926",
        "method": "messages.getSavedGifs",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.SavedGifs"
    }, {
        "id": "846868683",
        "method": "messages.saveGif",
        "params": [{"name": "id", "type": "InputDocument"}, {"name": "unsave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "id": "1364105629",
        "method": "messages.getInlineBotResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "bot", "type": "InputUser"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "geo_point", "type": "flags.0?InputGeoPoint"}, {
            "name": "query",
            "type": "string"
        }, {"name": "offset", "type": "string"}],
        "type": "messages.BotResults"
    }, {
        "id": "-346119674",
        "method": "messages.setInlineBotResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "gallery", "type": "flags.0?true"}, {
            "name": "private",
            "type": "flags.1?true"
        }, {"name": "query_id", "type": "long"}, {
            "name": "results",
            "type": "Vector<InputBotInlineResult>"
        }, {"name": "cache_time", "type": "int"}, {
            "name": "next_offset",
            "type": "flags.2?string"
        }, {"name": "switch_pm", "type": "flags.3?InlineBotSwitchPM"}],
        "type": "Bool"
    }, {
        "id": "-1318189314",
        "method": "messages.sendInlineBotResult",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.5?true"}, {
            "name": "background",
            "type": "flags.6?true"
        }, {"name": "clear_draft", "type": "flags.7?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "random_id",
            "type": "long"
        }, {"name": "query_id", "type": "long"}, {"name": "id", "type": "string"}],
        "type": "Updates"
    }, {
        "id": "1231065863",
        "method": "channels.toggleInvites",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "enabled", "type": "Bool"}],
        "type": "Updates"
    }, {
        "id": "-934882771",
        "method": "channels.exportMessageLink",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "id", "type": "int"}],
        "type": "ExportedMessageLink"
    }, {
        "id": "527021574",
        "method": "channels.toggleSignatures",
        "params": [{"name": "channel", "type": "InputChannel"}, {"name": "enabled", "type": "Bool"}],
        "type": "Updates"
    }, {
        "id": "-1490162350",
        "method": "channels.updatePinnedMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "silent", "type": "flags.0?true"}, {
            "name": "channel",
            "type": "InputChannel"
        }, {"name": "id", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "1056025023",
        "method": "auth.resendCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "phone_code_hash", "type": "string"}],
        "type": "auth.SentCode"
    }, {
        "id": "520357240",
        "method": "auth.cancelCode",
        "params": [{"name": "phone_number", "type": "string"}, {"name": "phone_code_hash", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "-39416522",
        "method": "messages.getMessageEditData",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}],
        "type": "messages.MessageEditData"
    }, {
        "id": "-829299510",
        "method": "messages.editMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "id", "type": "int"}, {"name": "message", "type": "flags.11?string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}],
        "type": "Updates"
    }, {
        "id": "319564933",
        "method": "messages.editInlineBotMessage",
        "params": [{"name": "flags", "type": "#"}, {"name": "no_webpage", "type": "flags.1?true"}, {
            "name": "id",
            "type": "InputBotInlineMessageID"
        }, {"name": "message", "type": "flags.11?string"}, {
            "name": "reply_markup",
            "type": "flags.2?ReplyMarkup"
        }, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}],
        "type": "Bool"
    }, {
        "id": "-2130010132",
        "method": "messages.getBotCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "game", "type": "flags.1?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "msg_id", "type": "int"}, {"name": "data", "type": "flags.0?bytes"}],
        "type": "messages.BotCallbackAnswer"
    }, {
        "id": "-712043766",
        "method": "messages.setBotCallbackAnswer",
        "params": [{"name": "flags", "type": "#"}, {"name": "alert", "type": "flags.1?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "message", "type": "flags.0?string"}, {
            "name": "url",
            "type": "flags.2?string"
        }, {"name": "cache_time", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "-728224331",
        "method": "contacts.getTopPeers",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "correspondents",
            "type": "flags.0?true"
        }, {"name": "bots_pm", "type": "flags.1?true"}, {
            "name": "bots_inline",
            "type": "flags.2?true"
        }, {"name": "phone_calls", "type": "flags.3?true"}, {
            "name": "groups",
            "type": "flags.10?true"
        }, {"name": "channels", "type": "flags.15?true"}, {"name": "offset", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }, {"name": "hash", "type": "int"}],
        "type": "contacts.TopPeers"
    }, {
        "id": "451113900",
        "method": "contacts.resetTopPeerRating",
        "params": [{"name": "category", "type": "TopPeerCategory"}, {"name": "peer", "type": "InputPeer"}],
        "type": "Bool"
    }, {
        "id": "764901049",
        "method": "messages.getPeerDialogs",
        "params": [{"name": "peers", "type": "Vector<InputPeer>"}],
        "type": "messages.PeerDialogs"
    }, {
        "id": "-1137057461",
        "method": "messages.saveDraft",
        "params": [{"name": "flags", "type": "#"}, {
            "name": "no_webpage",
            "type": "flags.1?true"
        }, {"name": "reply_to_msg_id", "type": "flags.0?int"}, {
            "name": "peer",
            "type": "InputPeer"
        }, {"name": "message", "type": "string"}, {"name": "entities", "type": "flags.3?Vector<MessageEntity>"}],
        "type": "Bool"
    }, {"id": "1782549861", "method": "messages.getAllDrafts", "params": [], "type": "Updates"}, {
        "id": "766298703",
        "method": "messages.getFeaturedStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.FeaturedStickers"
    }, {
        "id": "1527873830",
        "method": "messages.readFeaturedStickers",
        "params": [{"name": "id", "type": "Vector<long>"}],
        "type": "Bool"
    }, {
        "id": "1587647177",
        "method": "messages.getRecentStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}, {
            "name": "hash",
            "type": "int"
        }],
        "type": "messages.RecentStickers"
    }, {
        "id": "958863608",
        "method": "messages.saveRecentSticker",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}, {
            "name": "id",
            "type": "InputDocument"
        }, {"name": "unsave", "type": "Bool"}],
        "type": "Bool"
    }, {
        "id": "-1986437075",
        "method": "messages.clearRecentStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "attached", "type": "flags.0?true"}],
        "type": "Bool"
    }, {
        "id": "1475442322",
        "method": "messages.getArchivedStickers",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "offset_id",
            "type": "long"
        }, {"name": "limit", "type": "int"}],
        "type": "messages.ArchivedStickers"
    }, {
        "id": "353818557",
        "method": "account.sendConfirmPhoneCode",
        "params": [{"name": "flags", "type": "#"}, {"name": "allow_flashcall", "type": "flags.0?true"}, {
            "name": "hash",
            "type": "string"
        }, {"name": "current_number", "type": "flags.0?Bool"}],
        "type": "auth.SentCode"
    }, {
        "id": "1596029123",
        "method": "account.confirmPhone",
        "params": [{"name": "phone_code_hash", "type": "string"}, {"name": "phone_code", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "-1920105769",
        "method": "channels.getAdminedPublicChannels",
        "params": [],
        "type": "messages.Chats"
    }, {
        "id": "1706608543",
        "method": "messages.getMaskStickers",
        "params": [{"name": "hash", "type": "int"}],
        "type": "messages.AllStickers"
    }, {
        "id": "-866424884",
        "method": "messages.getAttachedStickers",
        "params": [{"name": "media", "type": "InputStickeredMedia"}],
        "type": "Vector<StickerSetCovered>"
    }, {
        "id": "-1907842680",
        "method": "auth.dropTempAuthKeys",
        "params": [{"name": "except_auth_keys", "type": "Vector<long>"}],
        "type": "Bool"
    }, {
        "id": "-1896289088",
        "method": "messages.setGameScore",
        "params": [{"name": "flags", "type": "#"}, {"name": "edit_message", "type": "flags.0?true"}, {
            "name": "force",
            "type": "flags.1?true"
        }, {"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "score", "type": "int"}],
        "type": "Updates"
    }, {
        "id": "363700068",
        "method": "messages.setInlineGameScore",
        "params": [{"name": "flags", "type": "#"}, {"name": "edit_message", "type": "flags.0?true"}, {
            "name": "force",
            "type": "flags.1?true"
        }, {"name": "id", "type": "InputBotInlineMessageID"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "score", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "-400399203",
        "method": "messages.getGameHighScores",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "id", "type": "int"}, {
            "name": "user_id",
            "type": "InputUser"
        }],
        "type": "messages.HighScores"
    }, {
        "id": "258170395",
        "method": "messages.getInlineGameHighScores",
        "params": [{"name": "id", "type": "InputBotInlineMessageID"}, {"name": "user_id", "type": "InputUser"}],
        "type": "messages.HighScores"
    }, {
        "id": "218777796",
        "method": "messages.getCommonChats",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "max_id", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "messages.Chats"
    }, {
        "id": "-341307408",
        "method": "messages.getAllChats",
        "params": [{"name": "except_ids", "type": "Vector<int>"}],
        "type": "messages.Chats"
    }, {
        "id": "-333262899",
        "method": "help.setBotUpdatesStatus",
        "params": [{"name": "pending_updates_count", "type": "int"}, {"name": "message", "type": "string"}],
        "type": "Bool"
    }, {
        "id": "852135825",
        "method": "messages.getWebPage",
        "params": [{"name": "url", "type": "string"}, {"name": "hash", "type": "int"}],
        "type": "WebPage"
    }, {
        "id": "847887978",
        "method": "messages.toggleDialogPin",
        "params": [{"name": "flags", "type": "#"}, {"name": "pinned", "type": "flags.0?true"}, {
            "name": "peer",
            "type": "InputPeer"
        }],
        "type": "Bool"
    }, {
        "id": "-1784678844",
        "method": "messages.reorderPinnedDialogs",
        "params": [{"name": "flags", "type": "#"}, {"name": "force", "type": "flags.0?true"}, {
            "name": "order",
            "type": "Vector<InputPeer>"
        }],
        "type": "Bool"
    }, {
        "id": "-497756594",
        "method": "messages.getPinnedDialogs",
        "params": [],
        "type": "messages.PeerDialogs"
    }, {
        "id": "-1440257555",
        "method": "bots.sendCustomRequest",
        "params": [{"name": "custom_method", "type": "string"}, {"name": "params", "type": "DataJSON"}],
        "type": "DataJSON"
    }, {
        "id": "-434028723",
        "method": "bots.answerWebhookJSONQuery",
        "params": [{"name": "query_id", "type": "long"}, {"name": "data", "type": "DataJSON"}],
        "type": "Bool"
    }, {
        "id": "619086221",
        "method": "upload.getWebFile",
        "params": [{"name": "location", "type": "InputWebFileLocation"}, {
            "name": "offset",
            "type": "int"
        }, {"name": "limit", "type": "int"}],
        "type": "upload.WebFile"
    }, {
        "id": "-1712285883",
        "method": "payments.getPaymentForm",
        "params": [{"name": "msg_id", "type": "int"}],
        "type": "payments.PaymentForm"
    }, {
        "id": "-1601001088",
        "method": "payments.getPaymentReceipt",
        "params": [{"name": "msg_id", "type": "int"}],
        "type": "payments.PaymentReceipt"
    }, {
        "id": "1997180532",
        "method": "payments.validateRequestedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "save", "type": "flags.0?true"}, {
            "name": "msg_id",
            "type": "int"
        }, {"name": "info", "type": "PaymentRequestedInfo"}],
        "type": "payments.ValidatedRequestedInfo"
    }, {
        "id": "730364339",
        "method": "payments.sendPaymentForm",
        "params": [{"name": "flags", "type": "#"}, {"name": "msg_id", "type": "int"}, {
            "name": "requested_info_id",
            "type": "flags.0?string"
        }, {"name": "shipping_option_id", "type": "flags.1?string"}, {
            "name": "credentials",
            "type": "InputPaymentCredentials"
        }],
        "type": "payments.PaymentResult"
    }, {
        "id": "1250046590",
        "method": "account.getTmpPassword",
        "params": [{"name": "password_hash", "type": "bytes"}, {"name": "period", "type": "int"}],
        "type": "account.TmpPassword"
    }, {
        "id": "578650699",
        "method": "payments.getSavedInfo",
        "params": [],
        "type": "payments.SavedInfo"
    }, {
        "id": "-667062079",
        "method": "payments.clearSavedInfo",
        "params": [{"name": "flags", "type": "#"}, {"name": "credentials", "type": "flags.0?true"}, {
            "name": "info",
            "type": "flags.1?true"
        }],
        "type": "Bool"
    }, {
        "id": "-436833542",
        "method": "messages.setBotShippingResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "query_id", "type": "long"}, {
            "name": "error",
            "type": "flags.0?string"
        }, {"name": "shipping_options", "type": "flags.1?Vector<ShippingOption>"}],
        "type": "Bool"
    }, {
        "id": "163765653",
        "method": "messages.setBotPrecheckoutResults",
        "params": [{"name": "flags", "type": "#"}, {"name": "success", "type": "flags.1?true"}, {
            "name": "query_id",
            "type": "long"
        }, {"name": "error", "type": "flags.0?string"}],
        "type": "Bool"
    }, {
        "id": "-1680314774",
        "method": "stickers.createStickerSet",
        "params": [{"name": "flags", "type": "#"}, {"name": "masks", "type": "flags.0?true"}, {
            "name": "user_id",
            "type": "InputUser"
        }, {"name": "title", "type": "string"}, {"name": "short_name", "type": "string"}, {
            "name": "stickers",
            "type": "Vector<InputStickerSetItem>"
        }],
        "type": "messages.StickerSet"
    }, {
        "id": "69556532",
        "method": "stickers.removeStickerFromSet",
        "params": [{"name": "sticker", "type": "InputDocument"}],
        "type": "Bool"
    }, {
        "id": "1322714570",
        "method": "stickers.changeStickerPosition",
        "params": [{"name": "sticker", "type": "InputDocument"}, {"name": "position", "type": "int"}],
        "type": "Bool"
    }, {
        "id": "-2041315650",
        "method": "stickers.addStickerToSet",
        "params": [{"name": "stickerset", "type": "InputStickerSet"}, {
            "name": "sticker",
            "type": "InputStickerSetItem"
        }],
        "type": "messages.StickerSet"
    }, {
        "id": "1369162417",
        "method": "messages.uploadMedia",
        "params": [{"name": "peer", "type": "InputPeer"}, {"name": "media", "type": "InputMedia"}],
        "type": "MessageMedia"
    }, {"id": "1430593449", "method": "phone.getCallConfig", "params": [], "type": "DataJSON"}, {
        "id": "1536537556",
        "method": "phone.requestCall",
        "params": [{"name": "user_id", "type": "InputUser"}, {"name": "random_id", "type": "int"}, {
            "name": "g_a_hash",
            "type": "bytes"
        }, {"name": "protocol", "type": "PhoneCallProtocol"}],
        "type": "phone.PhoneCall"
    }, {
        "id": "1003664544",
        "method": "phone.acceptCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "g_b", "type": "bytes"}, {
            "name": "protocol",
            "type": "PhoneCallProtocol"
        }],
        "type": "phone.PhoneCall"
    }, {
        "id": "788404002",
        "method": "phone.confirmCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {
            "name": "g_a",
            "type": "bytes"
        }, {"name": "key_fingerprint", "type": "long"}, {"name": "protocol", "type": "PhoneCallProtocol"}],
        "type": "phone.PhoneCall"
    }, {
        "id": "399855457",
        "method": "phone.receivedCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}],
        "type": "Bool"
    }, {
        "id": "2027164582",
        "method": "phone.discardCall",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "duration", "type": "int"}, {
            "name": "reason",
            "type": "PhoneCallDiscardReason"
        }, {"name": "connection_id", "type": "long"}],
        "type": "Updates"
    }, {
        "id": "475228724",
        "method": "phone.setCallRating",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "rating", "type": "int"}, {
            "name": "comment",
            "type": "string"
        }],
        "type": "Updates"
    }, {
        "id": "662363518",
        "method": "phone.saveCallDebug",
        "params": [{"name": "peer", "type": "InputPhoneCall"}, {"name": "debug", "type": "DataJSON"}],
        "type": "Bool"
    }, {
        "id": "536919235",
        "method": "upload.getCdnFile",
        "params": [{"name": "file_token", "type": "bytes"}, {"name": "offset", "type": "int"}, {
            "name": "limit",
            "type": "int"
        }],
        "type": "upload.CdnFile"
    }, {
        "id": "779755552",
        "method": "upload.reuploadCdnFile",
        "params": [{"name": "file_token", "type": "bytes"}, {"name": "request_token", "type": "bytes"}],
        "type": "Bool"
    }, {"id": "1375900482", "method": "help.getCdnConfig", "params": [], "type": "CdnConfig"}]
}

Config.Schema.API.layer = 66

Config.Emoji = {
    '00a9': ['\u00A9', ['copyright']],
    '00ae': ['\u00AE', ['registered']],
    '203c': ['\u203C', ['bangbang']],
    '2049': ['\u2049', ['interrobang']],
    '2122': ['\u2122', ['tm']],
    '2139': ['\u2139', ['information_source']],
    '2194': ['\u2194', ['left_right_arrow']],
    '2195': ['\u2195', ['arrow_up_down']],
    '2196': ['\u2196', ['arrow_upper_left']],
    '2197': ['\u2197', ['arrow_upper_right']],
    '2198': ['\u2198', ['arrow_lower_right']],
    '2199': ['\u2199', ['arrow_lower_left']],
    '21a9': ['\u21A9', ['leftwards_arrow_with_hook']],
    '21aa': ['\u21AA', ['arrow_right_hook']],
    '231a': ['\u231A', ['watch']],
    '231b': ['\u231B', ['hourglass']],
    '23e9': ['\u23E9', ['fast_forward']],
    '23ea': ['\u23EA', ['rewind']],
    '23eb': ['\u23EB', ['arrow_double_up']],
    '23ec': ['\u23EC', ['arrow_double_down']],
    '23f0': ['\u23F0', ['alarm_clock']],
    '23f3': ['\u23F3', ['hourglass_flowing_sand']],
    '24c2': ['\u24C2', ['m']],
    '25aa': ['\u25AA', ['black_small_square']],
    '25ab': ['\u25AB', ['white_small_square']],
    '25b6': ['\u25B6', ['arrow_forward']],
    '25c0': ['\u25C0', ['arrow_backward']],
    '25fb': ['\u25FB', ['white_medium_square']],
    '25fc': ['\u25FC', ['black_medium_square']],
    '25fd': ['\u25FD', ['white_medium_small_square']],
    '25fe': ['\u25FE', ['black_medium_small_square']],
    '2600': ['\u2600', ['sunny']],
    '2601': ['\u2601', ['cloud']],
    '260e': ['\u260E', ['phone', 'telephone']],
    '2611': ['\u2611', ['ballot_box_with_check']],
    '2614': ['\u2614', ['umbrella']],
    '2615': ['\u2615', ['coffee']],
    '261d': ['\u261D', ['point_up']],
    '263a': ['\u263A', ['relaxed']],
    '2648': ['\u2648', ['aries']],
    '2649': ['\u2649', ['taurus']],
    '264a': ['\u264A', ['gemini']],
    '264b': ['\u264B', ['cancer']],
    '264c': ['\u264C', ['leo']],
    '264d': ['\u264D', ['virgo']],
    '264e': ['\u264E', ['libra']],
    '264f': ['\u264F', ['scorpius']],
    '2650': ['\u2650', ['sagittarius']],
    '2651': ['\u2651', ['capricorn']],
    '2652': ['\u2652', ['aquarius']],
    '2653': ['\u2653', ['pisces']],
    '2660': ['\u2660', ['spades']],
    '2663': ['\u2663', ['clubs']],
    '2665': ['\u2665', ['hearts']],
    '2666': ['\u2666', ['diamonds']],
    '2668': ['\u2668', ['hotsprings']],
    '267b': ['\u267B', ['recycle']],
    '267f': ['\u267F', ['wheelchair']],
    '2693': ['\u2693', ['anchor']],
    '26a0': ['\u26A0', ['warning']],
    '26a1': ['\u26A1', ['zap']],
    '26aa': ['\u26AA', ['white_circle']],
    '26ab': ['\u26AB', ['black_circle']],
    '26bd': ['\u26BD', ['soccer']],
    '26be': ['\u26BE', ['baseball']],
    '26c4': ['\u26C4', ['snowman']],
    '26c5': ['\u26C5', ['partly_sunny']],
    '26ce': ['\u26CE', ['ophiuchus']],
    '26d4': ['\u26D4', ['no_entry']],
    '26ea': ['\u26EA', ['church']],
    '26f2': ['\u26F2', ['fountain']],
    '26f3': ['\u26F3', ['golf']],
    '26f5': ['\u26F5', ['boat', 'sailboat']],
    '26fa': ['\u26FA', ['tent']],
    '26fd': ['\u26FD', ['fuelpump']],
    '2702': ['\u2702', ['scissors']],
    '2705': ['\u2705', ['white_check_mark']],
    '2708': ['\u2708', ['airplane']],
    '2709': ['\u2709', ['email', 'envelope']],
    '270a': ['\u270A', ['fist']],
    '270b': ['\u270B', ['hand', 'raised_hand']],
    '270c': ['\u270C', ['v']],
    '270f': ['\u270F', ['pencil2']],
    '2712': ['\u2712', ['black_nib']],
    '2714': ['\u2714', ['heavy_check_mark']],
    '2716': ['\u2716', ['heavy_multiplication_x']],
    '2728': ['\u2728', ['sparkles']],
    '2733': ['\u2733', ['eight_spoked_asterisk']],
    '2734': ['\u2734', ['eight_pointed_black_star']],
    '2744': ['\u2744', ['snowflake']],
    '2747': ['\u2747', ['sparkle']],
    '274c': ['\u274C', ['x']],
    '274e': ['\u274E', ['negative_squared_cross_mark']],
    '2753': ['\u2753', ['question']],
    '2754': ['\u2754', ['grey_question']],
    '2755': ['\u2755', ['grey_exclamation']],
    '2757': ['\u2757', ['exclamation', 'heavy_exclamation_mark']],
    '2764': ['\u2764', ['heart'], '<3'],
    '2795': ['\u2795', ['heavy_plus_sign']],
    '2796': ['\u2796', ['heavy_minus_sign']],
    '2797': ['\u2797', ['heavy_division_sign']],
    '27a1': ['\u27A1', ['arrow_right']],
    '27b0': ['\u27B0', ['curly_loop']],
    '27bf': ['\u27BF', ['loop']],
    '2934': ['\u2934', ['arrow_heading_up']],
    '2935': ['\u2935', ['arrow_heading_down']],
    '2b05': ['\u2B05', ['arrow_left']],
    '2b06': ['\u2B06', ['arrow_up']],
    '2b07': ['\u2B07', ['arrow_down']],
    '2b1b': ['\u2B1B', ['black_large_square']],
    '2b1c': ['\u2B1C', ['white_large_square']],
    '2b50': ['\u2B50', ['star']],
    '2b55': ['\u2B55', ['o']],
    '3030': ['\u3030', ['wavy_dash']],
    '303d': ['\u303D', ['part_alternation_mark']],
    '3297': ['\u3297', ['congratulations']],
    '3299': ['\u3299', ['secret']],
    '1f004': ['\uD83C\uDC04', ['mahjong']],
    '1f0cf': ['\uD83C\uDCCF', ['black_joker']],
    '1f170': ['\uD83C\uDD70', ['a']],
    '1f171': ['\uD83C\uDD71', ['b']],
    '1f17e': ['\uD83C\uDD7E', ['o2']],
    '1f17f': ['\uD83C\uDD7F', ['parking']],
    '1f18e': ['\uD83C\uDD8E', ['ab']],
    '1f191': ['\uD83C\uDD91', ['cl']],
    '1f192': ['\uD83C\uDD92', ['cool']],
    '1f193': ['\uD83C\uDD93', ['free']],
    '1f194': ['\uD83C\uDD94', ['id']],
    '1f195': ['\uD83C\uDD95', ['new']],
    '1f196': ['\uD83C\uDD96', ['ng']],
    '1f197': ['\uD83C\uDD97', ['ok']],
    '1f198': ['\uD83C\uDD98', ['sos']],
    '1f199': ['\uD83C\uDD99', ['up']],
    '1f19a': ['\uD83C\uDD9A', ['vs']],
    '1f201': ['\uD83C\uDE01', ['koko']],
    '1f202': ['\uD83C\uDE02', ['sa']],
    '1f21a': ['\uD83C\uDE1A', ['u7121']],
    '1f22f': ['\uD83C\uDE2F', ['u6307']],
    '1f232': ['\uD83C\uDE32', ['u7981']],
    '1f233': ['\uD83C\uDE33', ['u7a7a']],
    '1f234': ['\uD83C\uDE34', ['u5408']],
    '1f235': ['\uD83C\uDE35', ['u6e80']],
    '1f236': ['\uD83C\uDE36', ['u6709']],
    '1f237': ['\uD83C\uDE37', ['u6708']],
    '1f238': ['\uD83C\uDE38', ['u7533']],
    '1f239': ['\uD83C\uDE39', ['u5272']],
    '1f23a': ['\uD83C\uDE3A', ['u55b6']],
    '1f250': ['\uD83C\uDE50', ['ideograph_advantage']],
    '1f251': ['\uD83C\uDE51', ['accept']],
    '1f300': ['\uD83C\uDF00', ['cyclone']],
    '1f301': ['\uD83C\uDF01', ['foggy']],
    '1f302': ['\uD83C\uDF02', ['closed_umbrella']],
    '1f303': ['\uD83C\uDF03', ['night_with_stars']],
    '1f304': ['\uD83C\uDF04', ['sunrise_over_mountains']],
    '1f305': ['\uD83C\uDF05', ['sunrise']],
    '1f306': ['\uD83C\uDF06', ['city_sunset']],
    '1f307': ['\uD83C\uDF07', ['city_sunrise']],
    '1f308': ['\uD83C\uDF08', ['rainbow']],
    '1f309': ['\uD83C\uDF09', ['bridge_at_night']],
    '1f30a': ['\uD83C\uDF0A', ['ocean']],
    '1f30b': ['\uD83C\uDF0B', ['volcano']],
    '1f30c': ['\uD83C\uDF0C', ['milky_way']],
    '1f30d': ['\uD83C\uDF0D', ['earth_africa']],
    '1f30e': ['\uD83C\uDF0E', ['earth_americas']],
    '1f30f': ['\uD83C\uDF0F', ['earth_asia']],
    '1f310': ['\uD83C\uDF10', ['globe_with_meridians']],
    '1f311': ['\uD83C\uDF11', ['new_moon']],
    '1f312': ['\uD83C\uDF12', ['waxing_crescent_moon']],
    '1f313': ['\uD83C\uDF13', ['first_quarter_moon']],
    '1f314': ['\uD83C\uDF14', ['moon', 'waxing_gibbous_moon']],
    '1f315': ['\uD83C\uDF15', ['full_moon']],
    '1f316': ['\uD83C\uDF16', ['waning_gibbous_moon']],
    '1f317': ['\uD83C\uDF17', ['last_quarter_moon']],
    '1f318': ['\uD83C\uDF18', ['waning_crescent_moon']],
    '1f319': ['\uD83C\uDF19', ['crescent_moon']],
    '1f320': ['\uD83C\uDF20', ['stars']],
    '1f31a': ['\uD83C\uDF1A', ['new_moon_with_face']],
    '1f31b': ['\uD83C\uDF1B', ['first_quarter_moon_with_face']],
    '1f31c': ['\uD83C\uDF1C', ['last_quarter_moon_with_face']],
    '1f31d': ['\uD83C\uDF1D', ['full_moon_with_face']],
    '1f31e': ['\uD83C\uDF1E', ['sun_with_face']],
    '1f31f': ['\uD83C\uDF1F', ['star2']],
    '1f330': ['\uD83C\uDF30', ['chestnut']],
    '1f331': ['\uD83C\uDF31', ['seedling']],
    '1f332': ['\uD83C\uDF32', ['evergreen_tree']],
    '1f333': ['\uD83C\uDF33', ['deciduous_tree']],
    '1f334': ['\uD83C\uDF34', ['palm_tree']],
    '1f335': ['\uD83C\uDF35', ['cactus']],
    '1f337': ['\uD83C\uDF37', ['tulip']],
    '1f338': ['\uD83C\uDF38', ['cherry_blossom']],
    '1f339': ['\uD83C\uDF39', ['rose']],
    '1f33a': ['\uD83C\uDF3A', ['hibiscus']],
    '1f33b': ['\uD83C\uDF3B', ['sunflower']],
    '1f33c': ['\uD83C\uDF3C', ['blossom']],
    '1f33d': ['\uD83C\uDF3D', ['corn']],
    '1f33e': ['\uD83C\uDF3E', ['ear_of_rice']],
    '1f33f': ['\uD83C\uDF3F', ['herb']],
    '1f340': ['\uD83C\uDF40', ['four_leaf_clover']],
    '1f341': ['\uD83C\uDF41', ['maple_leaf']],
    '1f342': ['\uD83C\uDF42', ['fallen_leaf']],
    '1f343': ['\uD83C\uDF43', ['leaves']],
    '1f344': ['\uD83C\uDF44', ['mushroom']],
    '1f345': ['\uD83C\uDF45', ['tomato']],
    '1f346': ['\uD83C\uDF46', ['eggplant']],
    '1f347': ['\uD83C\uDF47', ['grapes']],
    '1f348': ['\uD83C\uDF48', ['melon']],
    '1f349': ['\uD83C\uDF49', ['watermelon']],
    '1f34a': ['\uD83C\uDF4A', ['tangerine']],
    '1f34b': ['\uD83C\uDF4B', ['lemon']],
    '1f34c': ['\uD83C\uDF4C', ['banana']],
    '1f34d': ['\uD83C\uDF4D', ['pineapple']],
    '1f34e': ['\uD83C\uDF4E', ['apple']],
    '1f34f': ['\uD83C\uDF4F', ['green_apple']],
    '1f350': ['\uD83C\uDF50', ['pear']],
    '1f351': ['\uD83C\uDF51', ['peach']],
    '1f352': ['\uD83C\uDF52', ['cherries']],
    '1f353': ['\uD83C\uDF53', ['strawberry']],
    '1f354': ['\uD83C\uDF54', ['hamburger']],
    '1f355': ['\uD83C\uDF55', ['pizza']],
    '1f356': ['\uD83C\uDF56', ['meat_on_bone']],
    '1f357': ['\uD83C\uDF57', ['poultry_leg']],
    '1f358': ['\uD83C\uDF58', ['rice_cracker']],
    '1f359': ['\uD83C\uDF59', ['rice_ball']],
    '1f35a': ['\uD83C\uDF5A', ['rice']],
    '1f35b': ['\uD83C\uDF5B', ['curry']],
    '1f35c': ['\uD83C\uDF5C', ['ramen']],
    '1f35d': ['\uD83C\uDF5D', ['spaghetti']],
    '1f35e': ['\uD83C\uDF5E', ['bread']],
    '1f35f': ['\uD83C\uDF5F', ['fries']],
    '1f360': ['\uD83C\uDF60', ['sweet_potato']],
    '1f361': ['\uD83C\uDF61', ['dango']],
    '1f362': ['\uD83C\uDF62', ['oden']],
    '1f363': ['\uD83C\uDF63', ['sushi']],
    '1f364': ['\uD83C\uDF64', ['fried_shrimp']],
    '1f365': ['\uD83C\uDF65', ['fish_cake']],
    '1f366': ['\uD83C\uDF66', ['icecream']],
    '1f367': ['\uD83C\uDF67', ['shaved_ice']],
    '1f368': ['\uD83C\uDF68', ['ice_cream']],
    '1f369': ['\uD83C\uDF69', ['doughnut']],
    '1f36a': ['\uD83C\uDF6A', ['cookie']],
    '1f36b': ['\uD83C\uDF6B', ['chocolate_bar']],
    '1f36c': ['\uD83C\uDF6C', ['candy']],
    '1f36d': ['\uD83C\uDF6D', ['lollipop']],
    '1f36e': ['\uD83C\uDF6E', ['custard']],
    '1f36f': ['\uD83C\uDF6F', ['honey_pot']],
    '1f370': ['\uD83C\uDF70', ['cake']],
    '1f371': ['\uD83C\uDF71', ['bento']],
    '1f372': ['\uD83C\uDF72', ['stew']],
    '1f373': ['\uD83C\uDF73', ['egg']],
    '1f374': ['\uD83C\uDF74', ['fork_and_knife']],
    '1f375': ['\uD83C\uDF75', ['tea']],
    '1f376': ['\uD83C\uDF76', ['sake']],
    '1f377': ['\uD83C\uDF77', ['wine_glass']],
    '1f378': ['\uD83C\uDF78', ['cocktail']],
    '1f379': ['\uD83C\uDF79', ['tropical_drink']],
    '1f37a': ['\uD83C\uDF7A', ['beer']],
    '1f37b': ['\uD83C\uDF7B', ['beers']],
    '1f37c': ['\uD83C\uDF7C', ['baby_bottle']],
    '1f380': ['\uD83C\uDF80', ['ribbon']],
    '1f381': ['\uD83C\uDF81', ['gift']],
    '1f382': ['\uD83C\uDF82', ['birthday']],
    '1f383': ['\uD83C\uDF83', ['jack_o_lantern']],
    '1f384': ['\uD83C\uDF84', ['christmas_tree']],
    '1f385': ['\uD83C\uDF85', ['santa']],
    '1f386': ['\uD83C\uDF86', ['fireworks']],
    '1f387': ['\uD83C\uDF87', ['sparkler']],
    '1f388': ['\uD83C\uDF88', ['balloon']],
    '1f389': ['\uD83C\uDF89', ['tada']],
    '1f38a': ['\uD83C\uDF8A', ['confetti_ball']],
    '1f38b': ['\uD83C\uDF8B', ['tanabata_tree']],
    '1f38c': ['\uD83C\uDF8C', ['crossed_flags']],
    '1f38d': ['\uD83C\uDF8D', ['bamboo']],
    '1f38e': ['\uD83C\uDF8E', ['dolls']],
    '1f38f': ['\uD83C\uDF8F', ['flags']],
    '1f390': ['\uD83C\uDF90', ['wind_chime']],
    '1f391': ['\uD83C\uDF91', ['rice_scene']],
    '1f392': ['\uD83C\uDF92', ['school_satchel']],
    '1f393': ['\uD83C\uDF93', ['mortar_board']],
    '1f3a0': ['\uD83C\uDFA0', ['carousel_horse']],
    '1f3a1': ['\uD83C\uDFA1', ['ferris_wheel']],
    '1f3a2': ['\uD83C\uDFA2', ['roller_coaster']],
    '1f3a3': ['\uD83C\uDFA3', ['fishing_pole_and_fish']],
    '1f3a4': ['\uD83C\uDFA4', ['microphone']],
    '1f3a5': ['\uD83C\uDFA5', ['movie_camera']],
    '1f3a6': ['\uD83C\uDFA6', ['cinema']],
    '1f3a7': ['\uD83C\uDFA7', ['headphones']],
    '1f3a8': ['\uD83C\uDFA8', ['art']],
    '1f3a9': ['\uD83C\uDFA9', ['tophat']],
    '1f3aa': ['\uD83C\uDFAA', ['circus_tent']],
    '1f3ab': ['\uD83C\uDFAB', ['ticket']],
    '1f3ac': ['\uD83C\uDFAC', ['clapper']],
    '1f3ad': ['\uD83C\uDFAD', ['performing_arts']],
    '1f3ae': ['\uD83C\uDFAE', ['video_game']],
    '1f3af': ['\uD83C\uDFAF', ['dart']],
    '1f3b0': ['\uD83C\uDFB0', ['slot_machine']],
    '1f3b1': ['\uD83C\uDFB1', ['8ball']],
    '1f3b2': ['\uD83C\uDFB2', ['game_die']],
    '1f3b3': ['\uD83C\uDFB3', ['bowling']],
    '1f3b4': ['\uD83C\uDFB4', ['flower_playing_cards']],
    '1f3b5': ['\uD83C\uDFB5', ['musical_note']],
    '1f3b6': ['\uD83C\uDFB6', ['notes']],
    '1f3b7': ['\uD83C\uDFB7', ['saxophone']],
    '1f3b8': ['\uD83C\uDFB8', ['guitar']],
    '1f3b9': ['\uD83C\uDFB9', ['musical_keyboard']],
    '1f3ba': ['\uD83C\uDFBA', ['trumpet']],
    '1f3bb': ['\uD83C\uDFBB', ['violin']],
    '1f3bc': ['\uD83C\uDFBC', ['musical_score']],
    '1f3bd': ['\uD83C\uDFBD', ['running_shirt_with_sash']],
    '1f3be': ['\uD83C\uDFBE', ['tennis']],
    '1f3bf': ['\uD83C\uDFBF', ['ski']],
    '1f3c0': ['\uD83C\uDFC0', ['basketball']],
    '1f3c1': ['\uD83C\uDFC1', ['checkered_flag']],
    '1f3c2': ['\uD83C\uDFC2', ['snowboarder']],
    '1f3c3': ['\uD83C\uDFC3', ['runner', 'running']],
    '1f3c4': ['\uD83C\uDFC4', ['surfer']],
    '1f3c6': ['\uD83C\uDFC6', ['trophy']],
    '1f3c7': ['\uD83C\uDFC7', ['horse_racing']],
    '1f3c8': ['\uD83C\uDFC8', ['football']],
    '1f3c9': ['\uD83C\uDFC9', ['rugby_football']],
    '1f3ca': ['\uD83C\uDFCA', ['swimmer']],
    '1f3e0': ['\uD83C\uDFE0', ['house']],
    '1f3e1': ['\uD83C\uDFE1', ['house_with_garden']],
    '1f3e2': ['\uD83C\uDFE2', ['office']],
    '1f3e3': ['\uD83C\uDFE3', ['post_office']],
    '1f3e4': ['\uD83C\uDFE4', ['european_post_office']],
    '1f3e5': ['\uD83C\uDFE5', ['hospital']],
    '1f3e6': ['\uD83C\uDFE6', ['bank']],
    '1f3e7': ['\uD83C\uDFE7', ['atm']],
    '1f3e8': ['\uD83C\uDFE8', ['hotel']],
    '1f3e9': ['\uD83C\uDFE9', ['love_hotel']],
    '1f3ea': ['\uD83C\uDFEA', ['convenience_store']],
    '1f3eb': ['\uD83C\uDFEB', ['school']],
    '1f3ec': ['\uD83C\uDFEC', ['department_store']],
    '1f3ed': ['\uD83C\uDFED', ['factory']],
    '1f3ee': ['\uD83C\uDFEE', ['izakaya_lantern', 'lantern']],
    '1f3ef': ['\uD83C\uDFEF', ['japanese_castle']],
    '1f3f0': ['\uD83C\uDFF0', ['european_castle']],
    '1f400': ['\uD83D\uDC00', ['rat']],
    '1f401': ['\uD83D\uDC01', ['mouse2']],
    '1f402': ['\uD83D\uDC02', ['ox']],
    '1f403': ['\uD83D\uDC03', ['water_buffalo']],
    '1f404': ['\uD83D\uDC04', ['cow2']],
    '1f405': ['\uD83D\uDC05', ['tiger2']],
    '1f406': ['\uD83D\uDC06', ['leopard']],
    '1f407': ['\uD83D\uDC07', ['rabbit2']],
    '1f408': ['\uD83D\uDC08', ['cat2']],
    '1f409': ['\uD83D\uDC09', ['dragon']],
    '1f40a': ['\uD83D\uDC0A', ['crocodile']],
    '1f40b': ['\uD83D\uDC0B', ['whale2']],
    '1f40c': ['\uD83D\uDC0C', ['snail']],
    '1f40d': ['\uD83D\uDC0D', ['snake']],
    '1f40e': ['\uD83D\uDC0E', ['racehorse']],
    '1f40f': ['\uD83D\uDC0F', ['ram']],
    '1f410': ['\uD83D\uDC10', ['goat']],
    '1f411': ['\uD83D\uDC11', ['sheep']],
    '1f412': ['\uD83D\uDC12', ['monkey']],
    '1f413': ['\uD83D\uDC13', ['rooster']],
    '1f414': ['\uD83D\uDC14', ['chicken']],
    '1f415': ['\uD83D\uDC15', ['dog2']],
    '1f416': ['\uD83D\uDC16', ['pig2']],
    '1f417': ['\uD83D\uDC17', ['boar']],
    '1f418': ['\uD83D\uDC18', ['elephant']],
    '1f419': ['\uD83D\uDC19', ['octopus']],
    '1f41a': ['\uD83D\uDC1A', ['shell']],
    '1f41b': ['\uD83D\uDC1B', ['bug']],
    '1f41c': ['\uD83D\uDC1C', ['ant']],
    '1f41d': ['\uD83D\uDC1D', ['bee', 'honeybee']],
    '1f41e': ['\uD83D\uDC1E', ['beetle']],
    '1f41f': ['\uD83D\uDC1F', ['fish']],
    '1f420': ['\uD83D\uDC20', ['tropical_fish']],
    '1f421': ['\uD83D\uDC21', ['blowfish']],
    '1f422': ['\uD83D\uDC22', ['turtle']],
    '1f423': ['\uD83D\uDC23', ['hatching_chick']],
    '1f424': ['\uD83D\uDC24', ['baby_chick']],
    '1f425': ['\uD83D\uDC25', ['hatched_chick']],
    '1f426': ['\uD83D\uDC26', ['bird']],
    '1f427': ['\uD83D\uDC27', ['penguin']],
    '1f428': ['\uD83D\uDC28', ['koala']],
    '1f429': ['\uD83D\uDC29', ['poodle']],
    '1f42a': ['\uD83D\uDC2A', ['dromedary_camel']],
    '1f42b': ['\uD83D\uDC2B', ['camel']],
    '1f42c': ['\uD83D\uDC2C', ['dolphin', 'flipper']],
    '1f42d': ['\uD83D\uDC2D', ['mouse']],
    '1f42e': ['\uD83D\uDC2E', ['cow']],
    '1f42f': ['\uD83D\uDC2F', ['tiger']],
    '1f430': ['\uD83D\uDC30', ['rabbit']],
    '1f431': ['\uD83D\uDC31', ['cat']],
    '1f432': ['\uD83D\uDC32', ['dragon_face']],
    '1f433': ['\uD83D\uDC33', ['whale']],
    '1f434': ['\uD83D\uDC34', ['horse']],
    '1f435': ['\uD83D\uDC35', ['monkey_face']],
    '1f436': ['\uD83D\uDC36', ['dog']],
    '1f437': ['\uD83D\uDC37', ['pig']],
    '1f438': ['\uD83D\uDC38', ['frog']],
    '1f439': ['\uD83D\uDC39', ['hamster']],
    '1f43a': ['\uD83D\uDC3A', ['wolf']],
    '1f43b': ['\uD83D\uDC3B', ['bear']],
    '1f43c': ['\uD83D\uDC3C', ['panda_face']],
    '1f43d': ['\uD83D\uDC3D', ['pig_nose']],
    '1f43e': ['\uD83D\uDC3E', ['feet', 'paw_prints']],
    '1f440': ['\uD83D\uDC40', ['eyes']],
    '1f442': ['\uD83D\uDC42', ['ear']],
    '1f443': ['\uD83D\uDC43', ['nose']],
    '1f444': ['\uD83D\uDC44', ['lips']],
    '1f445': ['\uD83D\uDC45', ['tongue']],
    '1f446': ['\uD83D\uDC46', ['point_up_2']],
    '1f447': ['\uD83D\uDC47', ['point_down']],
    '1f448': ['\uD83D\uDC48', ['point_left']],
    '1f449': ['\uD83D\uDC49', ['point_right']],
    '1f44a': ['\uD83D\uDC4A', ['facepunch', 'punch']],
    '1f44b': ['\uD83D\uDC4B', ['wave']],
    '1f44c': ['\uD83D\uDC4C', ['ok_hand']],
    '1f44d': ['\uD83D\uDC4D', ['+1', 'thumbsup']],
    '1f44e': ['\uD83D\uDC4E', ['-1', 'thumbsdown']],
    '1f44f': ['\uD83D\uDC4F', ['clap']],
    '1f450': ['\uD83D\uDC50', ['open_hands']],
    '1f451': ['\uD83D\uDC51', ['crown']],
    '1f452': ['\uD83D\uDC52', ['womans_hat']],
    '1f453': ['\uD83D\uDC53', ['eyeglasses']],
    '1f454': ['\uD83D\uDC54', ['necktie']],
    '1f455': ['\uD83D\uDC55', ['shirt', 'tshirt']],
    '1f456': ['\uD83D\uDC56', ['jeans']],
    '1f457': ['\uD83D\uDC57', ['dress']],
    '1f458': ['\uD83D\uDC58', ['kimono']],
    '1f459': ['\uD83D\uDC59', ['bikini']],
    '1f45a': ['\uD83D\uDC5A', ['womans_clothes']],
    '1f45b': ['\uD83D\uDC5B', ['purse']],
    '1f45c': ['\uD83D\uDC5C', ['handbag']],
    '1f45d': ['\uD83D\uDC5D', ['pouch']],
    '1f45e': ['\uD83D\uDC5E', ['mans_shoe', 'shoe']],
    '1f45f': ['\uD83D\uDC5F', ['athletic_shoe']],
    '1f460': ['\uD83D\uDC60', ['high_heel']],
    '1f461': ['\uD83D\uDC61', ['sandal']],
    '1f462': ['\uD83D\uDC62', ['boot']],
    '1f463': ['\uD83D\uDC63', ['footprints']],
    '1f464': ['\uD83D\uDC64', ['bust_in_silhouette']],
    '1f465': ['\uD83D\uDC65', ['busts_in_silhouette']],
    '1f466': ['\uD83D\uDC66', ['boy']],
    '1f467': ['\uD83D\uDC67', ['girl']],
    '1f468': ['\uD83D\uDC68', ['man']],
    '1f469': ['\uD83D\uDC69', ['woman']],
    '1f46a': ['\uD83D\uDC6A', ['family']],
    '1f46b': ['\uD83D\uDC6B', ['couple']],
    '1f46c': ['\uD83D\uDC6C', ['two_men_holding_hands']],
    '1f46d': ['\uD83D\uDC6D', ['two_women_holding_hands']],
    '1f46e': ['\uD83D\uDC6E', ['cop']],
    '1f46f': ['\uD83D\uDC6F', ['dancers']],
    '1f470': ['\uD83D\uDC70', ['bride_with_veil']],
    '1f471': ['\uD83D\uDC71', ['person_with_blond_hair']],
    '1f472': ['\uD83D\uDC72', ['man_with_gua_pi_mao']],
    '1f473': ['\uD83D\uDC73', ['man_with_turban']],
    '1f474': ['\uD83D\uDC74', ['older_man']],
    '1f475': ['\uD83D\uDC75', ['older_woman']],
    '1f476': ['\uD83D\uDC76', ['baby']],
    '1f477': ['\uD83D\uDC77', ['construction_worker']],
    '1f478': ['\uD83D\uDC78', ['princess']],
    '1f479': ['\uD83D\uDC79', ['japanese_ogre']],
    '1f47a': ['\uD83D\uDC7A', ['japanese_goblin']],
    '1f47b': ['\uD83D\uDC7B', ['ghost']],
    '1f47c': ['\uD83D\uDC7C', ['angel']],
    '1f47d': ['\uD83D\uDC7D', ['alien']],
    '1f47e': ['\uD83D\uDC7E', ['space_invader']],
    '1f47f': ['\uD83D\uDC7F', ['imp']],
    '1f480': ['\uD83D\uDC80', ['skull']],
    '1f481': ['\uD83D\uDC81', ['information_desk_person']],
    '1f482': ['\uD83D\uDC82', ['guardsman']],
    '1f483': ['\uD83D\uDC83', ['dancer']],
    '1f484': ['\uD83D\uDC84', ['lipstick']],
    '1f485': ['\uD83D\uDC85', ['nail_care']],
    '1f486': ['\uD83D\uDC86', ['massage']],
    '1f487': ['\uD83D\uDC87', ['haircut']],
    '1f488': ['\uD83D\uDC88', ['barber']],
    '1f489': ['\uD83D\uDC89', ['syringe']],
    '1f48a': ['\uD83D\uDC8A', ['pill']],
    '1f48b': ['\uD83D\uDC8B', ['kiss']],
    '1f48c': ['\uD83D\uDC8C', ['love_letter']],
    '1f48d': ['\uD83D\uDC8D', ['ring']],
    '1f48e': ['\uD83D\uDC8E', ['gem']],
    '1f48f': ['\uD83D\uDC8F', ['couplekiss']],
    '1f490': ['\uD83D\uDC90', ['bouquet']],
    '1f491': ['\uD83D\uDC91', ['couple_with_heart']],
    '1f492': ['\uD83D\uDC92', ['wedding']],
    '1f493': ['\uD83D\uDC93', ['heartbeat']],
    '1f494': ['\uD83D\uDC94', ['broken_heart'], '<\/3'],
    '1f495': ['\uD83D\uDC95', ['two_hearts']],
    '1f496': ['\uD83D\uDC96', ['sparkling_heart']],
    '1f497': ['\uD83D\uDC97', ['heartpulse']],
    '1f498': ['\uD83D\uDC98', ['cupid']],
    '1f499': ['\uD83D\uDC99', ['blue_heart'], '<3'],
    '1f49a': ['\uD83D\uDC9A', ['green_heart'], '<3'],
    '1f49b': ['\uD83D\uDC9B', ['yellow_heart'], '<3'],
    '1f49c': ['\uD83D\uDC9C', ['purple_heart'], '<3'],
    '1f49d': ['\uD83D\uDC9D', ['gift_heart']],
    '1f49e': ['\uD83D\uDC9E', ['revolving_hearts']],
    '1f49f': ['\uD83D\uDC9F', ['heart_decoration']],
    '1f4a0': ['\uD83D\uDCA0', ['diamond_shape_with_a_dot_inside']],
    '1f4a1': ['\uD83D\uDCA1', ['bulb']],
    '1f4a2': ['\uD83D\uDCA2', ['anger']],
    '1f4a3': ['\uD83D\uDCA3', ['bomb']],
    '1f4a4': ['\uD83D\uDCA4', ['zzz']],
    '1f4a5': ['\uD83D\uDCA5', ['boom', 'collision']],
    '1f4a6': ['\uD83D\uDCA6', ['sweat_drops']],
    '1f4a7': ['\uD83D\uDCA7', ['droplet']],
    '1f4a8': ['\uD83D\uDCA8', ['dash']],
    '1f4a9': ['\uD83D\uDCA9', ['hankey', 'poop', 'shit']],
    '1f4aa': ['\uD83D\uDCAA', ['muscle']],
    '1f4ab': ['\uD83D\uDCAB', ['dizzy']],
    '1f4ac': ['\uD83D\uDCAC', ['speech_balloon']],
    '1f4ad': ['\uD83D\uDCAD', ['thought_balloon']],
    '1f4ae': ['\uD83D\uDCAE', ['white_flower']],
    '1f4af': ['\uD83D\uDCAF', ['100']],
    '1f4b0': ['\uD83D\uDCB0', ['moneybag']],
    '1f4b1': ['\uD83D\uDCB1', ['currency_exchange']],
    '1f4b2': ['\uD83D\uDCB2', ['heavy_dollar_sign']],
    '1f4b3': ['\uD83D\uDCB3', ['credit_card']],
    '1f4b4': ['\uD83D\uDCB4', ['yen']],
    '1f4b5': ['\uD83D\uDCB5', ['dollar']],
    '1f4b6': ['\uD83D\uDCB6', ['euro']],
    '1f4b7': ['\uD83D\uDCB7', ['pound']],
    '1f4b8': ['\uD83D\uDCB8', ['money_with_wings']],
    '1f4b9': ['\uD83D\uDCB9', ['chart']],
    '1f4ba': ['\uD83D\uDCBA', ['seat']],
    '1f4bb': ['\uD83D\uDCBB', ['computer']],
    '1f4bc': ['\uD83D\uDCBC', ['briefcase']],
    '1f4bd': ['\uD83D\uDCBD', ['minidisc']],
    '1f4be': ['\uD83D\uDCBE', ['floppy_disk']],
    '1f4bf': ['\uD83D\uDCBF', ['cd']],
    '1f4c0': ['\uD83D\uDCC0', ['dvd']],
    '1f4c1': ['\uD83D\uDCC1', ['file_folder']],
    '1f4c2': ['\uD83D\uDCC2', ['open_file_folder']],
    '1f4c3': ['\uD83D\uDCC3', ['page_with_curl']],
    '1f4c4': ['\uD83D\uDCC4', ['page_facing_up']],
    '1f4c5': ['\uD83D\uDCC5', ['date']],
    '1f4c6': ['\uD83D\uDCC6', ['calendar']],
    '1f4c7': ['\uD83D\uDCC7', ['card_index']],
    '1f4c8': ['\uD83D\uDCC8', ['chart_with_upwards_trend']],
    '1f4c9': ['\uD83D\uDCC9', ['chart_with_downwards_trend']],
    '1f4ca': ['\uD83D\uDCCA', ['bar_chart']],
    '1f4cb': ['\uD83D\uDCCB', ['clipboard']],
    '1f4cc': ['\uD83D\uDCCC', ['pushpin']],
    '1f4cd': ['\uD83D\uDCCD', ['round_pushpin']],
    '1f4ce': ['\uD83D\uDCCE', ['paperclip']],
    '1f4cf': ['\uD83D\uDCCF', ['straight_ruler']],
    '1f4d0': ['\uD83D\uDCD0', ['triangular_ruler']],
    '1f4d1': ['\uD83D\uDCD1', ['bookmark_tabs']],
    '1f4d2': ['\uD83D\uDCD2', ['ledger']],
    '1f4d3': ['\uD83D\uDCD3', ['notebook']],
    '1f4d4': ['\uD83D\uDCD4', ['notebook_with_decorative_cover']],
    '1f4d5': ['\uD83D\uDCD5', ['closed_book']],
    '1f4d6': ['\uD83D\uDCD6', ['book', 'open_book']],
    '1f4d7': ['\uD83D\uDCD7', ['green_book']],
    '1f4d8': ['\uD83D\uDCD8', ['blue_book']],
    '1f4d9': ['\uD83D\uDCD9', ['orange_book']],
    '1f4da': ['\uD83D\uDCDA', ['books']],
    '1f4db': ['\uD83D\uDCDB', ['name_badge']],
    '1f4dc': ['\uD83D\uDCDC', ['scroll']],
    '1f4dd': ['\uD83D\uDCDD', ['memo', 'pencil']],
    '1f4de': ['\uD83D\uDCDE', ['telephone_receiver']],
    '1f4df': ['\uD83D\uDCDF', ['pager']],
    '1f4e0': ['\uD83D\uDCE0', ['fax']],
    '1f4e1': ['\uD83D\uDCE1', ['satellite']],
    '1f4e2': ['\uD83D\uDCE2', ['loudspeaker']],
    '1f4e3': ['\uD83D\uDCE3', ['mega']],
    '1f4e4': ['\uD83D\uDCE4', ['outbox_tray']],
    '1f4e5': ['\uD83D\uDCE5', ['inbox_tray']],
    '1f4e6': ['\uD83D\uDCE6', ['package']],
    '1f4e7': ['\uD83D\uDCE7', ['e-mail']],
    '1f4e8': ['\uD83D\uDCE8', ['incoming_envelope']],
    '1f4e9': ['\uD83D\uDCE9', ['envelope_with_arrow']],
    '1f4ea': ['\uD83D\uDCEA', ['mailbox_closed']],
    '1f4eb': ['\uD83D\uDCEB', ['mailbox']],
    '1f4ec': ['\uD83D\uDCEC', ['mailbox_with_mail']],
    '1f4ed': ['\uD83D\uDCED', ['mailbox_with_no_mail']],
    '1f4ee': ['\uD83D\uDCEE', ['postbox']],
    '1f4ef': ['\uD83D\uDCEF', ['postal_horn']],
    '1f4f0': ['\uD83D\uDCF0', ['newspaper']],
    '1f4f1': ['\uD83D\uDCF1', ['iphone']],
    '1f4f2': ['\uD83D\uDCF2', ['calling']],
    '1f4f3': ['\uD83D\uDCF3', ['vibration_mode']],
    '1f4f4': ['\uD83D\uDCF4', ['mobile_phone_off']],
    '1f4f5': ['\uD83D\uDCF5', ['no_mobile_phones']],
    '1f4f6': ['\uD83D\uDCF6', ['signal_strength']],
    '1f4f7': ['\uD83D\uDCF7', ['camera']],
    '1f4f9': ['\uD83D\uDCF9', ['video_camera']],
    '1f4fa': ['\uD83D\uDCFA', ['tv']],
    '1f4fb': ['\uD83D\uDCFB', ['radio']],
    '1f4fc': ['\uD83D\uDCFC', ['vhs']],
    '1f500': ['\uD83D\uDD00', ['twisted_rightwards_arrows']],
    '1f501': ['\uD83D\uDD01', ['repeat']],
    '1f502': ['\uD83D\uDD02', ['repeat_one']],
    '1f503': ['\uD83D\uDD03', ['arrows_clockwise']],
    '1f504': ['\uD83D\uDD04', ['arrows_counterclockwise']],
    '1f505': ['\uD83D\uDD05', ['low_brightness']],
    '1f506': ['\uD83D\uDD06', ['high_brightness']],
    '1f507': ['\uD83D\uDD07', ['mute']],
    '1f508': ['\uD83D\uDD09', ['speaker']],
    '1f509': ['\uD83D\uDD09', ['sound']],
    '1f50a': ['\uD83D\uDD0A', ['loud_sound']],
    '1f50b': ['\uD83D\uDD0B', ['battery']],
    '1f50c': ['\uD83D\uDD0C', ['electric_plug']],
    '1f50d': ['\uD83D\uDD0D', ['mag']],
    '1f50e': ['\uD83D\uDD0E', ['mag_right']],
    '1f50f': ['\uD83D\uDD0F', ['lock_with_ink_pen']],
    '1f510': ['\uD83D\uDD10', ['closed_lock_with_key']],
    '1f511': ['\uD83D\uDD11', ['key']],
    '1f512': ['\uD83D\uDD12', ['lock']],
    '1f513': ['\uD83D\uDD13', ['unlock']],
    '1f514': ['\uD83D\uDD14', ['bell']],
    '1f515': ['\uD83D\uDD15', ['no_bell']],
    '1f516': ['\uD83D\uDD16', ['bookmark']],
    '1f517': ['\uD83D\uDD17', ['link']],
    '1f518': ['\uD83D\uDD18', ['radio_button']],
    '1f519': ['\uD83D\uDD19', ['back']],
    '1f51a': ['\uD83D\uDD1A', ['end']],
    '1f51b': ['\uD83D\uDD1B', ['on']],
    '1f51c': ['\uD83D\uDD1C', ['soon']],
    '1f51d': ['\uD83D\uDD1D', ['top']],
    '1f51e': ['\uD83D\uDD1E', ['underage']],
    '1f51f': ['\uD83D\uDD1F', ['keycap_ten']],
    '1f520': ['\uD83D\uDD20', ['capital_abcd']],
    '1f521': ['\uD83D\uDD21', ['abcd']],
    '1f522': ['\uD83D\uDD22', ['1234']],
    '1f523': ['\uD83D\uDD23', ['symbols']],
    '1f524': ['\uD83D\uDD24', ['abc']],
    '1f525': ['\uD83D\uDD25', ['fire']],
    '1f526': ['\uD83D\uDD26', ['flashlight']],
    '1f527': ['\uD83D\uDD27', ['wrench']],
    '1f528': ['\uD83D\uDD28', ['hammer']],
    '1f529': ['\uD83D\uDD29', ['nut_and_bolt']],
    '1f52a': ['\uD83D\uDD2A', ['hocho']],
    '1f52b': ['\uD83D\uDD2B', ['gun']],
    '1f52c': ['\uD83D\uDD2C', ['microscope']],
    '1f52d': ['\uD83D\uDD2D', ['telescope']],
    '1f52e': ['\uD83D\uDD2E', ['crystal_ball']],
    '1f52f': ['\uD83D\uDD2F', ['six_pointed_star']],
    '1f530': ['\uD83D\uDD30', ['beginner']],
    '1f531': ['\uD83D\uDD31', ['trident']],
    '1f532': ['\uD83D\uDD32', ['black_square_button']],
    '1f533': ['\uD83D\uDD33', ['white_square_button']],
    '1f534': ['\uD83D\uDD34', ['red_circle']],
    '1f535': ['\uD83D\uDD35', ['large_blue_circle']],
    '1f536': ['\uD83D\uDD36', ['large_orange_diamond']],
    '1f537': ['\uD83D\uDD37', ['large_blue_diamond']],
    '1f538': ['\uD83D\uDD38', ['small_orange_diamond']],
    '1f539': ['\uD83D\uDD39', ['small_blue_diamond']],
    '1f53a': ['\uD83D\uDD3A', ['small_red_triangle']],
    '1f53b': ['\uD83D\uDD3B', ['small_red_triangle_down']],
    '1f53c': ['\uD83D\uDD3C', ['arrow_up_small']],
    '1f53d': ['\uD83D\uDD3D', ['arrow_down_small']],
    '1f550': ['\uD83D\uDD50', ['clock1']],
    '1f551': ['\uD83D\uDD51', ['clock2']],
    '1f552': ['\uD83D\uDD52', ['clock3']],
    '1f553': ['\uD83D\uDD53', ['clock4']],
    '1f554': ['\uD83D\uDD54', ['clock5']],
    '1f555': ['\uD83D\uDD55', ['clock6']],
    '1f556': ['\uD83D\uDD56', ['clock7']],
    '1f557': ['\uD83D\uDD57', ['clock8']],
    '1f558': ['\uD83D\uDD58', ['clock9']],
    '1f559': ['\uD83D\uDD59', ['clock10']],
    '1f55a': ['\uD83D\uDD5A', ['clock11']],
    '1f55b': ['\uD83D\uDD5B', ['clock12']],
    '1f55c': ['\uD83D\uDD5C', ['clock130']],
    '1f55d': ['\uD83D\uDD5D', ['clock230']],
    '1f55e': ['\uD83D\uDD5E', ['clock330']],
    '1f55f': ['\uD83D\uDD5F', ['clock430']],
    '1f560': ['\uD83D\uDD60', ['clock530']],
    '1f561': ['\uD83D\uDD61', ['clock630']],
    '1f562': ['\uD83D\uDD62', ['clock730']],
    '1f563': ['\uD83D\uDD63', ['clock830']],
    '1f564': ['\uD83D\uDD64', ['clock930']],
    '1f565': ['\uD83D\uDD65', ['clock1030']],
    '1f566': ['\uD83D\uDD66', ['clock1130']],
    '1f567': ['\uD83D\uDD67', ['clock1230']],
    '1f5fb': ['\uD83D\uDDFB', ['mount_fuji']],
    '1f5fc': ['\uD83D\uDDFC', ['tokyo_tower']],
    '1f5fd': ['\uD83D\uDDFD', ['statue_of_liberty']],
    '1f5fe': ['\uD83D\uDDFE', ['japan']],
    '1f5ff': ['\uD83D\uDDFF', ['moyai']],
    '1f600': ['\uD83D\uDE00', ['grinning']],
    '1f601': ['\uD83D\uDE01', ['grin']],
    '1f602': ['\uD83D\uDE02', ['joy']],
    '1f603': ['\uD83D\uDE03', ['smiley'], ':)'],
    '1f604': ['\uD83D\uDE04', ['smile'], ':)'],
    '1f605': ['\uD83D\uDE05', ['sweat_smile']],
    '1f606': ['\uD83D\uDE06', ['laughing', 'satisfied']],
    '1f607': ['\uD83D\uDE07', ['innocent']],
    '1f608': ['\uD83D\uDE08', ['smiling_imp']],
    '1f609': ['\uD83D\uDE09', ['wink'], ';)'],
    '1f60a': ['\uD83D\uDE0A', ['blush']],
    '1f60b': ['\uD83D\uDE0B', ['yum']],
    '1f60c': ['\uD83D\uDE0C', ['relieved']],
    '1f60d': ['\uD83D\uDE0D', ['heart_eyes']],
    '1f60e': ['\uD83D\uDE0E', ['sunglasses']],
    '1f60f': ['\uD83D\uDE0F', ['smirk']],
    '1f610': ['\uD83D\uDE10', ['neutral_face']],
    '1f611': ['\uD83D\uDE11', ['expressionless']],
    '1f612': ['\uD83D\uDE12', ['unamused']],
    '1f613': ['\uD83D\uDE13', ['sweat']],
    '1f614': ['\uD83D\uDE14', ['pensive']],
    '1f615': ['\uD83D\uDE15', ['confused']],
    '1f616': ['\uD83D\uDE16', ['confounded']],
    '1f617': ['\uD83D\uDE17', ['kissing']],
    '1f618': ['\uD83D\uDE18', ['kissing_heart']],
    '1f619': ['\uD83D\uDE19', ['kissing_smiling_eyes']],
    '1f61a': ['\uD83D\uDE1A', ['kissing_closed_eyes']],
    '1f61b': ['\uD83D\uDE1B', ['stuck_out_tongue']],
    '1f61c': ['\uD83D\uDE1C', ['stuck_out_tongue_winking_eye'], ';p'],
    '1f61d': ['\uD83D\uDE1D', ['stuck_out_tongue_closed_eyes']],
    '1f61e': ['\uD83D\uDE1E', ['disappointed'], ':('],
    '1f61f': ['\uD83D\uDE1F', ['worried']],
    '1f620': ['\uD83D\uDE20', ['angry']],
    '1f621': ['\uD83D\uDE21', ['rage']],
    '1f622': ['\uD83D\uDE22', ['cry'], ":'("],
    '1f623': ['\uD83D\uDE23', ['persevere']],
    '1f624': ['\uD83D\uDE24', ['triumph']],
    '1f625': ['\uD83D\uDE25', ['disappointed_relieved']],
    '1f626': ['\uD83D\uDE26', ['frowning']],
    '1f627': ['\uD83D\uDE27', ['anguished']],
    '1f628': ['\uD83D\uDE28', ['fearful']],
    '1f629': ['\uD83D\uDE29', ['weary']],
    '1f62a': ['\uD83D\uDE2A', ['sleepy']],
    '1f62b': ['\uD83D\uDE2B', ['tired_face']],
    '1f62c': ['\uD83D\uDE2C', ['grimacing']],
    '1f62d': ['\uD83D\uDE2D', ['sob'], ":'("],
    '1f62e': ['\uD83D\uDE2E', ['open_mouth']],
    '1f62f': ['\uD83D\uDE2F', ['hushed']],
    '1f630': ['\uD83D\uDE30', ['cold_sweat']],
    '1f631': ['\uD83D\uDE31', ['scream']],
    '1f632': ['\uD83D\uDE32', ['astonished']],
    '1f633': ['\uD83D\uDE33', ['flushed']],
    '1f634': ['\uD83D\uDE34', ['sleeping']],
    '1f635': ['\uD83D\uDE35', ['dizzy_face']],
    '1f636': ['\uD83D\uDE36', ['no_mouth']],
    '1f637': ['\uD83D\uDE37', ['mask']],
    '1f638': ['\uD83D\uDE38', ['smile_cat']],
    '1f639': ['\uD83D\uDE39', ['joy_cat']],
    '1f63a': ['\uD83D\uDE3A', ['smiley_cat']],
    '1f63b': ['\uD83D\uDE3B', ['heart_eyes_cat']],
    '1f63c': ['\uD83D\uDE3C', ['smirk_cat']],
    '1f63d': ['\uD83D\uDE3D', ['kissing_cat']],
    '1f63e': ['\uD83D\uDE3E', ['pouting_cat']],
    '1f63f': ['\uD83D\uDE3F', ['crying_cat_face']],
    '1f640': ['\uD83D\uDE40', ['scream_cat']],
    '1f645': ['\uD83D\uDE45', ['no_good']],
    '1f646': ['\uD83D\uDE46', ['ok_woman']],
    '1f647': ['\uD83D\uDE47', ['bow']],
    '1f648': ['\uD83D\uDE48', ['see_no_evil']],
    '1f649': ['\uD83D\uDE49', ['hear_no_evil']],
    '1f64a': ['\uD83D\uDE4A', ['speak_no_evil']],
    '1f64b': ['\uD83D\uDE4B', ['raising_hand']],
    '1f64c': ['\uD83D\uDE4C', ['raised_hands']],
    '1f64d': ['\uD83D\uDE4D', ['person_frowning']],
    '1f64e': ['\uD83D\uDE4E', ['person_with_pouting_face']],
    '1f64f': ['\uD83D\uDE4F', ['pray']],
    '1f680': ['\uD83D\uDE80', ['rocket']],
    '1f681': ['\uD83D\uDE81', ['helicopter']],
    '1f682': ['\uD83D\uDE82', ['steam_locomotive']],
    '1f683': ['\uD83D\uDE83', ['railway_car']],
    '1f68b': ['\uD83D\uDE8B', ['train']],
    '1f684': ['\uD83D\uDE84', ['bullettrain_side']],
    '1f685': ['\uD83D\uDE85', ['bullettrain_front']],
    '1f686': ['\uD83D\uDE86', ['train2']],
    '1f687': ['\uD83D\uDE87', ['metro']],
    '1f688': ['\uD83D\uDE88', ['light_rail']],
    '1f689': ['\uD83D\uDE89', ['station']],
    '1f68a': ['\uD83D\uDE8A', ['tram']],
    '1f68c': ['\uD83D\uDE8C', ['bus']],
    '1f68d': ['\uD83D\uDE8D', ['oncoming_bus']],
    '1f68e': ['\uD83D\uDE8E', ['trolleybus']],
    '1f68f': ['\uD83D\uDE8F', ['busstop']],
    '1f690': ['\uD83D\uDE90', ['minibus']],
    '1f691': ['\uD83D\uDE91', ['ambulance']],
    '1f692': ['\uD83D\uDE92', ['fire_engine']],
    '1f693': ['\uD83D\uDE93', ['police_car']],
    '1f694': ['\uD83D\uDE94', ['oncoming_police_car']],
    '1f695': ['\uD83D\uDE95', ['taxi']],
    '1f696': ['\uD83D\uDE96', ['oncoming_taxi']],
    '1f697': ['\uD83D\uDE97', ['car', 'red_car']],
    '1f698': ['\uD83D\uDE98', ['oncoming_automobile']],
    '1f699': ['\uD83D\uDE99', ['blue_car']],
    '1f69a': ['\uD83D\uDE9A', ['truck']],
    '1f69b': ['\uD83D\uDE9B', ['articulated_lorry']],
    '1f69c': ['\uD83D\uDE9C', ['tractor']],
    '1f69d': ['\uD83D\uDE9D', ['monorail']],
    '1f69e': ['\uD83D\uDE9E', ['mountain_railway']],
    '1f69f': ['\uD83D\uDE9F', ['suspension_railway']],
    '1f6a0': ['\uD83D\uDEA0', ['mountain_cableway']],
    '1f6a1': ['\uD83D\uDEA1', ['aerial_tramway']],
    '1f6a2': ['\uD83D\uDEA2', ['ship']],
    '1f6a3': ['\uD83D\uDEA3', ['rowboat']],
    '1f6a4': ['\uD83D\uDEA4', ['speedboat']],
    '1f6a5': ['\uD83D\uDEA5', ['traffic_light']],
    '1f6a6': ['\uD83D\uDEA6', ['vertical_traffic_light']],
    '1f6a7': ['\uD83D\uDEA7', ['construction']],
    '1f6a8': ['\uD83D\uDEA8', ['rotating_light']],
    '1f6a9': ['\uD83D\uDEA9', ['triangular_flag_on_post']],
    '1f6aa': ['\uD83D\uDEAA', ['door']],
    '1f6ab': ['\uD83D\uDEAB', ['no_entry_sign']],
    '1f6ac': ['\uD83D\uDEAC', ['smoking']],
    '1f6ad': ['\uD83D\uDEAD', ['no_smoking']],
    '1f6ae': ['\uD83D\uDEAE', ['put_litter_in_its_place']],
    '1f6af': ['\uD83D\uDEAF', ['do_not_litter']],
    '1f6b0': ['\uD83D\uDEB0', ['potable_water']],
    '1f6b1': ['\uD83D\uDEB1', ['non-potable_water']],
    '1f6b2': ['\uD83D\uDEB2', ['bike']],
    '1f6b3': ['\uD83D\uDEB3', ['no_bicycles']],
    '1f6b4': ['\uD83D\uDEB4', ['bicyclist']],
    '1f6b5': ['\uD83D\uDEB5', ['mountain_bicyclist']],
    '1f6b6': ['\uD83D\uDEB6', ['walking']],
    '1f6b7': ['\uD83D\uDEB7', ['no_pedestrians']],
    '1f6b8': ['\uD83D\uDEB8', ['children_crossing']],
    '1f6b9': ['\uD83D\uDEB9', ['mens']],
    '1f6ba': ['\uD83D\uDEBA', ['womens']],
    '1f6bb': ['\uD83D\uDEBB', ['restroom']],
    '1f6bc': ['\uD83D\uDEBC', ['baby_symbol']],
    '1f6bd': ['\uD83D\uDEBD', ['toilet']],
    '1f6be': ['\uD83D\uDEBE', ['wc']],
    '1f6bf': ['\uD83D\uDEBF', ['shower']],
    '1f6c0': ['\uD83D\uDEC0', ['bath']],
    '1f6c1': ['\uD83D\uDEC1', ['bathtub']],
    '1f6c2': ['\uD83D\uDEC2', ['passport_control']],
    '1f6c3': ['\uD83D\uDEC3', ['customs']],
    '1f6c4': ['\uD83D\uDEC4', ['baggage_claim']],
    '1f6c5': ['\uD83D\uDEC5', ['left_luggage']],
    '0023': ['\u0023\u20E3', ['hash']],
    '0030': ['\u0030\u20E3', ['zero']],
    '0031': ['\u0031\u20E3', ['one']],
    '0032': ['\u0032\u20E3', ['two']],
    '0033': ['\u0033\u20E3', ['three']],
    '0034': ['\u0034\u20E3', ['four']],
    '0035': ['\u0035\u20E3', ['five']],
    '0036': ['\u0036\u20E3', ['six']],
    '0037': ['\u0037\u20E3', ['seven']],
    '0038': ['\u0038\u20E3', ['eight']],
    '0039': ['\u0039\u20E3', ['nine']],
    '1f1e8-1f1f3': ['\uD83C\uDDE8\uD83C\uDDF3', ['cn']],
    '1f1e9-1f1ea': ['\uD83C\uDDE9\uD83C\uDDEA', ['de']],
    '1f1ea-1f1f8': ['\uD83C\uDDEA\uD83C\uDDF8', ['es']],
    '1f1eb-1f1f7': ['\uD83C\uDDEB\uD83C\uDDF7', ['fr']],
    '1f1ec-1f1e7': ['\uD83C\uDDEC\uD83C\uDDE7', ['gb', 'uk']],
    '1f1ee-1f1f9': ['\uD83C\uDDEE\uD83C\uDDF9', ['it']],
    '1f1ef-1f1f5': ['\uD83C\uDDEF\uD83C\uDDF5', ['jp']],
    '1f1f0-1f1f7': ['\uD83C\uDDF0\uD83C\uDDF7', ['kr']],
    '1f1f7-1f1fa': ['\uD83C\uDDF7\uD83C\uDDFA', ['ru']],
    '1f1fa-1f1f8': ['\uD83C\uDDFA\uD83C\uDDF8', ['us']]
}

Config.EmojiCategories = [['1f604', '1f603', '1f600', '1f60a', '263a', '1f609', '1f60d', '1f618', '1f61a', '1f617', '1f619', '1f61c', '1f61d', '1f61b', '1f633', '1f601', '1f614', '1f60c', '1f612', '1f61e', '1f623', '1f622', '1f602', '1f62d', '1f62a', '1f625', '1f630', '1f605', '1f613', '1f629', '1f62b', '1f628', '1f631', '1f620', '1f621', '1f624', '1f616', '1f606', '1f60b', '1f637', '1f60e', '1f634', '1f635', '1f632', '1f61f', '1f626', '1f627', '1f608', '1f47f', '1f62e', '1f62c', '1f610', '1f615', '1f62f', '1f636', '1f607', '1f60f', '1f611', '1f472', '1f473', '1f46e', '1f477', '1f482', '1f476', '1f466', '1f467', '1f468', '1f469', '1f474', '1f475', '1f471', '1f47c', '1f478', '1f63a', '1f638', '1f63b', '1f63d', '1f63c', '1f640', '1f63f', '1f639', '1f63e', '1f479', '1f47a', '1f648', '1f649', '1f64a', '1f480', '1f47d', '1f4a9', '1f525', '2728', '1f31f', '1f4ab', '1f4a5', '1f4a2', '1f4a6', '1f4a7', '1f4a4', '1f4a8', '1f442', '1f440', '1f443', '1f445', '1f444', '1f44d', '1f44e', '1f44c', '1f44a', '270a', '270c', '1f44b', '270b', '1f450', '1f446', '1f447', '1f449', '1f448', '1f64c', '1f64f', '261d', '1f44f', '1f4aa', '1f6b6', '1f3c3', '1f483', '1f46b', '1f46a', '1f46c', '1f46d', '1f48f', '1f491', '1f46f', '1f646', '1f645', '1f481', '1f64b', '1f486', '1f487', '1f485', '1f470', '1f64e', '1f64d', '1f647', '1f3a9', '1f451', '1f452', '1f45f', '1f45e', '1f461', '1f460', '1f462', '1f455', '1f454', '1f45a', '1f457', '1f3bd', '1f456', '1f458', '1f459', '1f4bc', '1f45c', '1f45d', '1f45b', '1f453', '1f380', '1f302', '1f484', '1f49b', '1f499', '1f49c', '1f49a', '2764', '1f494', '1f497', '1f493', '1f495', '1f496', '1f49e', '1f498', '1f48c', '1f48b', '1f48d', '1f48e', '1f464', '1f465', '1f4ac', '1f463', '1f4ad'], ['1f436', '1f43a', '1f431', '1f42d', '1f439', '1f430', '1f438', '1f42f', '1f428', '1f43b', '1f437', '1f43d', '1f42e', '1f417', '1f435', '1f412', '1f434', '1f411', '1f418', '1f43c', '1f427', '1f426', '1f424', '1f425', '1f423', '1f414', '1f40d', '1f422', '1f41b', '1f41d', '1f41c', '1f41e', '1f40c', '1f419', '1f41a', '1f420', '1f41f', '1f42c', '1f433', '1f40b', '1f404', '1f40f', '1f400', '1f403', '1f405', '1f407', '1f409', '1f40e', '1f410', '1f413', '1f415', '1f416', '1f401', '1f402', '1f432', '1f421', '1f40a', '1f42b', '1f42a', '1f406', '1f408', '1f429', '1f43e', '1f490', '1f338', '1f337', '1f340', '1f339', '1f33b', '1f33a', '1f341', '1f343', '1f342', '1f33f', '1f33e', '1f344', '1f335', '1f334', '1f332', '1f333', '1f330', '1f331', '1f33c', '1f310', '1f31e', '1f31d', '1f31a', '1f311', '1f312', '1f313', '1f314', '1f315', '1f316', '1f317', '1f318', '1f31c', '1f31b', '1f319', '1f30d', '1f30e', '1f30f', '1f30b', '1f30c', '1f320', '2b50', '2600', '26c5', '2601', '26a1', '2614', '2744', '26c4', '1f300', '1f301', '1f308', '1f30a'], ['1f38d', '1f49d', '1f38e', '1f392', '1f393', '1f38f', '1f386', '1f387', '1f390', '1f391', '1f383', '1f47b', '1f385', '1f384', '1f381', '1f38b', '1f389', '1f38a', '1f388', '1f38c', '1f52e', '1f3a5', '1f4f7', '1f4f9', '1f4fc', '1f4bf', '1f4c0', '1f4bd', '1f4be', '1f4bb', '1f4f1', '260e', '1f4de', '1f4df', '1f4e0', '1f4e1', '1f4fa', '1f4fb', '1f50a', '1f509', '1f508', '1f507', '1f514', '1f515', '1f4e3', '1f4e2', '23f3', '231b', '23f0', '231a', '1f513', '1f512', '1f50f', '1f510', '1f511', '1f50e', '1f4a1', '1f526', '1f506', '1f505', '1f50c', '1f50b', '1f50d', '1f6c0', '1f6c1', '1f6bf', '1f6bd', '1f527', '1f529', '1f528', '1f6aa', '1f6ac', '1f4a3', '1f52b', '1f52a', '1f48a', '1f489', '1f4b0', '1f4b4', '1f4b5', '1f4b7', '1f4b6', '1f4b3', '1f4b8', '1f4f2', '1f4e7', '1f4e5', '1f4e4', '2709', '1f4e9', '1f4e8', '1f4ef', '1f4eb', '1f4ea', '1f4ec', '1f4ed', '1f4ee', '1f4e6', '1f4dd', '1f4c4', '1f4c3', '1f4d1', '1f4ca', '1f4c8', '1f4c9', '1f4dc', '1f4cb', '1f4c5', '1f4c6', '1f4c7', '1f4c1', '1f4c2', '2702', '1f4cc', '1f4ce', '2712', '270f', '1f4cf', '1f4d0', '1f4d5', '1f4d7', '1f4d8', '1f4d9', '1f4d3', '1f4d4', '1f4d2', '1f4da', '1f4d6', '1f516', '1f4db', '1f52c', '1f52d', '1f4f0', '1f3a8', '1f3ac', '1f3a4', '1f3a7', '1f3bc', '1f3b5', '1f3b6', '1f3b9', '1f3bb', '1f3ba', '1f3b7', '1f3b8', '1f47e', '1f3ae', '1f0cf', '1f3b4', '1f004', '1f3b2', '1f3af', '1f3c8', '1f3c0', '26bd', '26be', '1f3be', '1f3b1', '1f3c9', '1f3b3', '26f3', '1f6b5', '1f6b4', '1f3c1', '1f3c7', '1f3c6', '1f3bf', '1f3c2', '1f3ca', '1f3c4', '1f3a3', '2615', '1f375', '1f376', '1f37c', '1f37a', '1f37b', '1f378', '1f379', '1f377', '1f374', '1f355', '1f354', '1f35f', '1f357', '1f356', '1f35d', '1f35b', '1f364', '1f371', '1f363', '1f365', '1f359', '1f358', '1f35a', '1f35c', '1f372', '1f362', '1f361', '1f373', '1f35e', '1f369', '1f36e', '1f366', '1f368', '1f367', '1f382', '1f370', '1f36a', '1f36b', '1f36c', '1f36d', '1f36f', '1f34e', '1f34f', '1f34a', '1f34b', '1f352', '1f347', '1f349', '1f353', '1f351', '1f348', '1f34c', '1f350', '1f34d', '1f360', '1f346', '1f345', '1f33d'], ['1f3e0', '1f3e1', '1f3eb', '1f3e2', '1f3e3', '1f3e5', '1f3e6', '1f3ea', '1f3e9', '1f3e8', '1f492', '26ea', '1f3ec', '1f3e4', '1f307', '1f306', '1f3ef', '1f3f0', '26fa', '1f3ed', '1f5fc', '1f5fe', '1f5fb', '1f304', '1f305', '1f303', '1f5fd', '1f309', '1f3a0', '1f3a1', '26f2', '1f3a2', '1f6a2', '26f5', '1f6a4', '1f6a3', '2693', '1f680', '2708', '1f4ba', '1f681', '1f682', '1f68a', '1f689', '1f69e', '1f686', '1f684', '1f685', '1f688', '1f687', '1f69d', '1f683', '1f68b', '1f68e', '1f68c', '1f68d', '1f699', '1f698', '1f697', '1f695', '1f696', '1f69b', '1f69a', '1f6a8', '1f693', '1f694', '1f692', '1f691', '1f690', '1f6b2', '1f6a1', '1f69f', '1f6a0', '1f69c', '1f488', '1f68f', '1f3ab', '1f6a6', '1f6a5', '26a0', '1f6a7', '1f530', '26fd', '1f3ee', '1f3b0', '2668', '1f5ff', '1f3aa', '1f3ad', '1f4cd', '1f6a9', '1f1ef-1f1f5', '1f1f0-1f1f7', '1f1e9-1f1ea', '1f1e8-1f1f3', '1f1fa-1f1f8', '1f1eb-1f1f7', '1f1ea-1f1f8', '1f1ee-1f1f9', '1f1f7-1f1fa', '1f1ec-1f1e7'], ['0031', '0032', '0033', '0034', '0035', '0036', '0037', '0038', '0039', '0030', '1f51f', '1f522', '0023', '1f523', '2b06', '2b07', '2b05', '27a1', '1f520', '1f521', '1f524', '2197', '2196', '2198', '2199', '2194', '2195', '1f504', '25c0', '25b6', '1f53c', '1f53d', '21a9', '21aa', '2139', '23ea', '23e9', '23eb', '23ec', '2935', '2934', '1f197', '1f500', '1f501', '1f502', '1f195', '1f199', '1f192', '1f193', '1f196', '1f4f6', '1f3a6', '1f201', '1f22f', '1f233', '1f235', '1f234', '1f232', '1f250', '1f239', '1f23a', '1f236', '1f21a', '1f6bb', '1f6b9', '1f6ba', '1f6bc', '1f6be', '1f6b0', '1f6ae', '1f17f', '267f', '1f6ad', '1f237', '1f238', '1f202', '24c2', '1f6c2', '1f6c4', '1f6c5', '1f6c3', '1f251', '3299', '3297', '1f191', '1f198', '1f194', '1f6ab', '1f51e', '1f4f5', '1f6af', '1f6b1', '1f6b3', '1f6b7', '1f6b8', '26d4', '2733', '2747', '274e', '2705', '2734', '1f49f', '1f19a', '1f4f3', '1f4f4', '1f170', '1f171', '1f18e', '1f17e', '1f4a0', '27bf', '267b', '2648', '2649', '264a', '264b', '264c', '264d', '264e', '264f', '2650', '2651', '2652', '2653', '26ce', '1f52f', '1f3e7', '1f4b9', '1f4b2', '1f4b1', '00a9', '00ae', '2122', '274c', '203c', '2049', '2757', '2753', '2755', '2754', '2b55', '1f51d', '1f51a', '1f519', '1f51b', '1f51c', '1f503', '1f55b', '1f567', '1f550', '1f55c', '1f551', '1f55d', '1f552', '1f55e', '1f553', '1f55f', '1f554', '1f560', '1f555', '1f556', '1f557', '1f558', '1f559', '1f55a', '1f561', '1f562', '1f563', '1f564', '1f565', '1f566', '2716', '2795', '2796', '2797', '2660', '2665', '2663', '2666', '1f4ae', '1f4af', '2714', '2611', '1f518', '1f517', '27b0', '3030', '303d', '1f531', '25fc', '25fb', '25fe', '25fd', '25aa', '25ab', '1f53a', '1f532', '1f533', '26ab', '26aa', '1f534', '1f535', '1f53b', '2b1c', '2b1b', '1f536', '1f537', '1f538', '1f539']]

Config.EmojiCategorySpritesheetDimens = [[7, 27], [4, 29], [7, 33], [3, 34], [7, 34]]

// From https://raw.githubusercontent.com/FGRibreau/latenize/master/latinize_map.js
Config.LatinizeMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'ẞ': 'SS',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ß': 'ss',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x',
    'Ё': 'YO',
    'Й': 'I',
    'Ц': 'TS',
    'У': 'U',
    'К': 'K',
    'Е': 'E',
    'Н': 'N',
    'Г': 'G',
    'Ш': 'SH',
    'Щ': 'SCH',
    'З': 'Z',
    'Х': 'H',
    'Ъ': '',
    'ё': 'yo',
    'й': 'i',
    'ц': 'ts',
    'у': 'u',
    'к': 'k',
    'е': 'e',
    'н': 'n',
    'г': 'g',
    'ш': 'sh',
    'щ': 'sch',
    'з': 'z',
    'х': 'h',
    'ъ': '',
    'Ф': 'F',
    'Ы': 'I',
    'В': 'V',
    'А': 'A',
    'П': 'P',
    'Р': 'R',
    'О': 'O',
    'Л': 'L',
    'Д': 'D',
    'Ж': 'ZH',
    'Э': 'E',
    'ф': 'f',
    'ы': 'i',
    'в': 'v',
    'а': 'a',
    'п': 'p',
    'р': 'r',
    'о': 'o',
    'л': 'l',
    'д': 'd',
    'ж': 'zh',
    'э': 'e',
    'Я': 'Ya',
    'Ч': 'CH',
    'С': 'S',
    'М': 'M',
    'И': 'I',
    'Т': 'T',
    'Ь': '',
    'Б': 'B',
    'Ю': 'YU',
    'я': 'ya',
    'ч': 'ch',
    'с': 's',
    'м': 'm',
    'и': 'i',
    'т': 't',
    'ь': '',
    'б': 'b',
    'ю': 'yu'
}

Config.CountryCodes = [['AB', 'country_select_modal_country_ab', '+7 840', '+7 940', '+995 44'], ['AF', 'country_select_modal_country_af', '+93'], ['AX', 'country_select_modal_country_ax', '+358 18'], ['AL', 'country_select_modal_country_al', '+355'], ['DZ', 'country_select_modal_country_dz', '+213'], ['AS', 'country_select_modal_country_as', '+1 684'], ['AD', 'country_select_modal_country_ad', '+376'], ['AO', 'country_select_modal_country_ao', '+244'], ['AI', 'country_select_modal_country_ai', '+1 264'], ['AG', 'country_select_modal_country_ag', '+1 268'], ['AR', 'country_select_modal_country_ar', '+54'], ['AM', 'country_select_modal_country_am', '+374'], ['AW', 'country_select_modal_country_aw', '+297'], ['SH', 'country_select_modal_country_sh_ac', '+247'], ['AU', 'country_select_modal_country_au', '+61'], ['AU', 'country_select_modal_country_au_et', '+672'], ['AT', 'country_select_modal_country_at', '+43'], ['AZ', 'country_select_modal_country_az', '+994'], ['BS', 'country_select_modal_country_bs', '+1 242'], ['BH', 'country_select_modal_country_bh', '+973'], ['BD', 'country_select_modal_country_bd', '+880'], ['BB', 'country_select_modal_country_bb', '+1 246'], ['AG', 'country_select_modal_country_ag_bar', '+1 268'], ['BY', 'country_select_modal_country_by', '+375'], ['BE', 'country_select_modal_country_be', '+32'], ['BZ', 'country_select_modal_country_bz', '+501'], ['BJ', 'country_select_modal_country_bj', '+229'], ['BM', 'country_select_modal_country_bm', '+1 441'], ['BT', 'country_select_modal_country_bt', '+975'], ['BO', 'country_select_modal_country_bo', '+591'], ['BQ', 'country_select_modal_country_bq', '+599 7'], ['BA', 'country_select_modal_country_ba', '+387'], ['BW', 'country_select_modal_country_bw', '+267'], ['BR', 'country_select_modal_country_br', '+55'], ['IO', 'country_select_modal_country_io', '+246'], ['VG', 'country_select_modal_country_vg', '+1 284'], ['BN', 'country_select_modal_country_bn', '+673'], ['BG', 'country_select_modal_country_bg', '+359'], ['BF', 'country_select_modal_country_bf', '+226'], ['MY', 'country_select_modal_country_mm', '+95'], ['BI', 'country_select_modal_country_bi', '+257'], ['KH', 'country_select_modal_country_kh', '+855'], ['CM', 'country_select_modal_country_cm', '+237'], ['CA', 'country_select_modal_country_ca', '+1'], ['CV', 'country_select_modal_country_cv', '+238'], ['KY', 'country_select_modal_country_ky', '+1 345'], ['CF', 'country_select_modal_country_cf', '+236'], ['TD', 'country_select_modal_country_td', '+235'], ['CL', 'country_select_modal_country_cl', '+56'], ['CN', 'country_select_modal_country_cn', '+86'], ['CX', 'country_select_modal_country_cx', '+61'], ['CC', 'country_select_modal_country_cc', '+61'], ['CO', 'country_select_modal_country_co', '+57'], ['KM', 'country_select_modal_country_km', '+269'], ['CG', 'country_select_modal_country_cg', '+242'], ['CD', 'country_select_modal_country_cd', '+243'], ['CK', 'country_select_modal_country_ck', '+682'], ['CR', 'country_select_modal_country_cr', '+506'], ['CI', 'country_select_modal_country_ci', '+225'], ['HR', 'country_select_modal_country_hr', '+385'], ['CU', 'country_select_modal_country_cu', '+53'], ['CW', 'country_select_modal_country_cw', '+599 9'], ['CY', 'country_select_modal_country_cy', '+357'], ['CZ', 'country_select_modal_country_cz', '+420'], ['DK', 'country_select_modal_country_dk', '+45'], ['DG', 'country_select_modal_country_dg', '+246'], ['DJ', 'country_select_modal_country_dj', '+253'], ['DM', 'country_select_modal_country_dm', '+1 767'], ['DO', 'country_select_modal_country_do', '+1 809', '+1 829', '+1 849'], ['TL', 'country_select_modal_country_tl', '+670'], ['EC', 'country_select_modal_country_ec', '+593'], ['EG', 'country_select_modal_country_eg', '+20'], ['SV', 'country_select_modal_country_sv', '+503'], ['GQ', 'country_select_modal_country_gq', '+240'], ['ER', 'country_select_modal_country_er', '+291'], ['EE', 'country_select_modal_country_ee', '+372'], ['ET', 'country_select_modal_country_et', '+251'], ['FK', 'country_select_modal_country_fk', '+500'], ['FO', 'country_select_modal_country_fo', '+298'], ['FJ', 'country_select_modal_country_fj', '+679'], ['FI', 'country_select_modal_country_fi', '+358'], ['FR', 'country_select_modal_country_fr', '+33'], ['GF', 'country_select_modal_country_gf', '+594'], ['PF', 'country_select_modal_country_pf', '+689'], ['GA', 'country_select_modal_country_ga', '+241'], ['GM', 'country_select_modal_country_gm', '+220'], ['GE', 'country_select_modal_country_ge', '+995'], ['DE', 'country_select_modal_country_de', '+49'], ['GH', 'country_select_modal_country_gh', '+233'], ['GI', 'country_select_modal_country_gi', '+350'], ['GR', 'country_select_modal_country_gr', '+30'], ['GL', 'country_select_modal_country_gl', '+299'], ['GD', 'country_select_modal_country_gd', '+1 473'], ['GP', 'country_select_modal_country_gp', '+590'], ['GU', 'country_select_modal_country_gu', '+1 671'], ['GT', 'country_select_modal_country_gt', '+502'], ['GG', 'country_select_modal_country_gg', '+44'], ['GN', 'country_select_modal_country_gn', '+224'], ['GW', 'country_select_modal_country_gw', '+245'], ['GY', 'country_select_modal_country_gy', '+592'], ['HT', 'country_select_modal_country_ht', '+509'], ['HN', 'country_select_modal_country_hn', '+504'], ['HK', 'country_select_modal_country_hk', '+852'], ['HU', 'country_select_modal_country_hu', '+36'], ['IS', 'country_select_modal_country_is', '+354'], ['IN', 'country_select_modal_country_in', '+91'], ['ID', 'country_select_modal_country_id', '+62'], ['IR', 'country_select_modal_country_ir', '+98'], ['IQ', 'country_select_modal_country_iq', '+964'], ['IE', 'country_select_modal_country_ie', '+353'], ['IL', 'country_select_modal_country_il', '+972'], ['IT', 'country_select_modal_country_it', '+39'], ['JM', 'country_select_modal_country_jm', '+1 876'], ['SJ', 'country_select_modal_country_sj', '+47 79'], ['JP', 'country_select_modal_country_jp', '+81'], ['JE', 'country_select_modal_country_je', '+44'], ['JO', 'country_select_modal_country_jo', '+962'], ['KZ', 'country_select_modal_country_kz', '+7 6', '+7 7'], ['KE', 'country_select_modal_country_ke', '+254'], ['KI', 'country_select_modal_country_ki', '+686'], ['KP', 'country_select_modal_country_kp', '+850'], ['KR', 'country_select_modal_country_kr', '+82'], ['KW', 'country_select_modal_country_kw', '+965'], ['KG', 'country_select_modal_country_kg', '+996'], ['LA', 'country_select_modal_country_la', '+856'], ['LV', 'country_select_modal_country_lv', '+371'], ['LB', 'country_select_modal_country_lb', '+961'], ['LS', 'country_select_modal_country_ls', '+266'], ['LR', 'country_select_modal_country_lr', '+231'], ['LY', 'country_select_modal_country_ly', '+218'], ['LI', 'country_select_modal_country_li', '+423'], ['LT', 'country_select_modal_country_lt', '+370'], ['LU', 'country_select_modal_country_lu', '+352'], ['MO', 'country_select_modal_country_mo', '+853'], ['MK', 'country_select_modal_country_mk', '+389'], ['MG', 'country_select_modal_country_mg', '+261'], ['MW', 'country_select_modal_country_mw', '+265'], ['MY', 'country_select_modal_country_my', '+60'], ['MV', 'country_select_modal_country_mv', '+960'], ['ML', 'country_select_modal_country_ml', '+223'], ['MT', 'country_select_modal_country_mt', '+356'], ['MH', 'country_select_modal_country_mh', '+692'], ['MQ', 'country_select_modal_country_mq', '+596'], ['MR', 'country_select_modal_country_mr', '+222'], ['MU', 'country_select_modal_country_mu', '+230'], ['YT', 'country_select_modal_country_yt', '+262'], ['MX', 'country_select_modal_country_mx', '+52'], ['FM', 'country_select_modal_country_fm', '+691'], ['MD', 'country_select_modal_country_md', '+373'], ['MC', 'country_select_modal_country_mc', '+377'], ['MN', 'country_select_modal_country_mn', '+976'], ['ME', 'country_select_modal_country_me', '+382'], ['MS', 'country_select_modal_country_ms', '+1 664'], ['MA', 'country_select_modal_country_ma', '+212'], ['MZ', 'country_select_modal_country_mz', '+258'], ['NA', 'country_select_modal_country_na', '+264'], ['NR', 'country_select_modal_country_nr', '+674'], ['NP', 'country_select_modal_country_np', '+977'], ['NL', 'country_select_modal_country_nl', '+31'], ['NC', 'country_select_modal_country_nc', '+687'], ['NZ', 'country_select_modal_country_nz', '+64'], ['NI', 'country_select_modal_country_ni', '+505'], ['NE', 'country_select_modal_country_ne', '+227'], ['NG', 'country_select_modal_country_ng', '+234'], ['NU', 'country_select_modal_country_nu', '+683'], ['NF', 'country_select_modal_country_nf', '+672'], ['MP', 'country_select_modal_country_mp', '+1 670'], ['NO', 'country_select_modal_country_no', '+47'], ['OM', 'country_select_modal_country_om', '+968'], ['PK', 'country_select_modal_country_pk', '+92'], ['PW', 'country_select_modal_country_pw', '+680'], ['PS', 'country_select_modal_country_ps', '+970'], ['PA', 'country_select_modal_country_pa', '+507'], ['PG', 'country_select_modal_country_pg', '+675'], ['PY', 'country_select_modal_country_py', '+595'], ['PE', 'country_select_modal_country_pe', '+51'], ['PH', 'country_select_modal_country_ph', '+63'], ['PN', 'country_select_modal_country_pn', '+64'], ['PL', 'country_select_modal_country_pl', '+48'], ['PT', 'country_select_modal_country_pt', '+351'], ['PR', 'country_select_modal_country_pr', '+1 787', '+1 939'], ['QA', 'country_select_modal_country_qa', '+974'], ['RE', 'country_select_modal_country_re', '+262'], ['RO', 'country_select_modal_country_ro', '+40'], ['RU', 'country_select_modal_country_ru', '+7'], ['RW', 'country_select_modal_country_rw', '+250'], ['BL', 'country_select_modal_country_bl', '+590'], ['SH', 'country_select_modal_country_sh', '+290'], ['KN', 'country_select_modal_country_kn', '+1 869'], ['LC', 'country_select_modal_country_lc', '+1 758'], ['MF', 'country_select_modal_country_mf', '+590'], ['PM', 'country_select_modal_country_pm', '+508'], ['VC', 'country_select_modal_country_vc', '+1 784'], ['WS', 'country_select_modal_country_ws', '+685'], ['SM', 'country_select_modal_country_sm', '+378'], ['ST', 'country_select_modal_country_st', '+239'], ['SA', 'country_select_modal_country_sa', '+966'], ['SN', 'country_select_modal_country_sn', '+221'], ['RS', 'country_select_modal_country_rs', '+381'], ['SC', 'country_select_modal_country_sc', '+248'], ['SL', 'country_select_modal_country_sl', '+232'], ['SG', 'country_select_modal_country_sg', '+65'], ['BQ', 'country_select_modal_country_nl_bq3', '+599 3'], ['SX', 'country_select_modal_country_sx', '+1 721'], ['SK', 'country_select_modal_country_sk', '+421'], ['SI', 'country_select_modal_country_si', '+386'], ['SB', 'country_select_modal_country_sb', '+677'], ['SO', 'country_select_modal_country_so', '+252'], ['ZA', 'country_select_modal_country_za', '+27'], ['GS', 'country_select_modal_country_gs', '+500'], [false, 'country_select_modal_country_ge_so', '+995 34'], ['SS', 'country_select_modal_country_ss', '+211'], ['ES', 'country_select_modal_country_es', '+34'], ['LK', 'country_select_modal_country_lk', '+94'], ['SD', 'country_select_modal_country_sd', '+249'], ['SR', 'country_select_modal_country_sr', '+597'], ['SJ', 'country_select_modal_country_sj_no', '+47 79'], ['SZ', 'country_select_modal_country_sz', '+268'], ['SE', 'country_select_modal_country_se', '+46'], ['CH', 'country_select_modal_country_ch', '+41'], ['SY', 'country_select_modal_country_sy', '+963'], ['TW', 'country_select_modal_country_tw', '+886'], ['TJ', 'country_select_modal_country_tj', '+992'], ['TZ', 'country_select_modal_country_tz', '+255'], ['TH', 'country_select_modal_country_th', '+66'], ['TG', 'country_select_modal_country_tg', '+228'], ['TK', 'country_select_modal_country_tk', '+690'], ['TO', 'country_select_modal_country_to', '+676'], ['TT', 'country_select_modal_country_tt', '+1 868'], ['TN', 'country_select_modal_country_tn', '+216'], ['TR', 'country_select_modal_country_tr', '+90'], ['TM', 'country_select_modal_country_tm', '+993'], ['TC', 'country_select_modal_country_tc', '+1 649'], ['TV', 'country_select_modal_country_tv', '+688'], ['UG', 'country_select_modal_country_ug', '+256'], ['UA', 'country_select_modal_country_ua', '+380'], ['AE', 'country_select_modal_country_ae', '+971'], ['UK', 'country_select_modal_country_uk', '+44'], ['US', 'country_select_modal_country_us', '+1'], ['UY', 'country_select_modal_country_uy', '+598'], ['VI', 'country_select_modal_country_vi', '+1 340'], ['UZ', 'country_select_modal_country_uz', '+998'], ['VU', 'country_select_modal_country_vu', '+678'], ['VE', 'country_select_modal_country_ve', '+58'], ['VA', 'country_select_modal_country_va', '+39 06 698', '+379'], ['VN', 'country_select_modal_country_vn', '+84'], ['WF', 'country_select_modal_country_wf', '+681'], ['YE', 'country_select_modal_country_ye', '+967'], ['ZM', 'country_select_modal_country_zm', '+260'], [false, 'country_select_modal_country_tz_uk', '+255'], ['ZW', 'country_select_modal_country_zw', '+263']]

Config.LangCountries = {
    'es': 'ES',
    'ru': 'RU',
    'en': 'US',
    'de': 'DE',
    'it': 'IT',
    'nl': 'NL',
    'fr': 'FR',
    'ca': 'ES',
    'es-419': 'MX',
    'ar': 'SA',
    'he': 'IL',
    'tr': 'TR',
    'id': 'ID',
    'pl': 'PL'
}

// ConfigStorage
;(function (window) {
    var keyPrefix = ''
    var noPrefix = false
    var cache = {}
    var useCs = !!(window.chrome && chrome.storage && chrome.storage.local)
    var useLs = !useCs && !!window.localStorage

    function storageSetPrefix(newPrefix) {
        keyPrefix = newPrefix
    }

    function storageSetNoPrefix() {
        noPrefix = true
    }

    function storageGetPrefix() {
        if (noPrefix) {
            noPrefix = false
            return ''
        }
        return keyPrefix
    }

    function storageGetValue(keys, callback) {
        var single = false
        if (!Array.isArray(keys)) {
            keys = Array.prototype.slice.call(arguments)
            callback = keys.pop()
            single = keys.length == 1
        }
        var result = [],
            value
        var allFound = true
        var prefix = storageGetPrefix(),
            i, key

        for (i = 0; i < keys.length; i++) {
            key = keys[i] = prefix + keys[i]
            if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined) {
                result.push(cache[key])
            }
            else if (useLs) {
                try {
                    value = localStorage.getItem(key)
                } catch (e) {
                    useLs = false
                }
                try {
                    value = (value === undefined || value === null) ? false : JSON.parse(value)
                } catch (e) {
                    value = false
                }
                result.push(cache[key] = value)
            }
            else if (!useCs) {
                result.push(cache[key] = false)
            } else {
                allFound = false
            }
        }

        if (allFound) {
            return callback(single ? result[0] : result)
        }

        chrome.storage.local.get(keys, function (resultObj) {
            var value
            result = []
            for (i = 0; i < keys.length; i++) {
                key = keys[i]
                value = resultObj[key]
                value = value === undefined || value === null ? false : JSON.parse(value)
                result.push(cache[key] = value)
            }

            callback(single ? result[0] : result)
        })
    }

    function storageSetValue(obj, callback) {
        var keyValues = {}
        var prefix = storageGetPrefix(),
            key, value

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                value = obj[key]
                key = prefix + key
                cache[key] = value
                value = JSON.stringify(value)
                if (useLs) {
                    try {
                        localStorage.setItem(key, value)
                    } catch (e) {
                        useLs = false
                    }
                } else {
                    keyValues[key] = value
                }
            }
        }

        if (useLs || !useCs) {
            if (callback) {
                callback()
            }
            return
        }

        chrome.storage.local.set(keyValues, callback)
    }

    function storageRemoveValue(keys, callback) {
        if (!Array.isArray(keys)) {
            keys = Array.prototype.slice.call(arguments)
            if (typeof keys[keys.length - 1] === 'function') {
                callback = keys.pop()
            }
        }
        var prefix = storageGetPrefix(),
            i, key

        for (i = 0; i < keys.length; i++) {
            key = keys[i] = prefix + keys[i]
            delete cache[key]
            if (useLs) {
                try {
                    localStorage.removeItem(key)
                } catch (e) {
                    useLs = false
                }
            }
        }
        if (useCs) {
            chrome.storage.local.remove(keys, callback)
        }
        else if (callback) {
            callback()
        }
    }

    function storageClear(callback) {
        if (useLs) {
            try {
                localStorage.clear()
            } catch (e) {
                useLs = false
            }
        }

        if (useCs) {
            chrome.storage.local.clear(function () {
                cache = {}
                callback()
            })
        } else {
            cache = {}
            callback()
        }
    }

    window.ConfigStorage = {
        prefix: storageSetPrefix,
        noPrefix: storageSetNoPrefix,
        get: storageGetValue,
        set: storageSetValue,
        remove: storageRemoveValue,
        clear: storageClear
    }
})(this)
