module.exports = [
  88242,
  (a) => {
    'use strict';
    var b = a.i(87924),
      c = a.i(98912);
    function d() {
      return (0, b.jsx)('div', {
        className: 'wallet-connect',
        style: { padding: '1rem', display: 'flex', justifyContent: 'flex-end' },
        children: (0, b.jsxs)('div', {
          className: 'wallet-panel',
          children: [
            (0, b.jsxs)('div', {
              className: 'wallet-brand',
              children: [
                (0, b.jsx)('img', {
                  src: '/kfc-logo.png',
                  alt: 'KFC',
                  className: 'wallet-logo',
                  onError: (a) => {
                    let b = a.target,
                      c =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect fill='%23cc0000' width='100%' height='100%' rx='12'/><text x='50%' y='56%' font-size='34' fill='%23ffffff' font-family='Arial' font-weight='700' text-anchor='middle'>K</text></svg>";
                    b.src !== c && (b.src = c);
                  },
                }),
                (0, b.jsxs)('div', {
                  className: 'wallet-copy',
                  children: [
                    (0, b.jsx)('div', { className: 'wallet-title', children: 'KFC Box' }),
                    (0, b.jsx)('div', {
                      className: 'wallet-sub',
                      children: 'Connect to fry, collect & claim rewards',
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)('div', {
              className: 'wallet-cta',
              children: (0, b.jsx)(c.ConnectButton, {}),
            }),
          ],
        }),
      });
    }
    a.s(['WalletConnect', () => d]);
  },
  41016,
  (a, b, c) => {
    'use strict';
    Object.defineProperty(c, '__esModule', { value: !0 }),
      (c.cssValue = c.parseLengthAndUnit = void 0);
    var d = {
      cm: !0,
      mm: !0,
      in: !0,
      px: !0,
      pt: !0,
      pc: !0,
      em: !0,
      ex: !0,
      ch: !0,
      rem: !0,
      vw: !0,
      vh: !0,
      vmin: !0,
      vmax: !0,
      '%': !0,
    };
    function e(a) {
      if ('number' == typeof a) return { value: a, unit: 'px' };
      var b,
        c = (a.match(/^[0-9.]*/) || '').toString();
      b = c.includes('.') ? parseFloat(c) : parseInt(c, 10);
      var e = (a.match(/[^0-9]*$/) || '').toString();
      return d[e]
        ? { value: b, unit: e }
        : (console.warn(
            'React Spinners: '
              .concat(a, ' is not a valid css value. Defaulting to ')
              .concat(b, 'px.')
          ),
          { value: b, unit: 'px' });
    }
    (c.parseLengthAndUnit = e),
      (c.cssValue = function (a) {
        var b = e(a);
        return ''.concat(b.value).concat(b.unit);
      });
  },
  21742,
  (a, b, c) => {
    'use strict';
    Object.defineProperty(c, '__esModule', { value: !0 }),
      (c.createAnimation = void 0),
      (c.createAnimation = function (a, b, c) {
        return 'react-spinners-'.concat(a, '-').concat(c);
      });
  },
  38814,
  (a, b, c) => {
    'use strict';
    var d =
        (a.e && a.e.__assign) ||
        function () {
          return (d =
            Object.assign ||
            function (a) {
              for (var b, c = 1, d = arguments.length; c < d; c++)
                for (var e in (b = arguments[c]))
                  Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
              return a;
            }).apply(this, arguments);
        },
      e =
        (a.e && a.e.__createBinding) ||
        (Object.create
          ? function (a, b, c, d) {
              void 0 === d && (d = c);
              var e = Object.getOwnPropertyDescriptor(b, c);
              (!e || ('get' in e ? !b.__esModule : e.writable || e.configurable)) &&
                (e = {
                  enumerable: !0,
                  get: function () {
                    return b[c];
                  },
                }),
                Object.defineProperty(a, d, e);
            }
          : function (a, b, c, d) {
              void 0 === d && (d = c), (a[d] = b[c]);
            }),
      f =
        (a.e && a.e.__setModuleDefault) ||
        (Object.create
          ? function (a, b) {
              Object.defineProperty(a, 'default', { enumerable: !0, value: b });
            }
          : function (a, b) {
              a.default = b;
            }),
      g =
        (a.e && a.e.__importStar) ||
        function (a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a)
            for (var c in a)
              'default' !== c && Object.prototype.hasOwnProperty.call(a, c) && e(b, a, c);
          return f(b, a), b;
        },
      h =
        (a.e && a.e.__rest) ||
        function (a, b) {
          var c = {};
          for (var d in a)
            Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d]);
          if (null != a && 'function' == typeof Object.getOwnPropertySymbols)
            for (var e = 0, d = Object.getOwnPropertySymbols(a); e < d.length; e++)
              0 > b.indexOf(d[e]) &&
                Object.prototype.propertyIsEnumerable.call(a, d[e]) &&
                (c[d[e]] = a[d[e]]);
          return c;
        };
    Object.defineProperty(c, '__esModule', { value: !0 });
    var i = g(a.r(72131)),
      j = a.r(41016),
      k = (0, a.r(21742).createAnimation)(
        'ClipLoader',
        '0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}',
        'clip'
      );
    c.default = function (a) {
      var b = a.loading,
        c = a.color,
        e = void 0 === c ? '#000000' : c,
        f = a.speedMultiplier,
        g = a.cssOverride,
        l = a.size,
        m = void 0 === l ? 35 : l,
        n = h(a, ['loading', 'color', 'speedMultiplier', 'cssOverride', 'size']),
        o = d(
          {
            background: 'transparent !important',
            width: (0, j.cssValue)(m),
            height: (0, j.cssValue)(m),
            borderRadius: '100%',
            border: '2px solid',
            borderTopColor: e,
            borderBottomColor: 'transparent',
            borderLeftColor: e,
            borderRightColor: e,
            display: 'inline-block',
            animation: ''
              .concat(k, ' ')
              .concat(0.75 / (void 0 === f ? 1 : f), 's 0s infinite linear'),
            animationFillMode: 'both',
          },
          void 0 === g ? {} : g
        );
      return void 0 === b || b ? i.createElement('span', d({ style: o }, n)) : null;
    };
  },
  23624,
  (a, b, c) => {
    b.exports = function () {
      var a = document.getSelection();
      if (!a.rangeCount) return function () {};
      for (var b = document.activeElement, c = [], d = 0; d < a.rangeCount; d++)
        c.push(a.getRangeAt(d));
      switch (b.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
          b.blur();
          break;
        default:
          b = null;
      }
      return (
        a.removeAllRanges(),
        function () {
          'Caret' === a.type && a.removeAllRanges(),
            a.rangeCount ||
              c.forEach(function (b) {
                a.addRange(b);
              }),
            b && b.focus();
        }
      );
    };
  },
  46664,
  (a, b, c) => {
    'use strict';
    var d = a.r(23624),
      e = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' };
    b.exports = function (a, b) {
      var c,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !1;
      b || (b = {}), (g = b.debug || !1);
      try {
        if (
          ((i = d()),
          (j = document.createRange()),
          (k = document.getSelection()),
          ((l = document.createElement('span')).textContent = a),
          (l.ariaHidden = 'true'),
          (l.style.all = 'unset'),
          (l.style.position = 'fixed'),
          (l.style.top = 0),
          (l.style.clip = 'rect(0, 0, 0, 0)'),
          (l.style.whiteSpace = 'pre'),
          (l.style.webkitUserSelect = 'text'),
          (l.style.MozUserSelect = 'text'),
          (l.style.msUserSelect = 'text'),
          (l.style.userSelect = 'text'),
          l.addEventListener('copy', function (c) {
            if ((c.stopPropagation(), b.format))
              if ((c.preventDefault(), void 0 === c.clipboardData)) {
                g && console.warn('unable to use e.clipboardData'),
                  g && console.warn('trying IE specific stuff'),
                  window.clipboardData.clearData();
                var d = e[b.format] || e.default;
                window.clipboardData.setData(d, a);
              } else c.clipboardData.clearData(), c.clipboardData.setData(b.format, a);
            b.onCopy && (c.preventDefault(), b.onCopy(c.clipboardData));
          }),
          document.body.appendChild(l),
          j.selectNodeContents(l),
          k.addRange(j),
          !document.execCommand('copy'))
        )
          throw Error('copy command was unsuccessful');
        m = !0;
      } catch (d) {
        g && console.error('unable to copy using execCommand: ', d),
          g && console.warn('trying IE specific stuff');
        try {
          window.clipboardData.setData(b.format || 'text', a),
            b.onCopy && b.onCopy(window.clipboardData),
            (m = !0);
        } catch (d) {
          g && console.error('unable to copy using clipboardData: ', d),
            g && console.error('falling back to prompt'),
            (c = 'message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'),
            (f = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C'),
            (h = c.replace(/#{\s*key\s*}/g, f)),
            window.prompt(h, a);
        }
      } finally {
        k && ('function' == typeof k.removeRange ? k.removeRange(j) : k.removeAllRanges()),
          l && document.body.removeChild(l),
          i();
      }
      return m;
    };
  },
  20490,
  (a) => {
    'use strict';
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = a.i(87924),
      m = a.i(98912),
      n = a.i(72131),
      o = a.i(17760),
      p = a.i(63770),
      q = a.i(79716),
      r = a.i(35110);
    function s(a) {
      let b = Object.entries(a).map(([a, b]) => (0, q.object)({ [a]: b }));
      return (0, q.pipe)(
        (0, q.union)(b),
        (0, q.transform)((a) => ({ ...a, $kind: Object.keys(a)[0] }))
      );
    }
    let t = (0, q.pipe)(
        (0, q.string)(),
        (0, q.transform)((a) => (0, r.normalizeIotaAddress)(a)),
        (0, q.check)(r.isValidIotaAddress)
      ),
      u = (0, q.string)(),
      v = (0, q.pipe)(
        (0, q.union)([(0, q.string)(), (0, q.pipe)((0, q.number)(), (0, q.integer)())]),
        (0, q.check)((a) => {
          try {
            return BigInt(a), BigInt(a) >= 0 && 0xffffffffffffffffn >= BigInt(a);
          } catch {
            return !1;
          }
        }, 'Invalid u64')
      ),
      w = (0, q.object)({ objectId: t, version: v, digest: (0, q.string)() }),
      x = (0, q.pipe)(
        (0, q.union)([
          (0, q.object)({ GasCoin: (0, q.literal)(!0) }),
          (0, q.object)({
            Input: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
            type: (0, q.optional)((0, q.literal)('pure')),
          }),
          (0, q.object)({
            Input: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
            type: (0, q.optional)((0, q.literal)('object')),
          }),
          (0, q.object)({ Result: (0, q.pipe)((0, q.number)(), (0, q.integer)()) }),
          (0, q.object)({
            NestedResult: (0, q.tuple)([
              (0, q.pipe)((0, q.number)(), (0, q.integer)()),
              (0, q.pipe)((0, q.number)(), (0, q.integer)()),
            ]),
          }),
        ]),
        (0, q.transform)((a) => ({ ...a, $kind: Object.keys(a)[0] }))
      ),
      y = (0, q.object)({
        budget: (0, q.nullable)(v),
        price: (0, q.nullable)(v),
        owner: (0, q.nullable)(t),
        payment: (0, q.nullable)((0, q.array)(w)),
      });
    (0, q.object)({
      address: (0, q.string)(),
      module: (0, q.string)(),
      name: (0, q.string)(),
      typeParams: (0, q.array)((0, q.string)()),
    });
    let z = (0, q.union)([
        (0, q.literal)('address'),
        (0, q.literal)('bool'),
        (0, q.literal)('u8'),
        (0, q.literal)('u16'),
        (0, q.literal)('u32'),
        (0, q.literal)('u64'),
        (0, q.literal)('u128'),
        (0, q.literal)('u256'),
        (0, q.object)({ vector: (0, q.lazy)(() => z) }),
        (0, q.object)({
          datatype: (0, q.object)({
            package: (0, q.string)(),
            module: (0, q.string)(),
            type: (0, q.string)(),
            typeParameters: (0, q.array)((0, q.lazy)(() => z)),
          }),
        }),
        (0, q.object)({ typeParameter: (0, q.pipe)((0, q.number)(), (0, q.integer)()) }),
      ]),
      A = (0, q.object)({
        ref: (0, q.nullable)((0, q.union)([(0, q.literal)('&'), (0, q.literal)('&mut')])),
        body: z,
      }),
      B = (0, q.object)({
        package: t,
        module: (0, q.string)(),
        function: (0, q.string)(),
        typeArguments: (0, q.array)((0, q.string)()),
        arguments: (0, q.array)(x),
        _argumentTypes: (0, q.optional)((0, q.nullable)((0, q.array)(A))),
      }),
      C = (0, q.object)({
        name: (0, q.string)(),
        inputs: (0, q.record)((0, q.string)(), (0, q.union)([x, (0, q.array)(x)])),
        data: (0, q.record)((0, q.string)(), (0, q.unknown)()),
      }),
      D = s({
        MoveCall: B,
        TransferObjects: (0, q.object)({ objects: (0, q.array)(x), address: x }),
        SplitCoins: (0, q.object)({ coin: x, amounts: (0, q.array)(x) }),
        MergeCoins: (0, q.object)({ destination: x, sources: (0, q.array)(x) }),
        Publish: (0, q.object)({ modules: (0, q.array)(u), dependencies: (0, q.array)(t) }),
        MakeMoveVec: (0, q.object)({
          type: (0, q.nullable)((0, q.string)()),
          elements: (0, q.array)(x),
        }),
        Upgrade: (0, q.object)({
          modules: (0, q.array)(u),
          dependencies: (0, q.array)(t),
          package: t,
          ticket: x,
        }),
        $Intent: C,
      }),
      E = s({
        ImmOrOwnedObject: w,
        SharedObject: (0, q.object)({
          objectId: t,
          initialSharedVersion: v,
          mutable: (0, q.boolean)(),
        }),
        Receiving: w,
      }),
      F = s({
        Object: E,
        Pure: (0, q.object)({ bytes: u }),
        UnresolvedPure: (0, q.object)({ value: (0, q.unknown)() }),
        UnresolvedObject: (0, q.object)({
          objectId: t,
          version: (0, q.optional)((0, q.nullable)(v)),
          digest: (0, q.optional)((0, q.nullable)((0, q.string)())),
          initialSharedVersion: (0, q.optional)((0, q.nullable)(v)),
        }),
      }),
      G = s({ Object: E, Pure: (0, q.object)({ bytes: u }) }),
      H = s({ None: (0, q.literal)(!0), Epoch: v }),
      I = (0, q.object)({
        version: (0, q.literal)(2),
        sender: (0, q.nullish)(t),
        expiration: (0, q.nullish)(H),
        gasData: y,
        inputs: (0, q.array)(F),
        commands: (0, q.array)(D),
      });
    var J =
      (((b = J || {})[(b.COMPATIBLE = 0)] = 'COMPATIBLE'),
      (b[(b.ADDITIVE = 128)] = 'ADDITIVE'),
      (b[(b.DEP_ONLY = 192)] = 'DEP_ONLY'),
      b);
    let K = {
      MoveCall(a) {
        let [b, c = '', d = ''] =
          'target' in a ? a.target.split('::') : [a.package, a.module, a.function];
        return {
          $kind: 'MoveCall',
          MoveCall: {
            package: b,
            module: c,
            function: d,
            typeArguments: a.typeArguments ?? [],
            arguments: a.arguments ?? [],
          },
        };
      },
      TransferObjects: (a, b) => ({
        $kind: 'TransferObjects',
        TransferObjects: { objects: a.map((a) => (0, q.parse)(x, a)), address: (0, q.parse)(x, b) },
      }),
      SplitCoins: (a, b) => ({
        $kind: 'SplitCoins',
        SplitCoins: { coin: (0, q.parse)(x, a), amounts: b.map((a) => (0, q.parse)(x, a)) },
      }),
      MergeCoins: (a, b) => ({
        $kind: 'MergeCoins',
        MergeCoins: { destination: (0, q.parse)(x, a), sources: b.map((a) => (0, q.parse)(x, a)) },
      }),
      Publish: ({ modules: a, dependencies: b }) => ({
        $kind: 'Publish',
        Publish: {
          modules: a.map((a) => ('string' == typeof a ? a : (0, o.toBase64)(new Uint8Array(a)))),
          dependencies: b.map((a) => (0, r.normalizeIotaObjectId)(a)),
        },
      }),
      Upgrade: ({ modules: a, dependencies: b, package: c, ticket: d }) => ({
        $kind: 'Upgrade',
        Upgrade: {
          modules: a.map((a) => ('string' == typeof a ? a : (0, o.toBase64)(new Uint8Array(a)))),
          dependencies: b.map((a) => (0, r.normalizeIotaObjectId)(a)),
          package: c,
          ticket: (0, q.parse)(x, d),
        },
      }),
      MakeMoveVec: ({ type: a, elements: b }) => ({
        $kind: 'MakeMoveVec',
        MakeMoveVec: { type: a ?? null, elements: b.map((a) => (0, q.parse)(x, a)) },
      }),
      Intent: ({ name: a, inputs: b = {}, data: c = {} }) => ({
        $kind: '$Intent',
        $Intent: {
          name: a,
          inputs: Object.fromEntries(
            Object.entries(b).map(([a, b]) => [
              a,
              Array.isArray(b) ? b.map((a) => (0, q.parse)(x, a)) : (0, q.parse)(x, b),
            ])
          ),
          data: c,
        },
      }),
    };
    var L = a.i(20914);
    let M = (0, q.object)({
        digest: (0, q.string)(),
        objectId: (0, q.string)(),
        version: (0, q.union)([
          (0, q.pipe)((0, q.number)(), (0, q.integer)()),
          (0, q.string)(),
          (0, q.bigint)(),
        ]),
      }),
      N = s({
        ImmOrOwned: M,
        Shared: (0, q.object)({ objectId: t, initialSharedVersion: v, mutable: (0, q.boolean)() }),
        Receiving: M,
      }),
      O = s({ Object: N, Pure: (0, q.array)((0, q.pipe)((0, q.number)(), (0, q.integer)())) }),
      P = (0, q.union)([
        (0, q.object)({
          kind: (0, q.literal)('Input'),
          index: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
          value: (0, q.unknown)(),
          type: (0, q.optional)((0, q.literal)('object')),
        }),
        (0, q.object)({
          kind: (0, q.literal)('Input'),
          index: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
          value: (0, q.unknown)(),
          type: (0, q.literal)('pure'),
        }),
      ]),
      Q = (0, q.union)([
        (0, q.object)({ Epoch: (0, q.pipe)((0, q.number)(), (0, q.integer)()) }),
        (0, q.object)({ None: (0, q.nullable)((0, q.literal)(!0)) }),
      ]),
      R = (0, q.pipe)(
        (0, q.union)([(0, q.number)(), (0, q.string)(), (0, q.bigint)()]),
        (0, q.check)((a) => {
          if (!['string', 'number', 'bigint'].includes(typeof a)) return !1;
          try {
            return BigInt(a), !0;
          } catch {
            return !1;
          }
        })
      ),
      S = (0, q.union)([
        (0, q.object)({ bool: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ u8: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ u64: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ u128: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ address: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ signer: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ vector: (0, q.lazy)(() => S) }),
        (0, q.object)({ struct: (0, q.lazy)(() => T) }),
        (0, q.object)({ u16: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ u32: (0, q.nullable)((0, q.literal)(!0)) }),
        (0, q.object)({ u256: (0, q.nullable)((0, q.literal)(!0)) }),
      ]),
      T = (0, q.object)({
        address: (0, q.string)(),
        module: (0, q.string)(),
        name: (0, q.string)(),
        typeParams: (0, q.array)(S),
      }),
      U = (0, q.object)({
        budget: (0, q.optional)(R),
        price: (0, q.optional)(R),
        payment: (0, q.optional)((0, q.array)(M)),
        owner: (0, q.optional)((0, q.string)()),
      }),
      V = [
        P,
        (0, q.object)({ kind: (0, q.literal)('GasCoin') }),
        (0, q.object)({
          kind: (0, q.literal)('Result'),
          index: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
        }),
        (0, q.object)({
          kind: (0, q.literal)('NestedResult'),
          index: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
          resultIndex: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
        }),
      ],
      W = (0, q.union)([...V]),
      X = (0, q.object)({
        kind: (0, q.literal)('MoveCall'),
        target: (0, q.pipe)(
          (0, q.string)(),
          (0, q.check)((a) => 3 === a.split('::').length)
        ),
        typeArguments: (0, q.array)((0, q.string)()),
        arguments: (0, q.array)(W),
      }),
      Y = (0, q.object)({
        kind: (0, q.literal)('TransferObjects'),
        objects: (0, q.array)(W),
        address: W,
      }),
      Z = (0, q.object)({ kind: (0, q.literal)('SplitCoins'), coin: W, amounts: (0, q.array)(W) }),
      $ = (0, q.object)({
        kind: (0, q.literal)('MergeCoins'),
        destination: W,
        sources: (0, q.array)(W),
      }),
      _ = (0, q.object)({
        kind: (0, q.literal)('MakeMoveVec'),
        type: (0, q.union)([
          (0, q.object)({ Some: S }),
          (0, q.object)({ None: (0, q.nullable)((0, q.literal)(!0)) }),
        ]),
        objects: (0, q.array)(W),
      }),
      aa = (0, q.object)({
        kind: (0, q.literal)('Publish'),
        modules: (0, q.array)((0, q.array)((0, q.pipe)((0, q.number)(), (0, q.integer)()))),
        dependencies: (0, q.array)((0, q.string)()),
      }),
      ab = (0, q.object)({
        kind: (0, q.literal)('Upgrade'),
        modules: (0, q.array)((0, q.array)((0, q.pipe)((0, q.number)(), (0, q.integer)()))),
        dependencies: (0, q.array)((0, q.string)()),
        packageId: (0, q.string)(),
        ticket: W,
      }),
      ac = (0, q.union)([X, Y, Z, $, aa, ab, _]);
    function ad(a) {
      let b = a.inputs.map((a, b) => {
        if (a.Object)
          return {
            kind: 'Input',
            index: b,
            value: {
              Object: a.Object.ImmOrOwnedObject
                ? { ImmOrOwned: a.Object.ImmOrOwnedObject }
                : a.Object.Receiving
                ? {
                    Receiving: {
                      digest: a.Object.Receiving.digest,
                      version: a.Object.Receiving.version,
                      objectId: a.Object.Receiving.objectId,
                    },
                  }
                : {
                    Shared: {
                      mutable: a.Object.SharedObject.mutable,
                      initialSharedVersion: a.Object.SharedObject.initialSharedVersion,
                      objectId: a.Object.SharedObject.objectId,
                    },
                  },
            },
            type: 'object',
          };
        if (a.Pure)
          return {
            kind: 'Input',
            index: b,
            value: { Pure: Array.from((0, o.fromBase64)(a.Pure.bytes)) },
            type: 'pure',
          };
        if (a.UnresolvedPure)
          return { kind: 'Input', type: 'pure', index: b, value: a.UnresolvedPure.value };
        if (a.UnresolvedObject)
          return { kind: 'Input', type: 'object', index: b, value: a.UnresolvedObject.objectId };
        throw Error('Invalid input');
      });
      return {
        version: 1,
        sender: a.sender ?? void 0,
        expiration:
          a.expiration?.$kind === 'Epoch'
            ? { Epoch: Number(a.expiration.Epoch) }
            : a.expiration
            ? { None: !0 }
            : null,
        gasConfig: {
          owner: a.gasData.owner ?? void 0,
          budget: a.gasData.budget ?? void 0,
          price: a.gasData.price ?? void 0,
          payment: a.gasData.payment ?? void 0,
        },
        inputs: b,
        transactions: a.commands.map((a) => {
          if (a.MakeMoveVec)
            return {
              kind: 'MakeMoveVec',
              type:
                null === a.MakeMoveVec.type
                  ? { None: !0 }
                  : { Some: L.TypeTagSerializer.parseFromStr(a.MakeMoveVec.type) },
              objects: a.MakeMoveVec.elements.map((a) => ae(a, b)),
            };
          if (a.MergeCoins)
            return {
              kind: 'MergeCoins',
              destination: ae(a.MergeCoins.destination, b),
              sources: a.MergeCoins.sources.map((a) => ae(a, b)),
            };
          if (a.MoveCall)
            return {
              kind: 'MoveCall',
              target: `${a.MoveCall.package}::${a.MoveCall.module}::${a.MoveCall.function}`,
              typeArguments: a.MoveCall.typeArguments,
              arguments: a.MoveCall.arguments.map((a) => ae(a, b)),
            };
          if (a.Publish)
            return {
              kind: 'Publish',
              modules: a.Publish.modules.map((a) => Array.from((0, o.fromBase64)(a))),
              dependencies: a.Publish.dependencies,
            };
          if (a.SplitCoins)
            return {
              kind: 'SplitCoins',
              coin: ae(a.SplitCoins.coin, b),
              amounts: a.SplitCoins.amounts.map((a) => ae(a, b)),
            };
          if (a.TransferObjects)
            return {
              kind: 'TransferObjects',
              objects: a.TransferObjects.objects.map((a) => ae(a, b)),
              address: ae(a.TransferObjects.address, b),
            };
          if (a.Upgrade)
            return {
              kind: 'Upgrade',
              modules: a.Upgrade.modules.map((a) => Array.from((0, o.fromBase64)(a))),
              dependencies: a.Upgrade.dependencies,
              packageId: a.Upgrade.package,
              ticket: ae(a.Upgrade.ticket, b),
            };
          throw Error(`Unknown transaction ${Object.keys(a)}`);
        }),
      };
    }
    function ae(a, b) {
      if ('GasCoin' === a.$kind) return { kind: 'GasCoin' };
      if ('Result' === a.$kind) return { kind: 'Result', index: a.Result };
      if ('NestedResult' === a.$kind)
        return { kind: 'NestedResult', index: a.NestedResult[0], resultIndex: a.NestedResult[1] };
      if ('Input' === a.$kind) return b[a.Input];
      throw Error(`Invalid argument ${Object.keys(a)}`);
    }
    function af(a) {
      switch (a.kind) {
        case 'GasCoin':
          return { GasCoin: !0 };
        case 'Result':
          return { Result: a.index };
        case 'NestedResult':
          return { NestedResult: [a.index, a.resultIndex] };
        case 'Input':
          return { Input: a.index };
      }
    }
    function ag(a) {
      return (0, q.union)(Object.entries(a).map(([a, b]) => (0, q.object)({ [a]: b })));
    }
    (0, q.object)({
      version: (0, q.literal)(1),
      sender: (0, q.optional)((0, q.string)()),
      expiration: (0, q.nullish)(Q),
      gasConfig: U,
      inputs: (0, q.array)(P),
      transactions: (0, q.array)(ac),
    });
    let ah = ag({
        GasCoin: (0, q.literal)(!0),
        Input: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
        Result: (0, q.pipe)((0, q.number)(), (0, q.integer)()),
        NestedResult: (0, q.tuple)([
          (0, q.pipe)((0, q.number)(), (0, q.integer)()),
          (0, q.pipe)((0, q.number)(), (0, q.integer)()),
        ]),
      }),
      ai = (0, q.object)({
        budget: (0, q.nullable)(v),
        price: (0, q.nullable)(v),
        owner: (0, q.nullable)(t),
        payment: (0, q.nullable)((0, q.array)(w)),
      }),
      aj = (0, q.object)({
        package: t,
        module: (0, q.string)(),
        function: (0, q.string)(),
        typeArguments: (0, q.array)((0, q.string)()),
        arguments: (0, q.array)(ah),
      }),
      ak = (0, q.object)({
        name: (0, q.string)(),
        inputs: (0, q.record)((0, q.string)(), (0, q.union)([ah, (0, q.array)(ah)])),
        data: (0, q.record)((0, q.string)(), (0, q.unknown)()),
      }),
      al = ag({
        MoveCall: aj,
        TransferObjects: (0, q.object)({ objects: (0, q.array)(ah), address: ah }),
        SplitCoins: (0, q.object)({ coin: ah, amounts: (0, q.array)(ah) }),
        MergeCoins: (0, q.object)({ destination: ah, sources: (0, q.array)(ah) }),
        Publish: (0, q.object)({ modules: (0, q.array)(u), dependencies: (0, q.array)(t) }),
        MakeMoveVec: (0, q.object)({
          type: (0, q.nullable)((0, q.string)()),
          elements: (0, q.array)(ah),
        }),
        Upgrade: (0, q.object)({
          modules: (0, q.array)(u),
          dependencies: (0, q.array)(t),
          package: t,
          ticket: ah,
        }),
        $Intent: ak,
      }),
      am = ag({
        ImmOrOwnedObject: w,
        SharedObject: (0, q.object)({
          objectId: t,
          initialSharedVersion: v,
          mutable: (0, q.boolean)(),
        }),
        Receiving: w,
      }),
      an = ag({
        Object: am,
        Pure: (0, q.object)({ bytes: u }),
        UnresolvedPure: (0, q.object)({ value: (0, q.unknown)() }),
        UnresolvedObject: (0, q.object)({
          objectId: t,
          version: (0, q.optional)((0, q.nullable)(v)),
          digest: (0, q.optional)((0, q.nullable)((0, q.string)())),
          initialSharedVersion: (0, q.optional)((0, q.nullable)(v)),
        }),
      }),
      ao = ag({ None: (0, q.literal)(!0), Epoch: v }),
      ap = (0, q.object)({
        version: (0, q.literal)(2),
        sender: (0, q.nullish)(t),
        expiration: (0, q.nullish)(ao),
        gasData: ai,
        inputs: (0, q.array)(an),
        commands: (0, q.array)(al),
      }),
      aq = function (a) {
        return {
          $kind: 'Pure',
          Pure: { bytes: a instanceof Uint8Array ? (0, o.toBase64)(a) : a.toBase64() },
        };
      },
      ar = ({ objectId: a, digest: b, version: c }) => ({
        $kind: 'Object',
        Object: {
          $kind: 'ImmOrOwnedObject',
          ImmOrOwnedObject: { digest: b, version: c, objectId: (0, r.normalizeIotaAddress)(a) },
        },
      }),
      as = ({ objectId: a, mutable: b, initialSharedVersion: c }) => ({
        $kind: 'Object',
        Object: {
          $kind: 'SharedObject',
          SharedObject: {
            mutable: b,
            initialSharedVersion: c,
            objectId: (0, r.normalizeIotaAddress)(a),
          },
        },
      }),
      at = ({ objectId: a, digest: b, version: c }) => ({
        $kind: 'Object',
        Object: {
          $kind: 'Receiving',
          Receiving: { digest: b, version: c, objectId: (0, r.normalizeIotaAddress)(a) },
        },
      });
    var au = a.i(13515);
    BigInt(1e9), (0, r.normalizeIotaObjectId)('0x6');
    function av(a) {
      if ('string' == typeof a)
        switch (a) {
          case 'Address':
            return 'address';
          case 'Bool':
            return 'bool';
          case 'U8':
            return 'u8';
          case 'U16':
            return 'u16';
          case 'U32':
            return 'u32';
          case 'U64':
            return 'u64';
          case 'U128':
            return 'u128';
          case 'U256':
            return 'u256';
          default:
            throw Error(`Unexpected type ${a}`);
        }
      if ('Vector' in a) return { vector: av(a.Vector) };
      if ('Struct' in a)
        return {
          datatype: {
            package: a.Struct.address,
            module: a.Struct.module,
            type: a.Struct.name,
            typeParameters: a.Struct.typeArguments.map(av),
          },
        };
      if ('TypeParameter' in a) return { typeParameter: a.TypeParameter };
      throw Error(`Unexpected type ${JSON.stringify(a)}`);
    }
    async function aw(a, b, c) {
      return (
        await aB(a, b),
        await aA(a, b),
        b.onlyTransactionKind || (await ax(a, b), await ay(a, b), await az(a, b)),
        await void a.inputs.forEach((a, b) => {
          if ('Object' !== a.$kind && 'Pure' !== a.$kind)
            throw Error(
              `Input at index ${b} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(
                a
              )}`
            );
        }),
        await c()
      );
    }
    async function ax(a, b) {
      a.gasConfig.price || (a.gasConfig.price = String(await aD(b).getReferenceGasPrice()));
    }
    async function ay(a, b) {
      if (a.gasConfig.budget) return;
      let c = await aD(b).dryRunTransactionBlock({
        transactionBlock: a.build({
          overrides: { gasData: { budget: String(5e10), payment: [] } },
        }),
      });
      if ('success' !== c.effects.status.status)
        throw Error(
          `Dry run failed, could not automatically determine a budget: ${c.effects.status.error}`,
          { cause: c }
        );
      let d = 1000n * BigInt(a.gasConfig.price || 1n),
        e = BigInt(c.effects.gasUsed.computationCost) + d,
        f = e + BigInt(c.effects.gasUsed.storageCost) - BigInt(c.effects.gasUsed.storageRebate);
      a.gasConfig.budget = String(f > e ? f : e);
    }
    async function az(a, b) {
      if (!a.gasConfig.payment) {
        let c = (
          await aD(b).getCoins({
            owner: a.gasConfig.owner || a.sender,
            coinType: '0x2::iota::IOTA',
          })
        ).data
          .filter(
            (b) =>
              !a.inputs.find(
                (a) =>
                  !!a.Object?.ImmOrOwnedObject &&
                  b.coinObjectId === a.Object.ImmOrOwnedObject.objectId
              )
          )
          .map((a) => ({ objectId: a.coinObjectId, digest: a.digest, version: a.version }));
        if (!c.length) throw Error('No valid gas coins found for the transaction.');
        a.gasConfig.payment = c.map((a) => (0, q.parse)(w, a));
      }
    }
    async function aA(a, b) {
      var c;
      let d = [
          ...new Set(
            a.inputs
              .filter(
                (a) =>
                  a.UnresolvedObject &&
                  !(a.UnresolvedObject.version || a.UnresolvedObject?.initialSharedVersion)
              )
              .map((a) => (0, r.normalizeIotaObjectId)(a.UnresolvedObject.objectId))
          ),
        ],
        e = d.length
          ? Array.from({ length: Math.ceil((c = d).length / 50) }, (a, b) =>
              c.slice(50 * b, 50 * b + 50)
            )
          : [],
        f = new Map(),
        g = new Map();
      if (
        (await Promise.all(
          e.map(async (a) => {
            for (let c of await aD(b).multiGetObjects({ ids: a, options: { showOwner: !0 } })) {
              let a = c.data?.objectId;
              if (a) {
                if (c.error || !c.data) return void g.set(a, c.error);
                let b = c.data.owner,
                  d =
                    b && 'object' == typeof b && 'Shared' in b
                      ? b.Shared.initial_shared_version
                      : null;
                f.set(a, {
                  objectId: a,
                  digest: c.data.digest,
                  version: c.data.version,
                  initialSharedVersion: d,
                });
              }
            }
          })
        ),
        g.size > 0)
      )
        throw Error(`The following input objects are invalid: ${Array.from(g).join(', ')}`);
      for (let [b, c] of a.inputs.entries()) {
        let d;
        if (!c.UnresolvedObject) continue;
        let e = (0, r.normalizeIotaAddress)(c.UnresolvedObject.objectId),
          g = f.get(e);
        c.UnresolvedObject.initialSharedVersion ?? g?.initialSharedVersion
          ? (d = as({
              objectId: e,
              initialSharedVersion:
                c.UnresolvedObject.initialSharedVersion || g?.initialSharedVersion,
              mutable: (function (a, b) {
                let c = !1;
                return (
                  a.getInputUses(b, (a, b) => {
                    if (b.MoveCall && b.MoveCall._argumentTypes) {
                      let d = b.MoveCall.arguments.indexOf(a);
                      c = '&' !== b.MoveCall._argumentTypes[d].ref || c;
                    }
                    ('MakeMoveVec' === b.$kind ||
                      'MergeCoins' === b.$kind ||
                      'SplitCoins' === b.$kind) &&
                      (c = !0);
                  }),
                  c
                );
              })(a, b),
            }))
          : (function (a, b) {
              let c = !1;
              return (
                a.getInputUses(b, (a, b) => {
                  if (b.MoveCall && b.MoveCall._argumentTypes) {
                    var d;
                    let e = b.MoveCall.arguments.indexOf(a);
                    c =
                      ('object' == typeof (d = b.MoveCall._argumentTypes[e]).body &&
                        'datatype' in d.body &&
                        '0x2' === d.body.datatype.package &&
                        'transfer' === d.body.datatype.module &&
                        'Receiving' === d.body.datatype.type) ||
                      c;
                  }
                }),
                c
              );
            })(a, b) &&
            (d = at({
              objectId: e,
              digest: c.UnresolvedObject.digest ?? g?.digest,
              version: c.UnresolvedObject.version ?? g?.version,
            })),
          (a.inputs[a.inputs.indexOf(c)] =
            d ??
            ar({
              objectId: e,
              digest: c.UnresolvedObject.digest ?? g?.digest,
              version: c.UnresolvedObject.version ?? g?.version,
            }));
      }
    }
    async function aB(a, b) {
      let { inputs: c, commands: d } = a,
        e = [],
        f = new Set();
      d.forEach((b) => {
        if (b.MoveCall) {
          if (b.MoveCall._argumentTypes) return;
          if (
            b.MoveCall.arguments
              .map((b) => ('Input' === b.$kind ? a.inputs[b.Input] : null))
              .some((a) => a?.UnresolvedPure || a?.UnresolvedObject)
          ) {
            let a = `${b.MoveCall.package}::${b.MoveCall.module}::${b.MoveCall.function}`;
            f.add(a), e.push(b.MoveCall);
          }
        }
        switch (b.$kind) {
          case 'SplitCoins':
            b.SplitCoins.amounts.forEach((b) => {
              aC(b, au.bcs.U64, a);
            });
            break;
          case 'TransferObjects':
            aC(b.TransferObjects.address, au.bcs.Address, a);
        }
      });
      let g = new Map();
      if (f.size > 0) {
        let a = aD(b);
        await Promise.all(
          [...f].map(async (b) => {
            let [c, d, e] = b.split('::'),
              f = await a.getNormalizedMoveFunction({ package: c, module: d, function: e });
            g.set(
              b,
              f.parameters.map((a) =>
                'object' == typeof a && 'Reference' in a
                  ? { ref: '&', body: av(a.Reference) }
                  : 'object' == typeof a && 'MutableReference' in a
                  ? { ref: '&mut', body: av(a.MutableReference) }
                  : { ref: null, body: av(a) }
              )
            );
          })
        );
      }
      e.length &&
        (await Promise.all(
          e.map(async (a) => {
            var b;
            let c,
              d = g.get(`${a.package}::${a.module}::${a.function}`);
            d &&
              (a._argumentTypes =
                d.length > 0 &&
                (c =
                  'object' == typeof (b = d.at(-1)).body && 'datatype' in b.body
                    ? b.body.datatype
                    : null) &&
                (0, r.normalizeIotaAddress)(c.package) === (0, r.normalizeIotaAddress)('0x2') &&
                'tx_context' === c.module &&
                'TxContext' === c.type
                  ? d.slice(0, d.length - 1)
                  : d);
          })
        )),
        d.forEach((a) => {
          if (!a.MoveCall) return;
          let b = a.MoveCall,
            d = `${b.package}::${b.module}::${b.function}`,
            e = b._argumentTypes;
          if (e) {
            if (e.length !== a.MoveCall.arguments.length)
              throw Error(`Incorrect number of arguments for ${d}`);
            e.forEach((a, d) => {
              let e = b.arguments[d];
              if ('Input' !== e.$kind) return;
              let f = c[e.Input];
              if (!f.UnresolvedPure && !f.UnresolvedObject) return;
              let g = f.UnresolvedPure?.value ?? f.UnresolvedObject?.objectId,
                h = c.indexOf(f),
                i = (function a(b) {
                  if ('string' == typeof b)
                    switch (b) {
                      case 'address':
                        return au.bcs.Address;
                      case 'bool':
                        return au.bcs.Bool;
                      case 'u8':
                        return au.bcs.U8;
                      case 'u16':
                        return au.bcs.U16;
                      case 'u32':
                        return au.bcs.U32;
                      case 'u64':
                        return au.bcs.U64;
                      case 'u128':
                        return au.bcs.U128;
                      case 'u256':
                        return au.bcs.U256;
                      default:
                        throw Error(`Unknown type signature ${b}`);
                    }
                  if ('vector' in b) {
                    if ('u8' === b.vector)
                      return au.bcs
                        .vector(au.bcs.U8)
                        .transform({
                          input: (a) => ('string' == typeof a ? new TextEncoder().encode(a) : a),
                          output: (a) => a,
                        });
                    let c = a(b.vector);
                    return c ? au.bcs.vector(c) : null;
                  }
                  if ('datatype' in b) {
                    let c = (0, r.normalizeIotaAddress)(b.datatype.package);
                    if (c === (0, r.normalizeIotaAddress)('0x1')) {
                      if (
                        ('ascii' === b.datatype.module && 'String' === b.datatype.type) ||
                        ('string' === b.datatype.module && 'String' === b.datatype.type)
                      )
                        return au.bcs.String;
                      if ('option' === b.datatype.module && 'Option' === b.datatype.type) {
                        let c = a(b.datatype.typeParameters[0]);
                        return c ? au.bcs.vector(c) : null;
                      }
                    }
                    if (
                      c === (0, r.normalizeIotaAddress)('0x2') &&
                      'object' === b.datatype.module &&
                      'ID' === b.datatype.type
                    )
                      return au.bcs.Address;
                  }
                  return null;
                })(a.body);
              if (i) {
                (e.type = 'pure'), (c[h] = aq(i.serialize(g)));
                return;
              }
              if ('string' != typeof g)
                throw Error(
                  `Expect the argument to be an object id string, got ${JSON.stringify(g, null, 2)}`
                );
              e.type = 'object';
              let j = f.UnresolvedPure
                ? { $kind: 'UnresolvedObject', UnresolvedObject: { objectId: g } }
                : f;
              c[h] = j;
            });
          }
        });
    }
    function aC(a, b, c) {
      if ('Input' !== a.$kind) return;
      let d = c.inputs[a.Input];
      'UnresolvedPure' === d.$kind && (c.inputs[a.Input] = aq(b.serialize(d.UnresolvedPure.value)));
    }
    function aD(a) {
      if (!a.client)
        throw Error(
          'No iota client passed to Transaction#build, but transaction data was not sufficient to build offline.'
        );
      return a.client;
    }
    function aE(a) {
      switch (a) {
        case 'u8':
          return au.bcs.u8();
        case 'u16':
          return au.bcs.u16();
        case 'u32':
          return au.bcs.u32();
        case 'u64':
          return au.bcs.u64();
        case 'u128':
          return au.bcs.u128();
        case 'u256':
          return au.bcs.u256();
        case 'bool':
          return au.bcs.bool();
        case 'string':
          return au.bcs.string();
        case 'id':
        case 'address':
          return au.bcs.Address;
      }
      let b = a.match(/^(vector|option)<(.+)>$/);
      if (b) {
        let [a, c] = b.slice(1);
        return 'vector' === a ? au.bcs.vector(aE(c)) : au.bcs.option(aE(c));
      }
      throw Error(`Invalid Pure type name: ${a}`);
    }
    (0, r.normalizeIotaObjectId)('0x5');
    var aF = a.i(47934),
      aG = a.i(41377);
    function aH(a) {
      return (0, r.normalizeIotaAddress)(a).replace('0x', '');
    }
    class aI {
      constructor(a) {
        (this.version = 2),
          (this.sender = a?.sender ?? null),
          (this.expiration = a?.expiration ?? null),
          (this.inputs = a?.inputs ?? []),
          (this.commands = a?.commands ?? []),
          (this.gasData = a?.gasData ?? { budget: null, price: null, owner: null, payment: null });
      }
      static fromKindBytes(a) {
        let b = au.bcs.TransactionKind.parse(a).ProgrammableTransaction;
        if (!b) throw Error('Unable to deserialize from bytes.');
        return aI.restore({
          version: 2,
          sender: null,
          expiration: null,
          gasData: { budget: null, owner: null, payment: null, price: null },
          inputs: b.inputs,
          commands: b.commands,
        });
      }
      static fromBytes(a) {
        let b = au.bcs.TransactionData.parse(a),
          c = b?.V1,
          d = c.kind.ProgrammableTransaction;
        if (!c || !d) throw Error('Unable to deserialize from bytes.');
        return aI.restore({
          version: 2,
          sender: c.sender,
          expiration: c.expiration,
          gasData: c.gasData,
          inputs: d.inputs,
          commands: d.commands,
        });
      }
      static restore(a) {
        return 2 === a.version
          ? new aI((0, q.parse)(I, a))
          : new aI(
              (0, q.parse)(
                I,
                (0, q.parse)(I, {
                  version: 2,
                  sender: a.sender ?? null,
                  expiration: a.expiration
                    ? 'Epoch' in a.expiration
                      ? { Epoch: a.expiration.Epoch }
                      : { None: !0 }
                    : null,
                  gasData: {
                    owner: a.gasConfig.owner ?? null,
                    budget: a.gasConfig.budget?.toString() ?? null,
                    price: a.gasConfig.price?.toString() ?? null,
                    payment:
                      a.gasConfig.payment?.map((a) => ({
                        digest: a.digest,
                        objectId: a.objectId,
                        version: a.version.toString(),
                      })) ?? null,
                  },
                  inputs: a.inputs.map((a) => {
                    if ('Input' === a.kind) {
                      if ((0, q.is)(O, a.value)) {
                        let b = (0, q.parse)(O, a.value);
                        if (b.Object) {
                          if (b.Object.ImmOrOwned)
                            return {
                              Object: {
                                ImmOrOwnedObject: {
                                  objectId: b.Object.ImmOrOwned.objectId,
                                  version: String(b.Object.ImmOrOwned.version),
                                  digest: b.Object.ImmOrOwned.digest,
                                },
                              },
                            };
                          if (b.Object.Shared)
                            return {
                              Object: {
                                SharedObject: {
                                  mutable: b.Object.Shared.mutable ?? null,
                                  initialSharedVersion: b.Object.Shared.initialSharedVersion,
                                  objectId: b.Object.Shared.objectId,
                                },
                              },
                            };
                          if (b.Object.Receiving)
                            return {
                              Object: {
                                Receiving: {
                                  digest: b.Object.Receiving.digest,
                                  version: String(b.Object.Receiving.version),
                                  objectId: b.Object.Receiving.objectId,
                                },
                              },
                            };
                          throw Error('Invalid object input');
                        }
                        return { Pure: { bytes: (0, o.toBase64)(new Uint8Array(b.Pure)) } };
                      }
                      return 'object' === a.type
                        ? { UnresolvedObject: { objectId: a.value } }
                        : { UnresolvedPure: { value: a.value } };
                    }
                    throw Error('Invalid input');
                  }),
                  commands: a.transactions.map((a) => {
                    switch (a.kind) {
                      case 'MakeMoveVec':
                        return {
                          MakeMoveVec: {
                            type:
                              'Some' in a.type
                                ? L.TypeTagSerializer.tagToString(a.type.Some)
                                : null,
                            elements: a.objects.map((a) => af(a)),
                          },
                        };
                      case 'MergeCoins':
                        return {
                          MergeCoins: {
                            destination: af(a.destination),
                            sources: a.sources.map((a) => af(a)),
                          },
                        };
                      case 'MoveCall': {
                        let [b, c, d] = a.target.split('::');
                        return {
                          MoveCall: {
                            package: b,
                            module: c,
                            function: d,
                            typeArguments: a.typeArguments,
                            arguments: a.arguments.map((a) => af(a)),
                          },
                        };
                      }
                      case 'Publish':
                        return {
                          Publish: {
                            modules: a.modules.map((a) => (0, o.toBase64)(Uint8Array.from(a))),
                            dependencies: a.dependencies,
                          },
                        };
                      case 'SplitCoins':
                        return {
                          SplitCoins: { coin: af(a.coin), amounts: a.amounts.map((a) => af(a)) },
                        };
                      case 'TransferObjects':
                        return {
                          TransferObjects: {
                            objects: a.objects.map((a) => af(a)),
                            address: af(a.address),
                          },
                        };
                      case 'Upgrade':
                        return {
                          Upgrade: {
                            modules: a.modules.map((a) => (0, o.toBase64)(Uint8Array.from(a))),
                            dependencies: a.dependencies,
                            package: a.packageId,
                            ticket: af(a.ticket),
                          },
                        };
                    }
                    throw Error(`Unknown transaction ${Object.keys(a)}`);
                  }),
                })
              )
            );
      }
      static getDigestFromBytes(a) {
        let b,
          c,
          d =
            ((c = new Uint8Array(
              (b = Array.from('TransactionData::').map((a) => a.charCodeAt(0))).length + a.length
            )).set(b),
            c.set(a, b.length),
            (0, aG.blake2b)(c, { dkLen: 32 }));
        return (0, aF.toBase58)(d);
      }
      get gasConfig() {
        return this.gasData;
      }
      set gasConfig(a) {
        this.gasData = a;
      }
      build({ maxSizeBytes: a = 1 / 0, overrides: b, onlyTransactionKind: c } = {}) {
        let d = this.inputs,
          e = this.commands;
        if (c)
          return au.bcs.TransactionKind.serialize(
            { ProgrammableTransaction: { inputs: d, commands: e } },
            { maxSize: a }
          ).toBytes();
        let f = b?.expiration ?? this.expiration,
          g = b?.sender ?? this.sender,
          h = { ...this.gasData, ...b?.gasConfig, ...b?.gasData };
        if (!g) throw Error('Missing transaction sender');
        if (!h.budget) throw Error('Missing gas budget');
        if (!h.payment) throw Error('Missing gas payment');
        if (!h.price) throw Error('Missing gas price');
        let i = {
          sender: aH(g),
          expiration: f || { None: !0 },
          gasData: {
            payment: h.payment,
            owner: aH(this.gasData.owner ?? g),
            price: BigInt(h.price),
            budget: BigInt(h.budget),
          },
          kind: { ProgrammableTransaction: { inputs: d, commands: e } },
        };
        return au.bcs.TransactionData.serialize({ V1: i }, { maxSize: a }).toBytes();
      }
      addInput(a, b) {
        let c = this.inputs.length;
        return this.inputs.push(b), { Input: c, type: a, $kind: 'Input' };
      }
      getInputUses(a, b) {
        this.mapArguments((c, d) => ('Input' === c.$kind && c.Input === a && b(c, d), c));
      }
      mapArguments(a) {
        for (let b of this.commands)
          switch (b.$kind) {
            case 'MoveCall':
              b.MoveCall.arguments = b.MoveCall.arguments.map((c) => a(c, b));
              break;
            case 'TransferObjects':
              (b.TransferObjects.objects = b.TransferObjects.objects.map((c) => a(c, b))),
                (b.TransferObjects.address = a(b.TransferObjects.address, b));
              break;
            case 'SplitCoins':
              (b.SplitCoins.coin = a(b.SplitCoins.coin, b)),
                (b.SplitCoins.amounts = b.SplitCoins.amounts.map((c) => a(c, b)));
              break;
            case 'MergeCoins':
              (b.MergeCoins.destination = a(b.MergeCoins.destination, b)),
                (b.MergeCoins.sources = b.MergeCoins.sources.map((c) => a(c, b)));
              break;
            case 'MakeMoveVec':
              b.MakeMoveVec.elements = b.MakeMoveVec.elements.map((c) => a(c, b));
              break;
            case 'Upgrade':
              b.Upgrade.ticket = a(b.Upgrade.ticket, b);
              break;
            case '$Intent':
              let c = b.$Intent.inputs;
              for (let [d, e] of ((b.$Intent.inputs = {}), Object.entries(c)))
                b.$Intent.inputs[d] = Array.isArray(e) ? e.map((c) => a(c, b)) : a(e, b);
              break;
            case 'Publish':
              break;
            default:
              throw Error(`Unexpected transaction kind: ${b.$kind}`);
          }
      }
      replaceCommand(a, b) {
        if (!Array.isArray(b)) {
          this.commands[a] = b;
          return;
        }
        let c = b.length - 1;
        this.commands.splice(a, 1, ...b),
          0 !== c &&
            this.mapArguments((b) => {
              switch (b.$kind) {
                case 'Result':
                  b.Result > a && (b.Result += c);
                  break;
                case 'NestedResult':
                  b.NestedResult[0] > a && (b.NestedResult[0] += c);
              }
              return b;
            });
      }
      getDigest() {
        let a = this.build({ onlyTransactionKind: !1 });
        return aI.getDigestFromBytes(a);
      }
      snapshot() {
        return (0, q.parse)(I, this);
      }
    }
    function aJ(a) {
      return 'string' == typeof a
        ? (0, r.normalizeIotaAddress)(a)
        : a.Object
        ? a.Object.ImmOrOwnedObject
          ? (0, r.normalizeIotaAddress)(a.Object.ImmOrOwnedObject.objectId)
          : a.Object.Receiving
          ? (0, r.normalizeIotaAddress)(a.Object.Receiving.objectId)
          : (0, r.normalizeIotaAddress)(a.Object.SharedObject.objectId)
        : a.UnresolvedObject
        ? (0, r.normalizeIotaAddress)(a.UnresolvedObject.objectId)
        : void 0;
    }
    var aK = (a) => {
        throw TypeError(a);
      },
      aL = (a, b, c) => b.has(a) || aK('Cannot ' + c),
      aM = (a, b, c) => (aL(a, b, 'read from private field'), c ? c.call(a) : b.get(a)),
      aN = (a, b, c) =>
        b.has(a)
          ? aK('Cannot add the same private member more than once')
          : b instanceof WeakSet
          ? b.add(a)
          : b.set(a, c),
      aO = (a, b, c, d) => (aL(a, b, 'write to private field'), d ? d.call(a, c) : b.set(a, c), c),
      aP = (a, b, c) => (aL(a, b, 'access private method'), c);
    let aQ = Symbol.for('@iota/transaction'),
      aR = { buildPlugins: new Map(), serializationPlugins: new Map() },
      aS = Symbol.for('@iota/transaction/registry');
    function aT() {
      try {
        let a = globalThis;
        return a[aS] || (a[aS] = aR), a[aS];
      } catch (a) {
        return aR;
      }
    }
    let aU = class a {
      constructor() {
        aN(this, g),
          aN(this, c),
          aN(this, d),
          aN(this, e, new Map()),
          aN(this, f),
          (this.object = (function (a) {
            function b(b) {
              return a(b);
            }
            return (
              (b.system = () => a('0x5')),
              (b.clock = () => a('0x6')),
              (b.random = () => a('0x8')),
              (b.denyList = () => a('0x403')),
              (b.option =
                ({ type: a, value: b }) =>
                (c) =>
                  c.moveCall({
                    typeArguments: [a],
                    target: `0x1::option::${null === b ? 'none' : 'some'}`,
                    arguments: null === b ? [] : [c.object(b)],
                  })),
              b
            );
          })((a) => {
            if ('function' == typeof a) return this.object(a(this));
            if ('object' == typeof a && (0, q.is)(x, a)) return a;
            let b = aJ(a),
              c = aM(this, f).inputs.find((a) => b === aJ(a));
            return (
              c?.Object?.SharedObject &&
                'object' == typeof a &&
                a.Object?.SharedObject &&
                (c.Object.SharedObject.mutable =
                  c.Object.SharedObject.mutable || a.Object.SharedObject.mutable),
              c
                ? { $kind: 'Input', Input: aM(this, f).inputs.indexOf(c), type: 'object' }
                : aM(this, f).addInput(
                    'object',
                    'string' == typeof a
                      ? {
                          $kind: 'UnresolvedObject',
                          UnresolvedObject: { objectId: (0, r.normalizeIotaAddress)(a) },
                        }
                      : a
                  )
            );
          }));
        const a = aT();
        aO(this, f, new aI()),
          aO(this, d, [...a.buildPlugins.values()]),
          aO(this, c, [...a.serializationPlugins.values()]);
      }
      static fromKind(b) {
        let c = new a();
        return aO(c, f, aI.fromKindBytes('string' == typeof b ? (0, o.fromBase64)(b) : b)), c;
      }
      static from(b) {
        let c = new a();
        return (
          b && 'object' == typeof b && !0 === b[aQ]
            ? aO(c, f, new aI(b.getData()))
            : 'string' == typeof b && b.startsWith('{')
            ? aO(c, f, aI.restore(JSON.parse(b)))
            : aO(c, f, aI.fromBytes('string' == typeof b ? (0, o.fromBase64)(b) : b)),
          c
        );
      }
      static registerGlobalSerializationPlugin(a, b) {
        aT().serializationPlugins.set(a, b ?? a);
      }
      static unregisterGlobalSerializationPlugin(a) {
        aT().serializationPlugins.delete(a);
      }
      static registerGlobalBuildPlugin(a, b) {
        aT().buildPlugins.set(a, b ?? a);
      }
      static unregisterGlobalBuildPlugin(a) {
        aT().buildPlugins.delete(a);
      }
      addSerializationPlugin(a) {
        aM(this, c).push(a);
      }
      addBuildPlugin(a) {
        aM(this, d).push(a);
      }
      addIntentResolver(a, b) {
        if (aM(this, e).has(a) && aM(this, e).get(a) !== b)
          throw Error(`Intent resolver for ${a} already exists`);
        aM(this, e).set(a, b);
      }
      setSender(a) {
        aM(this, f).sender = a;
      }
      setSenderIfNotSet(a) {
        aM(this, f).sender || (aM(this, f).sender = a);
      }
      setExpiration(a) {
        aM(this, f).expiration = a ? (0, q.parse)(H, a) : null;
      }
      setGasPrice(a) {
        aM(this, f).gasConfig.price = String(a);
      }
      setGasBudget(a) {
        aM(this, f).gasConfig.budget = String(a);
      }
      setGasBudgetIfNotSet(a) {
        null == aM(this, f).gasData.budget && (aM(this, f).gasConfig.budget = String(a));
      }
      setGasOwner(a) {
        aM(this, f).gasConfig.owner = a;
      }
      setGasPayment(a) {
        aM(this, f).gasConfig.payment = a.map((a) => (0, q.parse)(w, a));
      }
      get blockData() {
        return ad(aM(this, f).snapshot());
      }
      getData() {
        return aM(this, f).snapshot();
      }
      get [aQ]() {
        return !0;
      }
      get pure() {
        return (
          Object.defineProperty(this, 'pure', {
            enumerable: !1,
            value: (function (a) {
              function b(b, c) {
                if ('string' == typeof b) return a(aE(b).serialize(c));
                if (b instanceof Uint8Array || (0, p.isSerializedBcs)(b)) return a(b);
                throw Error(
                  'tx.pure must be called either a bcs type name, or a serialized bcs value'
                );
              }
              return (
                (b.u8 = (b) => a(au.bcs.U8.serialize(b))),
                (b.u16 = (b) => a(au.bcs.U16.serialize(b))),
                (b.u32 = (b) => a(au.bcs.U32.serialize(b))),
                (b.u64 = (b) => a(au.bcs.U64.serialize(b))),
                (b.u128 = (b) => a(au.bcs.U128.serialize(b))),
                (b.u256 = (b) => a(au.bcs.U256.serialize(b))),
                (b.bool = (b) => a(au.bcs.Bool.serialize(b))),
                (b.string = (b) => a(au.bcs.String.serialize(b))),
                (b.address = (b) => a(au.bcs.Address.serialize(b))),
                (b.id = b.address),
                (b.vector = (b, c) => a(au.bcs.vector(aE(b)).serialize(c))),
                (b.option = (b, c) => a(au.bcs.option(aE(b)).serialize(c))),
                b
              );
            })((a) =>
              (0, p.isSerializedBcs)(a)
                ? aM(this, f).addInput('pure', { $kind: 'Pure', Pure: { bytes: a.toBase64() } })
                : aM(this, f).addInput(
                    'pure',
                    (0, q.is)(G, a)
                      ? (0, q.parse)(G, a)
                      : a instanceof Uint8Array
                      ? aq(a)
                      : { $kind: 'UnresolvedPure', UnresolvedPure: { value: a } }
                  )
            ),
          }),
          this.pure
        );
      }
      get gas() {
        return { $kind: 'GasCoin', GasCoin: !0 };
      }
      objectRef(...a) {
        return this.object(ar(...a));
      }
      receivingRef(...a) {
        return this.object(at(...a));
      }
      sharedObjectRef(...a) {
        return this.object(as(...a));
      }
      add(a) {
        var b;
        let c, d;
        return 'function' == typeof a
          ? a(this)
          : ((b = aM(this, f).commands.push(a) - 1),
            (c = []),
            (d = (a) => c[a] ?? (c[a] = { $kind: 'NestedResult', NestedResult: [b, a] })),
            new Proxy(
              { $kind: 'Result', Result: b },
              {
                set() {
                  throw Error(
                    'The transaction result is a proxy, and does not support setting properties directly'
                  );
                },
                get(a, b) {
                  if (b in a) return Reflect.get(a, b);
                  if (b === Symbol.iterator)
                    return function* () {
                      let a = 0;
                      for (;;) yield d(a), a++;
                    };
                  if ('symbol' == typeof b) return;
                  let c = parseInt(b, 10);
                  if (!Number.isNaN(c) && !(c < 0)) return d(c);
                },
              }
            ));
      }
      splitCoins(a, b) {
        return this.add(
          K.SplitCoins(
            'string' == typeof a ? this.object(a) : aP(this, g, i).call(this, a),
            b.map((a) =>
              'number' == typeof a || 'bigint' == typeof a || 'string' == typeof a
                ? this.pure.u64(a)
                : aP(this, g, h).call(this, a)
            )
          )
        );
      }
      mergeCoins(a, b) {
        return this.add(
          K.MergeCoins(
            this.object(a),
            b.map((a) => this.object(a))
          )
        );
      }
      publish({ modules: a, dependencies: b }) {
        return this.add(K.Publish({ modules: a, dependencies: b }));
      }
      upgrade({ modules: a, dependencies: b, package: c, ticket: d }) {
        return this.add(
          K.Upgrade({ modules: a, dependencies: b, package: c, ticket: this.object(d) })
        );
      }
      moveCall({ arguments: a, ...b }) {
        return this.add(
          K.MoveCall({ ...b, arguments: a?.map((a) => aP(this, g, h).call(this, a)) })
        );
      }
      transferObjects(a, b) {
        return this.add(
          K.TransferObjects(
            a.map((a) => this.object(a)),
            'string' == typeof b ? this.pure.address(b) : aP(this, g, h).call(this, b)
          )
        );
      }
      makeMoveVec({ type: a, elements: b }) {
        return this.add(K.MakeMoveVec({ type: a, elements: b.map((a) => this.object(a)) }));
      }
      serialize() {
        return JSON.stringify(ad(aM(this, f).snapshot()));
      }
      async toJSON(a = {}) {
        return (
          await this.prepareForSerialization(a),
          JSON.stringify(
            (0, q.parse)(ap, aM(this, f).snapshot()),
            (a, b) => ('bigint' == typeof b ? b.toString() : b),
            2
          )
        );
      }
      async sign(a) {
        let { signer: b, ...c } = a,
          d = await this.build(c);
        return b.signTransaction(d);
      }
      async build(a = {}) {
        return (
          await this.prepareForSerialization(a),
          await aP(this, g, j).call(this, a),
          aM(this, f).build({
            maxSizeBytes: a.maxSizeBytes,
            onlyTransactionKind: a.onlyTransactionKind,
          })
        );
      }
      async getDigest(a = {}) {
        return await aP(this, g, j).call(this, a), aM(this, f).getDigest();
      }
      async prepareForSerialization(a) {
        let b = new Set();
        for (let a of aM(this, f).commands) a.$Intent && b.add(a.$Intent.name);
        let d = [...aM(this, c)];
        for (let c of b)
          if (!a.supportedIntents?.includes(c)) {
            if (!aM(this, e).has(c)) throw Error(`Missing intent resolver for ${c}`);
            d.push(aM(this, e).get(c));
          }
        await aP(this, g, k).call(this, d, a);
      }
    };
    (c = new WeakMap()),
      (d = new WeakMap()),
      (e = new WeakMap()),
      (f = new WeakMap()),
      (g = new WeakSet()),
      (h = function (a) {
        return (0, p.isSerializedBcs)(a) ? this.pure(a) : aP(this, g, i).call(this, a);
      }),
      (i = function (a) {
        return 'function' == typeof a ? (0, q.parse)(x, a(this)) : (0, q.parse)(x, a);
      }),
      (j = async function (a) {
        if (!a.onlyTransactionKind && !aM(this, f).sender)
          throw Error('Missing transaction sender');
        await aP(this, g, k).call(this, [...aM(this, d), aw], a);
      }),
      (k = async function (a, b) {
        let c = (d) => {
          if (d >= a.length) return () => {};
          let e = a[d];
          return async () => {
            let a = c(d + 1),
              g = !1,
              h = !1;
            if (
              (await e(aM(this, f), b, async () => {
                if (g) throw Error(`next() was call multiple times in TransactionPlugin ${d}`);
                (g = !0), await a(), (h = !0);
              }),
              !g)
            )
              throw Error(`next() was not called in TransactionPlugin ${d}`);
            if (!h) throw Error(`next() was not awaited in TransactionPlugin ${d}`);
          };
        };
        await c(0)();
      });
    var aV = a.i(38847),
      aW = a.i(28525),
      aX = a.i(88289),
      aY = a.i(71680),
      aZ = a.i(5707);
    let a$ = { highContrast: { type: 'boolean', className: 'rt-high-contrast', default: void 0 } };
    var a_ = a.i(88023);
    let a0 = {
        ...aY.asChildPropDef,
        size: {
          type: 'enum',
          className: 'rt-r-size',
          values: ['1', '2', '3', '4'],
          default: '2',
          responsive: !0,
        },
        variant: {
          type: 'enum',
          className: 'rt-variant',
          values: ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'],
          default: 'solid',
        },
        ...aZ.accentColorPropDef,
        ...a$,
        ...a_.radiusPropDef,
        loading: { type: 'boolean', className: 'rt-loading', default: !1 },
      },
      a1 = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'];
    function a2(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    function a3(a) {
      return 'object' == typeof a && Object.keys(a).some((a) => a1.includes(a));
    }
    function a4({
      allowArbitraryValues: a,
      value: b,
      className: c,
      propValues: d,
      parseValue: e = (a) => a,
    }) {
      let f = [];
      if (b) {
        if ('string' == typeof b && d.includes(b)) return a5(c, b, e);
        if (a3(b)) {
          for (let g in b) {
            if (!a2(b, g) || !a1.includes(g)) continue;
            let h = b[g];
            if (void 0 !== h) {
              if (d.includes(h)) {
                let a = a5(c, h, e),
                  b = 'initial' === g ? a : `${g}:${a}`;
                f.push(b);
              } else if (a) {
                let a = 'initial' === g ? c : `${g}:${c}`;
                f.push(a);
              }
            }
          }
          return f.join(' ');
        }
        if (a) return c;
      }
    }
    function a5(a, b, c) {
      let d = c(b),
        e = d?.startsWith('-'),
        f = e ? d?.substring(1) : d;
      return `${e ? '-' : ''}${a}${a ? '-' : ''}${f}`;
    }
    function a6(...a) {
      let b = {};
      for (let c of a) c && (b = { ...b, ...c });
      return Object.keys(b).length ? b : void 0;
    }
    function a7(a, ...b) {
      let c,
        d,
        e = { ...a },
        f = (function (...a) {
          return Object.assign({}, ...a);
        })(...b);
      for (let a in f) {
        let b = e[a],
          g = f[a];
        if (
          (void 0 !== g.default && void 0 === b && (b = g.default),
          'enum' !== g.type || [g.default, ...g.values].includes(b) || a3(b) || (b = g.default),
          (e[a] = b),
          'className' in g && g.className)
        ) {
          delete e[a];
          let f = 'responsive' in g;
          if (!b || (a3(b) && !f)) continue;
          if (
            (a3(b) &&
              (void 0 !== g.default && void 0 === b.initial && (b.initial = g.default),
              'enum' === g.type &&
                ([g.default, ...g.values].includes(b.initial) || (b.initial = g.default))),
            'enum' === g.type)
          ) {
            let a = a4({
              allowArbitraryValues: !1,
              value: b,
              className: g.className,
              propValues: g.values,
              parseValue: g.parseValue,
            });
            c = (0, aW.default)(c, a);
            continue;
          }
          if ('string' === g.type || 'enum | string' === g.type) {
            let a = 'string' === g.type ? [] : g.values,
              [e, f] = (function ({ className: a, customProperties: b, ...c }) {
                return [
                  a4({ allowArbitraryValues: !0, className: a, ...c }),
                  (function ({
                    customProperties: a,
                    value: b,
                    propValues: c,
                    parseValue: d = (a) => a,
                  }) {
                    let e = {};
                    if (!(!b || ('string' == typeof b && c.includes(b)))) {
                      if (
                        ('string' == typeof b && (e = Object.fromEntries(a.map((a) => [a, b]))),
                        a3(b))
                      )
                        for (let d in b) {
                          if (!a2(b, d) || !a1.includes(d)) continue;
                          let f = b[d];
                          if (!c.includes(f))
                            for (let b of a) e = { ['initial' === d ? b : `${b}-${d}`]: f, ...e };
                        }
                      for (let a in e) {
                        let b = e[a];
                        void 0 !== b && (e[a] = d(b));
                      }
                      return e;
                    }
                  })({ customProperties: b, ...c }),
                ];
              })({
                className: g.className,
                customProperties: g.customProperties,
                propValues: a,
                parseValue: g.parseValue,
                value: b,
              });
            (d = a6(d, f)), (c = (0, aW.default)(c, e));
            continue;
          }
          if ('boolean' === g.type && b) {
            c = (0, aW.default)(c, g.className);
            continue;
          }
        }
      }
      return (e.className = (0, aW.default)(c, a.className)), (e.style = a6(d, a.style)), e;
    }
    let a8 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      a9 = {
        p: {
          type: 'enum | string',
          className: 'rt-r-p',
          customProperties: ['--p'],
          values: a8,
          responsive: !0,
        },
        px: {
          type: 'enum | string',
          className: 'rt-r-px',
          customProperties: ['--pl', '--pr'],
          values: a8,
          responsive: !0,
        },
        py: {
          type: 'enum | string',
          className: 'rt-r-py',
          customProperties: ['--pt', '--pb'],
          values: a8,
          responsive: !0,
        },
        pt: {
          type: 'enum | string',
          className: 'rt-r-pt',
          customProperties: ['--pt'],
          values: a8,
          responsive: !0,
        },
        pr: {
          type: 'enum | string',
          className: 'rt-r-pr',
          customProperties: ['--pr'],
          values: a8,
          responsive: !0,
        },
        pb: {
          type: 'enum | string',
          className: 'rt-r-pb',
          customProperties: ['--pb'],
          values: a8,
          responsive: !0,
        },
        pl: {
          type: 'enum | string',
          className: 'rt-r-pl',
          customProperties: ['--pl'],
          values: a8,
          responsive: !0,
        },
      },
      ba = {
        height: {
          type: 'string',
          className: 'rt-r-h',
          customProperties: ['--height'],
          responsive: !0,
        },
        minHeight: {
          type: 'string',
          className: 'rt-r-min-h',
          customProperties: ['--min-height'],
          responsive: !0,
        },
        maxHeight: {
          type: 'string',
          className: 'rt-r-max-h',
          customProperties: ['--max-height'],
          responsive: !0,
        },
      },
      bb = {
        width: {
          type: 'string',
          className: 'rt-r-w',
          customProperties: ['--width'],
          responsive: !0,
        },
        minWidth: {
          type: 'string',
          className: 'rt-r-min-w',
          customProperties: ['--min-width'],
          responsive: !0,
        },
        maxWidth: {
          type: 'string',
          className: 'rt-r-max-w',
          customProperties: ['--max-width'],
          responsive: !0,
        },
      },
      bc = ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      bd = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '-1',
        '-2',
        '-3',
        '-4',
        '-5',
        '-6',
        '-7',
        '-8',
        '-9',
      ],
      be = {
        ...a9,
        ...bb,
        ...ba,
        position: {
          type: 'enum',
          className: 'rt-r-position',
          values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
          responsive: !0,
        },
        inset: {
          type: 'enum | string',
          className: 'rt-r-inset',
          customProperties: ['--inset'],
          values: bd,
          responsive: !0,
        },
        top: {
          type: 'enum | string',
          className: 'rt-r-top',
          customProperties: ['--top'],
          values: bd,
          responsive: !0,
        },
        right: {
          type: 'enum | string',
          className: 'rt-r-right',
          customProperties: ['--right'],
          values: bd,
          responsive: !0,
        },
        bottom: {
          type: 'enum | string',
          className: 'rt-r-bottom',
          customProperties: ['--bottom'],
          values: bd,
          responsive: !0,
        },
        left: {
          type: 'enum | string',
          className: 'rt-r-left',
          customProperties: ['--left'],
          values: bd,
          responsive: !0,
        },
        overflow: { type: 'enum', className: 'rt-r-overflow', values: bc, responsive: !0 },
        overflowX: { type: 'enum', className: 'rt-r-ox', values: bc, responsive: !0 },
        overflowY: { type: 'enum', className: 'rt-r-oy', values: bc, responsive: !0 },
        flexBasis: {
          type: 'string',
          className: 'rt-r-fb',
          customProperties: ['--flex-basis'],
          responsive: !0,
        },
        flexShrink: {
          type: 'enum | string',
          className: 'rt-r-fs',
          customProperties: ['--flex-shrink'],
          values: ['0', '1'],
          responsive: !0,
        },
        flexGrow: {
          type: 'enum | string',
          className: 'rt-r-fg',
          customProperties: ['--flex-grow'],
          values: ['0', '1'],
          responsive: !0,
        },
        gridArea: {
          type: 'string',
          className: 'rt-r-ga',
          customProperties: ['--grid-area'],
          responsive: !0,
        },
        gridColumn: {
          type: 'string',
          className: 'rt-r-gc',
          customProperties: ['--grid-column'],
          responsive: !0,
        },
        gridColumnStart: {
          type: 'string',
          className: 'rt-r-gcs',
          customProperties: ['--grid-column-start'],
          responsive: !0,
        },
        gridColumnEnd: {
          type: 'string',
          className: 'rt-r-gce',
          customProperties: ['--grid-column-end'],
          responsive: !0,
        },
        gridRow: {
          type: 'string',
          className: 'rt-r-gr',
          customProperties: ['--grid-row'],
          responsive: !0,
        },
        gridRowStart: {
          type: 'string',
          className: 'rt-r-grs',
          customProperties: ['--grid-row-start'],
          responsive: !0,
        },
        gridRowEnd: {
          type: 'string',
          className: 'rt-r-gre',
          customProperties: ['--grid-row-end'],
          responsive: !0,
        },
      },
      bf = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '-1',
        '-2',
        '-3',
        '-4',
        '-5',
        '-6',
        '-7',
        '-8',
        '-9',
      ],
      bg = {
        m: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-m',
          customProperties: ['--m'],
        },
        mx: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-mx',
          customProperties: ['--ml', '--mr'],
        },
        my: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-my',
          customProperties: ['--mt', '--mb'],
        },
        mt: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-mt',
          customProperties: ['--mt'],
        },
        mr: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-mr',
          customProperties: ['--mr'],
        },
        mb: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-mb',
          customProperties: ['--mb'],
        },
        ml: {
          type: 'enum | string',
          values: bf,
          responsive: !0,
          className: 'rt-r-ml',
          customProperties: ['--ml'],
        },
      };
    aX.Slot.Root;
    let bh = aX.Slot.Root;
    aX.Slot.Slottable;
    let bi = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      bj = {
        as: { type: 'enum', values: ['div', 'span'], default: 'div' },
        ...aY.asChildPropDef,
        display: {
          type: 'enum',
          className: 'rt-r-display',
          values: ['none', 'inline-flex', 'flex'],
          responsive: !0,
        },
        direction: {
          type: 'enum',
          className: 'rt-r-fd',
          values: ['row', 'column', 'row-reverse', 'column-reverse'],
          responsive: !0,
        },
        align: {
          type: 'enum',
          className: 'rt-r-ai',
          values: ['start', 'center', 'end', 'baseline', 'stretch'],
          responsive: !0,
        },
        justify: {
          type: 'enum',
          className: 'rt-r-jc',
          values: ['start', 'center', 'end', 'between'],
          parseValue: function (a) {
            return 'between' === a ? 'space-between' : a;
          },
          responsive: !0,
        },
        wrap: {
          type: 'enum',
          className: 'rt-r-fw',
          values: ['nowrap', 'wrap', 'wrap-reverse'],
          responsive: !0,
        },
        gap: {
          type: 'enum | string',
          className: 'rt-r-gap',
          customProperties: ['--gap'],
          values: bi,
          responsive: !0,
        },
        gapX: {
          type: 'enum | string',
          className: 'rt-r-cg',
          customProperties: ['--column-gap'],
          values: bi,
          responsive: !0,
        },
        gapY: {
          type: 'enum | string',
          className: 'rt-r-rg',
          customProperties: ['--row-gap'],
          values: bi,
          responsive: !0,
        },
      },
      bk = n.forwardRef((a, b) => {
        let { className: c, asChild: d, as: e = 'div', ...f } = a7(a, bj, be, bg);
        return n.createElement(d ? bh : e, {
          ...f,
          ref: b,
          className: (0, aW.default)('rt-Flex', c),
        });
      });
    bk.displayName = 'Flex';
    let bl = {
        size: {
          type: 'enum',
          className: 'rt-r-size',
          values: ['1', '2', '3'],
          default: '2',
          responsive: !0,
        },
        loading: { type: 'boolean', default: !0 },
      },
      bm = n.forwardRef((a, b) => {
        let { className: c, children: d, loading: e, ...f } = a7(a, bl, bg);
        if (!e) return d;
        let g = n.createElement(
          'span',
          { ...f, ref: b, className: (0, aW.default)('rt-Spinner', c) },
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' }),
          n.createElement('span', { className: 'rt-SpinnerLeaf' })
        );
        return void 0 === d
          ? g
          : n.createElement(
              bk,
              { asChild: !0, position: 'relative', align: 'center', justify: 'center' },
              n.createElement(
                'span',
                null,
                n.createElement(
                  'span',
                  {
                    'aria-hidden': !0,
                    style: { display: 'contents', visibility: 'hidden' },
                    inert: void 0,
                  },
                  d
                ),
                n.createElement(
                  bk,
                  {
                    asChild: !0,
                    align: 'center',
                    justify: 'center',
                    position: 'absolute',
                    inset: '0',
                  },
                  n.createElement('span', null, g)
                )
              )
            );
      });
    bm.displayName = 'Spinner';
    var bn = a.i(28094),
      bn = bn;
    let bo = bn.Root;
    function bp(a) {
      switch (a) {
        case '1':
          return '1';
        case '2':
        case '3':
          return '2';
        case '4':
          return '3';
      }
    }
    bn.Root;
    let bq = n.forwardRef((a, b) => {
      let { size: c = a0.size.default } = a,
        {
          className: d,
          children: e,
          asChild: f,
          color: g,
          radius: h,
          disabled: i = a.loading,
          ...j
        } = a7(a, a0, bg),
        k = f ? aX.Slot.Root : 'button';
      return n.createElement(
        k,
        {
          'data-disabled': i || void 0,
          'data-accent-color': g,
          'data-radius': h,
          ...j,
          ref: b,
          className: (0, aW.default)('rt-reset', 'rt-BaseButton', d),
          disabled: i,
        },
        a.loading
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'span',
                { style: { display: 'contents', visibility: 'hidden' }, 'aria-hidden': !0 },
                e
              ),
              n.createElement(bo, null, e),
              n.createElement(
                bk,
                {
                  asChild: !0,
                  align: 'center',
                  justify: 'center',
                  position: 'absolute',
                  inset: '0',
                },
                n.createElement(
                  'span',
                  null,
                  n.createElement(bm, {
                    size: (function (a, b) {
                      if (void 0 !== a)
                        return 'string' == typeof a
                          ? b(a)
                          : Object.fromEntries(Object.entries(a).map(([a, c]) => [a, b(c)]));
                    })(c, bp),
                  })
                )
              )
            )
          : e
      );
    });
    bq.displayName = 'BaseButton';
    let br = n.forwardRef(({ className: a, ...b }, c) =>
      n.createElement(bq, { ...b, ref: c, className: (0, aW.default)('rt-Button', a) })
    );
    br.displayName = 'Button';
    let bs = {
        ...aY.asChildPropDef,
        size: {
          type: 'enum',
          className: 'rt-r-size',
          values: ['1', '2', '3', '4'],
          default: '4',
          responsive: !0,
        },
        display: {
          type: 'enum',
          className: 'rt-r-display',
          values: ['none', 'initial'],
          parseValue: function (a) {
            return 'initial' === a ? 'flex' : a;
          },
          responsive: !0,
        },
        align: {
          type: 'enum',
          className: 'rt-r-ai',
          values: ['left', 'center', 'right'],
          parseValue: function (a) {
            return 'left' === a ? 'start' : 'right' === a ? 'end' : a;
          },
          responsive: !0,
        },
      },
      bt = n.forwardRef(
        (
          { width: a, minWidth: b, maxWidth: c, height: d, minHeight: e, maxHeight: f, ...g },
          h
        ) => {
          let { asChild: i, children: j, className: k, ...l } = a7(g, bs, be, bg),
            { className: m, style: o } = a7(
              { width: a, minWidth: b, maxWidth: c, height: d, minHeight: e, maxHeight: f },
              bb,
              ba
            ),
            p = i ? aX.Slot.Root : 'div';
          return n.createElement(
            p,
            { ...l, ref: h, className: (0, aW.default)('rt-Container', k) },
            (function (a, b) {
              let { asChild: c, children: d } = a;
              if (!c) return 'function' == typeof b ? b(d) : b;
              let e = n.Children.only(d);
              return n.cloneElement(e, {
                children: 'function' == typeof b ? b(e.props.children) : b,
              });
            })({ asChild: i, children: j }, (a) =>
              n.createElement(
                'div',
                { className: (0, aW.default)('rt-ContainerInner', m), style: o },
                a
              )
            )
          );
        }
      );
    bt.displayName = 'Container';
    let bu = {
        as: { type: 'enum', values: ['span', 'div', 'label', 'p'], default: 'span' },
        ...aY.asChildPropDef,
        size: {
          type: 'enum',
          className: 'rt-r-size',
          values: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          responsive: !0,
        },
        weight: {
          type: 'enum',
          className: 'rt-r-weight',
          values: ['light', 'regular', 'medium', 'bold'],
          responsive: !0,
        },
        align: {
          type: 'enum',
          className: 'rt-r-ta',
          values: ['left', 'center', 'right'],
          responsive: !0,
        },
        trim: {
          type: 'enum',
          className: 'rt-r-lt',
          values: ['normal', 'start', 'end', 'both'],
          responsive: !0,
        },
        truncate: { type: 'boolean', className: 'rt-truncate' },
        wrap: {
          type: 'enum',
          className: 'rt-r-tw',
          values: ['wrap', 'nowrap', 'pretty', 'balance'],
          responsive: !0,
        },
        ...aZ.colorPropDef,
        ...a$,
      },
      bv = n.forwardRef((a, b) => {
        let {
          children: c,
          className: d,
          asChild: e,
          as: f = 'span',
          color: g,
          ...h
        } = a7(a, bu, bg);
        return n.createElement(
          aX.Slot.Root,
          { 'data-accent-color': g, ...h, ref: b, className: (0, aW.default)('rt-Text', d) },
          e ? c : n.createElement(f, null, c)
        );
      });
    bv.displayName = 'Text';
    var bw = a.i(70121);
    let bx = {
        size: {
          type: 'enum',
          className: 'rt-r-size',
          values: ['1', '2', '3'],
          default: '2',
          responsive: !0,
        },
        variant: {
          type: 'enum',
          className: 'rt-variant',
          values: ['classic', 'surface', 'soft'],
          default: 'surface',
        },
        ...aZ.colorPropDef,
        ...a_.radiusPropDef,
      },
      by = {
        side: { type: 'enum', values: ['left', 'right'] },
        ...aZ.colorPropDef,
        gap: bj.gap,
        px: a9.px,
        pl: a9.pl,
        pr: a9.pr,
      },
      bz = n.forwardRef((a, b) => {
        let c = n.useRef(null),
          { children: d, className: e, color: f, radius: g, style: h, ...i } = a7(a, bx, bg);
        return n.createElement(
          'div',
          {
            'data-accent-color': f,
            'data-radius': g,
            style: h,
            className: (0, aW.default)('rt-TextFieldRoot', e),
            onPointerDown: (a) => {
              let b = a.target;
              if (b.closest('input, button, a')) return;
              let d = c.current;
              if (!d) return;
              let e = b.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `)
                ? d.value.length
                : 0;
              requestAnimationFrame(() => {
                try {
                  d.setSelectionRange(e, e);
                } catch {}
                d.focus();
              });
            },
          },
          n.createElement('input', {
            spellCheck: 'false',
            ...i,
            ref: (0, bw.composeRefs)(c, b),
            className: 'rt-reset rt-TextFieldInput',
          }),
          d
        );
      });
    bz.displayName = 'TextField.Root';
    let bA = n.forwardRef((a, b) => {
      let { className: c, color: d, side: e, ...f } = a7(a, by);
      return n.createElement('div', {
        'data-accent-color': d,
        'data-side': e,
        ...f,
        ref: b,
        className: (0, aW.default)('rt-TextFieldSlot', c),
      });
    });
    (bA.displayName = 'TextField.Slot'), a.s(['Root', () => bz, 'Slot', () => bA], 7991);
    var bB = a.i(7991),
      bB = bB,
      bC = a.i(38814),
      bD = a.i(46664);
    function bE(a) {}
    a.s(
      [
        'default',
        0,
        () => {
          let a = (0, m.useCurrentAccount)(),
            {
              data: b,
              actions: c,
              state: d,
              chickenBoxId: e,
              flagId: f,
            } = (() => {
              let a = (0, m.useCurrentAccount)();
              a?.address;
              let b = (0, aV.useNetworkVariable)('packageId'),
                c = (0, m.useIotaClient)(),
                { mutate: d, isPending: e } = (0, m.useSignAndExecuteTransaction)(),
                [f, g] = (0, n.useState)(() => null),
                [h, i] = (0, n.useState)(() => null),
                [j, k] = (0, n.useState)(!1),
                [l, o] = (0, n.useState)(),
                [p, q] = (0, n.useState)(null),
                {
                  data: r,
                  isPending: s,
                  error: t,
                  refetch: u,
                } = (0, m.useIotaClientQuery)(
                  'getObject',
                  { id: f, options: { showContent: !0, showOwner: !0 } },
                  { enabled: !!f }
                ),
                v = r?.data
                  ? (function (a) {
                      if (a.content?.dataType !== 'moveObject')
                        return console.log('Data is not a moveObject:', a.content?.dataType), null;
                      let b = a.content.fields;
                      if (!b || !b.chicken)
                        return console.log('No chicken fields found in object data'), null;
                      console.log('ChickenBox fields structure:', JSON.stringify(b, null, 2));
                      let c = b.chicken;
                      try {
                        return {
                          chickenKg: parseInt(String(c.chicken_kg), 10),
                          garlicG: parseInt(String(c.garlic_g), 10),
                          milkMl: parseInt(String(c.milk_ml), 10),
                          saltG: parseInt(String(c.salt_g), 10),
                          pepperG: parseInt(String(c.pepper_g), 10),
                          flourG: parseInt(String(c.flour_g), 10),
                          cornstarchG: parseInt(String(c.cornstarch_g), 10),
                          eggs: parseInt(String(c.eggs), 10),
                        };
                      } catch (a) {
                        return console.error('Error parsing chicken fields:', a), null;
                      }
                    })(r.data)
                  : null,
                w = !!r?.data;
              return {
                data: v,
                actions: {
                  fryChicken: async (a, e, f, h, i, j, l, m) => {
                    if (b)
                      try {
                        q(null), o(void 0);
                        let n = new aU();
                        n.moveCall({
                          arguments: [
                            n.pure.u16(a),
                            n.pure.u16(e),
                            n.pure.u16(f),
                            n.pure.u16(h),
                            n.pure.u16(i),
                            n.pure.u16(j),
                            n.pure.u16(l),
                            n.pure.u16(m),
                          ],
                          target: `${b}::kfc::fry`,
                        }),
                          n.setGasBudget(5e6),
                          d(
                            { transaction: n },
                            {
                              onSuccess: async ({ digest: a }) => {
                                o(a), k(!0);
                                try {
                                  let { effects: b } = await c.waitForTransaction({
                                      digest: a,
                                      options: { showEffects: !0 },
                                    }),
                                    d = b?.created?.[0]?.reference?.objectId;
                                  d
                                    ? (g(d), await u(), k(!1))
                                    : (k(!1),
                                      console.warn(
                                        'No chicken box ID found in transaction effects'
                                      ));
                                } catch (a) {
                                  console.error('Error waiting for transaction:', a), k(!1);
                                }
                              },
                              onError: (a) => {
                                let b = String(a);
                                a instanceof Error && (b = a.message),
                                  b.includes('Rejected from user')
                                    ? (b =
                                        'Transaction rejected by user. Please approve in your wallet.')
                                    : b.includes('InsufficientGas') &&
                                      (b = 'Insufficient gas. Please add more gas and try again.');
                                let c = Error(b);
                                q(c), console.error('Error:', a);
                              },
                            }
                          );
                      } catch (a) {
                        q(a instanceof Error ? a : Error(String(a))),
                          console.error('Error frying chicken:', a);
                      }
                  },
                  getFlag: async () => {
                    if (f && b)
                      try {
                        q(null), o(void 0);
                        let a = new aU();
                        a.moveCall({ arguments: [a.object(f)], target: `${b}::kfc::get_flag` }),
                          a.setGasBudget(5e6),
                          d(
                            { transaction: a },
                            {
                              onSuccess: async ({ digest: a }) => {
                                o(a), k(!0);
                                try {
                                  let b,
                                    { effects: d } = await c.waitForTransaction({
                                      digest: a,
                                      options: { showEffects: !0 },
                                    }),
                                    e = d?.created ?? [];
                                  if (e.length > 0) {
                                    for (let a of e) {
                                      let c = a?.reference?.objectId,
                                        d = a?.reference?.type || a?.type || '';
                                      if (c && String(d).toLowerCase().includes('flag')) {
                                        b = c;
                                        break;
                                      }
                                    }
                                    !b &&
                                      e[0]?.reference?.objectId &&
                                      (b = e[0].reference.objectId);
                                  }
                                  if (!b && d?.mutated?.length)
                                    for (let a of d.mutated) {
                                      let c = a?.reference?.objectId,
                                        d = a?.reference?.type || a?.type || '';
                                      if (c && String(d).toLowerCase().includes('flag')) {
                                        b = c;
                                        break;
                                      }
                                    }
                                  b
                                    ? (i(b), k(!1))
                                    : (k(!1),
                                      console.warn('No flag ID found in transaction effects', d));
                                } catch (a) {
                                  console.error('Error waiting for transaction:', a), k(!1);
                                }
                              },
                              onError: (a) => {
                                k(!1);
                                let b = String(a);
                                a instanceof Error && (b = a.message),
                                  b.includes('Rejected from user')
                                    ? (b =
                                        'Transaction rejected by user. Please approve in your wallet.')
                                    : b.includes('InsufficientGas') &&
                                      (b = 'Insufficient gas. Please add more gas and try again.');
                                let c = Error(b);
                                q(c), console.error('Error:', a);
                              },
                            }
                          );
                      } catch (a) {
                        q(a instanceof Error ? a : Error(String(a))),
                          console.error('Error getting flag:', a);
                      }
                  },
                  clearObject: () => {
                    g(null), i(null), q(null);
                  },
                },
                state: {
                  isLoading: j,
                  isPending: e,
                  isConfirming: !1,
                  isConfirmed: !!l && !j && !e,
                  hash: l,
                  error: t || p,
                },
                chickenBoxId: f,
                flagId: h,
                objectExists: w,
                hasValidData: !!v,
                isFetching: s,
              };
            })(),
            [g, h] = (0, n.useState)({
              chickenKg: '1',
              garlicG: '10',
              milkMl: '300',
              saltG: '15',
              pepperG: '5',
              flourG: '200',
              cornstarchG: '100',
              eggs: '2',
            }),
            i = (a, b) => {
              h((c) => ({ ...c, [a]: b }));
            },
            j = (a) => {
              if (null == a) return '-';
              if ('number' == typeof a) return Number.isFinite(a) ? String(a) : '-';
              if ('string' == typeof a) return '' === a.trim() ? '-' : a;
              try {
                return String(a);
              } catch {
                return '-';
              }
            };
          return a
            ? (0, l.jsxs)('div', {
                className: 'app-container',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'hero',
                    children: [
                      (0, l.jsx)('h1', { children: '🍗 KFC Challenge' }),
                      (0, l.jsx)('p', {
                        children: 'Master the perfect fried chicken recipe and claim your reward!',
                      }),
                    ],
                  }),
                  (0, l.jsxs)(bt, {
                    style: { maxWidth: '900px', margin: '0 auto' },
                    children: [
                      f &&
                        (0, l.jsxs)('div', {
                          className: 'card status-reward',
                          children: [
                            (0, l.jsxs)('div', {
                              className: 'card-header',
                              children: [
                                (0, l.jsx)('span', { style: { fontSize: '2rem' }, children: '🎖️' }),
                                (0, l.jsx)('h2', { children: 'Reward Claimed' }),
                              ],
                            }),
                            (0, l.jsx)(bv, {
                              style: { color: '#fcd34d', marginBottom: '1rem', fontSize: '1.1rem' },
                              children:
                                "🔥 You're a KFC Legend! You've successfully completed the perfect recipe challenge!",
                            }),
                            (0, l.jsxs)('div', {
                              style: {
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '8px',
                                borderLeft: '3px solid #ffc600',
                              },
                              children: [
                                (0, l.jsx)(bv, {
                                  size: '1',
                                  style: { color: '#a0a0a0', marginBottom: '0.5rem' },
                                  children: 'Reward ID:',
                                }),
                                (0, l.jsx)(bv, { size: '2', className: 'kv', children: f }),
                              ],
                            }),
                          ],
                        }),
                      e &&
                        b &&
                        (0, l.jsxs)('div', {
                          className: 'card',
                          children: [
                            (0, l.jsxs)('div', {
                              className: 'card-header',
                              children: [
                                (0, l.jsx)('span', { style: { fontSize: '2rem' }, children: '📦' }),
                                (0, l.jsx)('h2', { children: 'Your Creation' }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className: 'form-grid',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🐔 Chicken',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.chickenKg), ' kg'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🧄 Garlic',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.garlicG), ' g'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🥛 Milk',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.milkMl), ' ml'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🧂 Salt',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.saltG), ' g'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🌶️ Pepper',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.pepperG), ' g'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🍞 Flour',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.flourG), ' g'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🥔 Cornstarch',
                                    }),
                                    (0, l.jsxs)(bv, { children: [j(b.cornstarchG), ' g'] }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  className: 'form-group',
                                  children: [
                                    (0, l.jsx)('span', {
                                      style: { color: '#ffc600' },
                                      children: '🥚 Eggs',
                                    }),
                                    (0, l.jsx)(bv, { children: j(b.eggs) }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)('div', {
                              style: {
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '8px',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                borderLeft: '3px solid #ffc600',
                              },
                              children: (0, l.jsxs)(bv, {
                                size: '1',
                                style: { color: '#a0a0a0' },
                                children: [
                                  'ChickenBox ID: ',
                                  (0, l.jsx)('span', { className: 'kv', children: e }),
                                ],
                              }),
                            }),
                            !f &&
                              (0, l.jsx)(br, {
                                size: '3',
                                className: 'primary-btn',
                                onClick: () => {
                                  window.confirm(
                                    '🍗 Ready to claim your reward?\n\nYou have successfully completed the challenge!'
                                  ) && c.getFlag();
                                },
                                disabled: d.isLoading || d.isPending,
                                children:
                                  d.isLoading || d.isPending
                                    ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)(bC.default, {
                                            size: 14,
                                            style: { marginRight: '8px' },
                                          }),
                                          'Processing...',
                                        ],
                                      })
                                    : '🎁 Claim Reward',
                              }),
                          ],
                        }),
                      (0, l.jsxs)('div', {
                        className: 'card',
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'card-header',
                            children: [
                              (0, l.jsx)('span', { style: { fontSize: '2rem' }, children: '👨‍🍳' }),
                              (0, l.jsx)('h2', { children: 'Craft Your Recipe' }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            style: {
                              marginBottom: '1.5rem',
                              display: 'flex',
                              gap: '0.75rem',
                              flexWrap: 'wrap',
                            },
                            children: [
                              (0, l.jsx)('button', {
                                className: 'secondary-btn',
                                onClick: () => {
                                  h({
                                    chickenKg: '1',
                                    garlicG: '10',
                                    milkMl: '300',
                                    saltG: '15',
                                    pepperG: '5',
                                    flourG: '200',
                                    cornstarchG: '100',
                                    eggs: '2',
                                  });
                                },
                                children: '⚡ Use Perfect Recipe',
                              }),
                              e &&
                                (0, l.jsx)('button', {
                                  className: 'secondary-btn',
                                  onClick: () =>
                                    ((a) => {
                                      if (a)
                                        try {
                                          (0, bD.default)(a), bE('Copied to clipboard');
                                        } catch (a) {
                                          console.error(a), bE('Copy failed');
                                        }
                                    })(e),
                                  children: '📋 Copy ChickenBox ID',
                                }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'form-grid',
                            children: [
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🐔 Chicken (kg)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.chickenKg,
                                    onChange: (a) => i('chickenKg', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🧄 Garlic (g)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.garlicG,
                                    onChange: (a) => i('garlicG', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🥛 Milk (ml)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.milkMl,
                                    onChange: (a) => i('milkMl', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🧂 Salt (g)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.saltG,
                                    onChange: (a) => i('saltG', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🌶️ Pepper (g)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.pepperG,
                                    onChange: (a) => i('pepperG', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🍞 Flour (g)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.flourG,
                                    onChange: (a) => i('flourG', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🥔 Cornstarch (g)' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.cornstarchG,
                                    onChange: (a) => i('cornstarchG', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'form-group',
                                children: [
                                  (0, l.jsx)('label', { children: '🥚 Eggs' }),
                                  (0, l.jsx)(bB.Root, {
                                    value: g.eggs,
                                    onChange: (a) => i('eggs', a.target.value),
                                    type: 'number',
                                    min: '0',
                                    max: '65535',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)(br, {
                            size: '3',
                            className: 'primary-btn',
                            onClick: () =>
                              c.fryChicken(
                                parseInt(g.chickenKg),
                                parseInt(g.garlicG),
                                parseInt(g.milkMl),
                                parseInt(g.saltG),
                                parseInt(g.pepperG),
                                parseInt(g.flourG),
                                parseInt(g.cornstarchG),
                                parseInt(g.eggs)
                              ),
                            disabled: d.isPending || d.isLoading,
                            children: d.isLoading
                              ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)(bC.default, {
                                      size: 16,
                                      style: { marginRight: '8px' },
                                    }),
                                    'Frying...',
                                  ],
                                })
                              : '🍗 Fry KFC Chicken',
                          }),
                        ],
                      }),
                      d.hash &&
                        (0, l.jsxs)('div', {
                          className: 'card status-success',
                          children: [
                            (0, l.jsxs)('div', {
                              style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem',
                              },
                              children: [
                                (0, l.jsx)('span', {
                                  style: { fontSize: '1.5rem' },
                                  children: '✅',
                                }),
                                (0, l.jsx)(bv, {
                                  style: { fontSize: '1.1rem', fontWeight: '600' },
                                  children: 'Transaction Confirmed',
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              style: {
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '8px',
                                borderLeft: '3px solid #22c55e',
                              },
                              children: [
                                (0, l.jsx)(bv, {
                                  size: '1',
                                  style: { color: '#a0a0a0', marginBottom: '0.5rem' },
                                  children: 'Transaction Hash:',
                                }),
                                (0, l.jsx)(bv, { size: '2', className: 'kv', children: d.hash }),
                              ],
                            }),
                          ],
                        }),
                      d.error &&
                        (0, l.jsxs)('div', {
                          className: 'card status-error',
                          children: [
                            (0, l.jsxs)('div', {
                              style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem',
                              },
                              children: [
                                (0, l.jsx)('span', {
                                  style: { fontSize: '1.5rem' },
                                  children: '⚠️',
                                }),
                                (0, l.jsx)(bv, {
                                  style: {
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#ef4444',
                                  },
                                  children: 'Oops! Something went wrong',
                                }),
                              ],
                            }),
                            (0, l.jsx)(bv, {
                              style: { color: '#fca5a5', marginBottom: '0.75rem' },
                              children: d.error?.message || String(d.error),
                            }),
                            d.error?.message?.includes('Rejected from user') &&
                              (0, l.jsx)(bv, {
                                size: '1',
                                style: { color: '#fca5a5', fontStyle: 'italic' },
                                children: '💡 Please approve the transaction in your wallet popup',
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              })
            : (0, l.jsxs)('div', {
                className: 'app-container',
                style: { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
                children: [
                  (0, l.jsxs)('div', {
                    className: 'hero',
                    style: { textAlign: 'left' },
                    children: [
                      (0, l.jsx)('h1', { children: '🍗 KFC Chicken dApp' }),
                      (0, l.jsx)('p', {
                        children:
                          'Welcome! Connect your wallet to start frying, collecting and claiming rewards.',
                      }),
                      (0, l.jsxs)('div', {
                        style: { marginTop: '1rem' },
                        children: [
                          (0, l.jsx)('button', {
                            className: 'primary-btn',
                            onClick: () => window.scrollTo({ top: 400, behavior: 'smooth' }),
                            children: 'Get Started',
                          }),
                          (0, l.jsx)('button', {
                            className: 'secondary-btn',
                            style: { marginLeft: '0.6rem' },
                            onClick: () => bE('Connect to see recipes'),
                            children: 'Why connect?',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'card',
                    style: { marginTop: '1.25rem' },
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'card-header',
                        children: [
                          (0, l.jsx)('span', { style: { fontSize: '1.6rem' }, children: '✨' }),
                          (0, l.jsx)('h2', { children: 'How it works' }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'form-grid',
                        style: { gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' },
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'feature-card card',
                            children: [
                              (0, l.jsx)('h3', { children: 'Fry' }),
                              (0, l.jsx)('p', {
                                className: 'muted',
                                children: 'Create recipes and fry chicken on-chain.',
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'feature-card card',
                            children: [
                              (0, l.jsx)('h3', { children: 'Collect' }),
                              (0, l.jsx)('p', {
                                className: 'muted',
                                children: 'Store ChickenBoxes as proof of your creations.',
                              }),
                            ],
                          }),
                          (0, l.jsxs)('div', {
                            className: 'feature-card card',
                            children: [
                              (0, l.jsx)('h3', { children: 'Claim' }),
                              (0, l.jsx)('p', {
                                className: 'muted',
                                children: 'Complete challenges to earn rewards and flags.',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        },
      ],
      20490
    );
  },
];

//# sourceMappingURL=_eaf6bf7e._.js.map
