(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  78560,
  (e) => {
    'use strict';
    let t;
    var r = e.i(43476),
      a = e.i(29391),
      n = e.i(19273),
      i = e.i(86491),
      o = e.i(40143),
      s = e.i(15823),
      u = class extends s.Subscribable {
        constructor(e = {}) {
          super(), (this.config = e), (this.#e = new Map());
        }
        #e;
        build(e, t, r) {
          let a = t.queryKey,
            o = t.queryHash ?? (0, n.hashQueryKeyByOptions)(a, t),
            s = this.get(o);
          return (
            s ||
              ((s = new i.Query({
                client: e,
                queryKey: a,
                queryHash: o,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(a),
              })),
              this.add(s)),
            s
          );
        }
        add(e) {
          this.#e.has(e.queryHash) ||
            (this.#e.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
        }
        remove(e) {
          let t = this.#e.get(e.queryHash);
          t &&
            (e.destroy(),
            t === e && this.#e.delete(e.queryHash),
            this.notify({ type: 'removed', query: e }));
        }
        clear() {
          o.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.#e.get(e);
        }
        getAll() {
          return [...this.#e.values()];
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, n.matchQuery)(t, e));
        }
        findAll(e = {}) {
          let t = this.getAll();
          return Object.keys(e).length > 0 ? t.filter((t) => (0, n.matchQuery)(e, t)) : t;
        }
        notify(e) {
          o.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          o.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          o.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      },
      l = e.i(14272),
      c = s,
      h = class extends c.Subscribable {
        constructor(e = {}) {
          super(), (this.config = e), (this.#t = new Set()), (this.#r = new Map()), (this.#a = 0);
        }
        #t;
        #r;
        #a;
        build(e, t, r) {
          let a = new l.Mutation({
            client: e,
            mutationCache: this,
            mutationId: ++this.#a,
            options: e.defaultMutationOptions(t),
            state: r,
          });
          return this.add(a), a;
        }
        add(e) {
          this.#t.add(e);
          let t = d(e);
          if ('string' == typeof t) {
            let r = this.#r.get(t);
            r ? r.push(e) : this.#r.set(t, [e]);
          }
          this.notify({ type: 'added', mutation: e });
        }
        remove(e) {
          if (this.#t.delete(e)) {
            let t = d(e);
            if ('string' == typeof t) {
              let r = this.#r.get(t);
              if (r)
                if (r.length > 1) {
                  let t = r.indexOf(e);
                  -1 !== t && r.splice(t, 1);
                } else r[0] === e && this.#r.delete(t);
            }
          }
          this.notify({ type: 'removed', mutation: e });
        }
        canRun(e) {
          let t = d(e);
          if ('string' != typeof t) return !0;
          {
            let r = this.#r.get(t),
              a = r?.find((e) => 'pending' === e.state.status);
            return !a || a === e;
          }
        }
        runNext(e) {
          let t = d(e);
          if ('string' != typeof t) return Promise.resolve();
          {
            let r = this.#r.get(t)?.find((t) => t !== e && t.state.isPaused);
            return r?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          o.notifyManager.batch(() => {
            this.#t.forEach((e) => {
              this.notify({ type: 'removed', mutation: e });
            }),
              this.#t.clear(),
              this.#r.clear();
          });
        }
        getAll() {
          return Array.from(this.#t);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, n.matchMutation)(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => (0, n.matchMutation)(e, t));
        }
        notify(e) {
          o.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return o.notifyManager.batch(() => Promise.all(e.map((e) => e.continue().catch(n.noop))));
        }
      };
    function d(e) {
      return e.options.scope?.id;
    }
    var p = e.i(75555),
      f = e.i(14448),
      y = e.i(92571),
      g = class {
        #n;
        #i;
        #o;
        #s;
        #u;
        #l;
        #c;
        #h;
        constructor(e = {}) {
          (this.#n = e.queryCache || new u()),
            (this.#i = e.mutationCache || new h()),
            (this.#o = e.defaultOptions || {}),
            (this.#s = new Map()),
            (this.#u = new Map()),
            (this.#l = 0);
        }
        mount() {
          this.#l++,
            1 === this.#l &&
              ((this.#c = p.focusManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#n.onFocus());
              })),
              (this.#h = f.onlineManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#n.onOnline());
              })));
        }
        unmount() {
          this.#l--,
            0 === this.#l && (this.#c?.(), (this.#c = void 0), this.#h?.(), (this.#h = void 0));
        }
        isFetching(e) {
          return this.#n.findAll({ ...e, fetchStatus: 'fetching' }).length;
        }
        isMutating(e) {
          return this.#i.findAll({ ...e, status: 'pending' }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#n.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#n.build(this, t),
            a = r.state.data;
          return void 0 === a
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime((0, n.resolveStaleTime)(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(a));
        }
        getQueriesData(e) {
          return this.#n.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let a = this.defaultQueryOptions({ queryKey: e }),
            i = this.#n.get(a.queryHash),
            o = i?.state.data,
            s = (0, n.functionalUpdate)(t, o);
          if (void 0 !== s) return this.#n.build(this, a).setData(s, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return o.notifyManager.batch(() =>
            this.#n.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#n.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#n;
          o.notifyManager.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#n;
          return o.notifyManager.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: 'active', ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            o.notifyManager.batch(() => this.#n.findAll(e).map((e) => e.cancel(r)))
          )
            .then(n.noop)
            .catch(n.noop);
        }
        invalidateQueries(e, t = {}) {
          return o.notifyManager.batch(() =>
            (this.#n.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === 'none')
              ? Promise.resolve()
              : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, t)
          );
        }
        refetchQueries(e, t = {}) {
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            o.notifyManager.batch(() =>
              this.#n
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(n.noop)),
                    'paused' === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(n.noop);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#n.build(this, t);
          return r.isStaleByTime((0, n.resolveStaleTime)(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(n.noop).catch(n.noop);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = (0, y.infiniteQueryBehavior)(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(n.noop).catch(n.noop);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = (0, y.infiniteQueryBehavior)(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return f.onlineManager.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#n;
        }
        getMutationCache() {
          return this.#i;
        }
        getDefaultOptions() {
          return this.#o;
        }
        setDefaultOptions(e) {
          this.#o = e;
        }
        setQueryDefaults(e, t) {
          this.#s.set((0, n.hashKey)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#s.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, n.partialMatchKey)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#u.set((0, n.hashKey)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#u.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, n.partialMatchKey)(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#o.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, n.hashQueryKeyByOptions)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
            t.queryFn === n.skipToken && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#o.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#n.clear(), this.#i.clear();
        }
      },
      m = e.i(12598),
      C = e.i(71645),
      v = e.i(43794),
      b = e.i(86318),
      b = b,
      x = e.i(9840),
      w = e.i(81140),
      E = e.i(20783),
      T = e.i(30030),
      k = e.i(26330),
      O = e.i(10772),
      P = e.i(53660),
      M = e.i(74606),
      q = e.i(96626),
      Q = e.i(48425),
      R = Symbol('radix.slottable'),
      D = e.i(69340),
      A = e.i(59411),
      [S, j] = (0, T.createContextScope)('Tooltip', [P.createPopperScope]),
      B = (0, P.createPopperScope)(),
      I = 'TooltipProvider',
      H = 'tooltip.open',
      [L, _] = S(I),
      K = (e) => {
        let {
            __scopeTooltip: t,
            delayDuration: a = 700,
            skipDelayDuration: n = 300,
            disableHoverableContent: i = !1,
            children: o,
          } = e,
          s = C.useRef(!0),
          u = C.useRef(!1),
          l = C.useRef(0);
        return (
          C.useEffect(() => {
            let e = l.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, r.jsx)(L, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: a,
            onOpen: C.useCallback(() => {
              window.clearTimeout(l.current), (s.current = !1);
            }, []),
            onClose: C.useCallback(() => {
              window.clearTimeout(l.current),
                (l.current = window.setTimeout(() => (s.current = !0), n));
            }, [n]),
            isPointerInTransitRef: u,
            onPointerInTransitChange: C.useCallback((e) => {
              u.current = e;
            }, []),
            disableHoverableContent: i,
            children: o,
          })
        );
      };
    K.displayName = I;
    var F = 'Tooltip',
      [N, G] = S(F),
      U = (e) => {
        let {
            __scopeTooltip: t,
            children: a,
            open: n,
            defaultOpen: i,
            onOpenChange: o,
            disableHoverableContent: s,
            delayDuration: u,
          } = e,
          l = _(F, e.__scopeTooltip),
          c = B(t),
          [h, d] = C.useState(null),
          p = (0, O.useId)(),
          f = C.useRef(0),
          y = s ?? l.disableHoverableContent,
          g = u ?? l.delayDuration,
          m = C.useRef(!1),
          [v, b] = (0, D.useControllableState)({
            prop: n,
            defaultProp: i ?? !1,
            onChange: (e) => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(H))) : l.onClose(), o?.(e);
            },
            caller: F,
          }),
          x = C.useMemo(() => (v ? (m.current ? 'delayed-open' : 'instant-open') : 'closed'), [v]),
          w = C.useCallback(() => {
            window.clearTimeout(f.current), (f.current = 0), (m.current = !1), b(!0);
          }, [b]),
          E = C.useCallback(() => {
            window.clearTimeout(f.current), (f.current = 0), b(!1);
          }, [b]),
          T = C.useCallback(() => {
            window.clearTimeout(f.current),
              (f.current = window.setTimeout(() => {
                (m.current = !0), b(!0), (f.current = 0);
              }, g));
          }, [g, b]);
        return (
          C.useEffect(
            () => () => {
              f.current && (window.clearTimeout(f.current), (f.current = 0));
            },
            []
          ),
          (0, r.jsx)(P.Root, {
            ...c,
            children: (0, r.jsx)(N, {
              scope: t,
              contentId: p,
              open: v,
              stateAttribute: x,
              trigger: h,
              onTriggerChange: d,
              onTriggerEnter: C.useCallback(() => {
                l.isOpenDelayedRef.current ? T() : w();
              }, [l.isOpenDelayedRef, T, w]),
              onTriggerLeave: C.useCallback(() => {
                y ? E() : (window.clearTimeout(f.current), (f.current = 0));
              }, [E, y]),
              onOpen: w,
              onClose: E,
              disableHoverableContent: y,
              children: a,
            }),
          })
        );
      };
    U.displayName = F;
    var X = 'TooltipTrigger',
      Y = C.forwardRef((e, t) => {
        let { __scopeTooltip: a, ...n } = e,
          i = G(X, a),
          o = _(X, a),
          s = B(a),
          u = C.useRef(null),
          l = (0, E.useComposedRefs)(t, u, i.onTriggerChange),
          c = C.useRef(!1),
          h = C.useRef(!1),
          d = C.useCallback(() => (c.current = !1), []);
        return (
          C.useEffect(() => () => document.removeEventListener('pointerup', d), [d]),
          (0, r.jsx)(P.Anchor, {
            asChild: !0,
            ...s,
            children: (0, r.jsx)(Q.Primitive.button, {
              'aria-describedby': i.open ? i.contentId : void 0,
              'data-state': i.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, w.composeEventHandlers)(e.onPointerMove, (e) => {
                'touch' !== e.pointerType &&
                  (h.current ||
                    o.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (h.current = !0)));
              }),
              onPointerLeave: (0, w.composeEventHandlers)(e.onPointerLeave, () => {
                i.onTriggerLeave(), (h.current = !1);
              }),
              onPointerDown: (0, w.composeEventHandlers)(e.onPointerDown, () => {
                i.open && i.onClose(),
                  (c.current = !0),
                  document.addEventListener('pointerup', d, { once: !0 });
              }),
              onFocus: (0, w.composeEventHandlers)(e.onFocus, () => {
                c.current || i.onOpen();
              }),
              onBlur: (0, w.composeEventHandlers)(e.onBlur, i.onClose),
              onClick: (0, w.composeEventHandlers)(e.onClick, i.onClose),
            }),
          })
        );
      });
    Y.displayName = X;
    var z = 'TooltipPortal',
      [W, J] = S(z, { forceMount: void 0 }),
      V = (e) => {
        let { __scopeTooltip: t, forceMount: a, children: n, container: i } = e,
          o = G(z, t);
        return (0, r.jsx)(W, {
          scope: t,
          forceMount: a,
          children: (0, r.jsx)(q.Presence, {
            present: a || o.open,
            children: (0, r.jsx)(M.Portal, { asChild: !0, container: i, children: n }),
          }),
        });
      };
    V.displayName = z;
    var Z = 'TooltipContent',
      $ = C.forwardRef((e, t) => {
        let a = J(Z, e.__scopeTooltip),
          { forceMount: n = a.forceMount, side: i = 'top', ...o } = e,
          s = G(Z, e.__scopeTooltip);
        return (0, r.jsx)(q.Presence, {
          present: n || s.open,
          children: s.disableHoverableContent
            ? (0, r.jsx)(en, { side: i, ...o, ref: t })
            : (0, r.jsx)(ee, { side: i, ...o, ref: t }),
        });
      }),
      ee = C.forwardRef((e, t) => {
        let a = G(Z, e.__scopeTooltip),
          n = _(Z, e.__scopeTooltip),
          i = C.useRef(null),
          o = (0, E.useComposedRefs)(t, i),
          [s, u] = C.useState(null),
          { trigger: l, onClose: c } = a,
          h = i.current,
          { onPointerInTransitChange: d } = n,
          p = C.useCallback(() => {
            u(null), d(!1);
          }, [d]),
          f = C.useCallback(
            (e, t) => {
              let r,
                a = e.currentTarget,
                n = { x: e.clientX, y: e.clientY },
                i = (function (e, t) {
                  let r = Math.abs(t.top - e.y),
                    a = Math.abs(t.bottom - e.y),
                    n = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(r, a, n, i)) {
                    case i:
                      return 'left';
                    case n:
                      return 'right';
                    case r:
                      return 'top';
                    case a:
                      return 'bottom';
                    default:
                      throw Error('unreachable');
                  }
                })(n, a.getBoundingClientRect());
              u(
                ((r = [
                  ...(function (e, t, r = 5) {
                    let a = [];
                    switch (t) {
                      case 'top':
                        a.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
                        break;
                      case 'bottom':
                        a.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
                        break;
                      case 'left':
                        a.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
                        break;
                      case 'right':
                        a.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
                    }
                    return a;
                  })(n, i),
                  ...(function (e) {
                    let { top: t, right: r, bottom: a, left: n } = e;
                    return [
                      { x: n, y: t },
                      { x: r, y: t },
                      { x: r, y: a },
                      { x: n, y: a },
                    ];
                  })(t.getBoundingClientRect()),
                ].slice()).sort((e, t) =>
                  e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  let t = [];
                  for (let r = 0; r < e.length; r++) {
                    let a = e[r];
                    for (; t.length >= 2; ) {
                      let e = t[t.length - 1],
                        r = t[t.length - 2];
                      if ((e.x - r.x) * (a.y - r.y) >= (e.y - r.y) * (a.x - r.x)) t.pop();
                      else break;
                    }
                    t.push(a);
                  }
                  t.pop();
                  let r = [];
                  for (let t = e.length - 1; t >= 0; t--) {
                    let a = e[t];
                    for (; r.length >= 2; ) {
                      let e = r[r.length - 1],
                        t = r[r.length - 2];
                      if ((e.x - t.x) * (a.y - t.y) >= (e.y - t.y) * (a.x - t.x)) r.pop();
                      else break;
                    }
                    r.push(a);
                  }
                  return (r.pop(),
                  1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y)
                    ? t
                    : t.concat(r);
                })(r))
              ),
                d(!0);
            },
            [d]
          );
        return (
          C.useEffect(() => () => p(), [p]),
          C.useEffect(() => {
            if (l && h) {
              let e = (e) => f(e, h),
                t = (e) => f(e, l);
              return (
                l.addEventListener('pointerleave', e),
                h.addEventListener('pointerleave', t),
                () => {
                  l.removeEventListener('pointerleave', e),
                    h.removeEventListener('pointerleave', t);
                }
              );
            }
          }, [l, h, f, p]),
          C.useEffect(() => {
            if (s) {
              let e = (e) => {
                let t = e.target,
                  r = { x: e.clientX, y: e.clientY },
                  a = l?.contains(t) || h?.contains(t),
                  n = !(function (e, t) {
                    let { x: r, y: a } = e,
                      n = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      let o = t[e],
                        s = t[i],
                        u = o.x,
                        l = o.y,
                        c = s.x,
                        h = s.y;
                      l > a != h > a && r < ((c - u) * (a - l)) / (h - l) + u && (n = !n);
                    }
                    return n;
                  })(r, s);
                a ? p() : n && (p(), c());
              };
              return (
                document.addEventListener('pointermove', e),
                () => document.removeEventListener('pointermove', e)
              );
            }
          }, [l, h, s, c, p]),
          (0, r.jsx)(en, { ...e, ref: o })
        );
      }),
      [et, er] = S(F, { isInside: !1 }),
      ea =
        (((t = ({ children: e }) => (0, r.jsx)(r.Fragment, { children: e })).displayName =
          'TooltipContent.Slottable'),
        (t.__radixId = R),
        t),
      en = C.forwardRef((e, t) => {
        let {
            __scopeTooltip: a,
            children: n,
            'aria-label': i,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            ...u
          } = e,
          l = G(Z, a),
          c = B(a),
          { onClose: h } = l;
        return (
          C.useEffect(
            () => (document.addEventListener(H, h), () => document.removeEventListener(H, h)),
            [h]
          ),
          C.useEffect(() => {
            if (l.trigger) {
              let e = (e) => {
                let t = e.target;
                t?.contains(l.trigger) && h();
              };
              return (
                window.addEventListener('scroll', e, { capture: !0 }),
                () => window.removeEventListener('scroll', e, { capture: !0 })
              );
            }
          }, [l.trigger, h]),
          (0, r.jsx)(k.DismissableLayer, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: h,
            children: (0, r.jsxs)(P.Content, {
              'data-state': l.stateAttribute,
              ...c,
              ...u,
              ref: t,
              style: {
                ...u.style,
                '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
                '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
                '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
                '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
              },
              children: [
                (0, r.jsx)(ea, { children: n }),
                (0, r.jsx)(et, {
                  scope: a,
                  isInside: !0,
                  children: (0, r.jsx)(A.Root, {
                    id: l.contentId,
                    role: 'tooltip',
                    children: i || n,
                  }),
                }),
              ],
            }),
          })
        );
      });
    $.displayName = Z;
    var ei = 'TooltipArrow',
      eo = C.forwardRef((e, t) => {
        let { __scopeTooltip: a, ...n } = e,
          i = B(a);
        return er(ei, a).isInside ? null : (0, r.jsx)(P.Arrow, { ...i, ...n, ref: t });
      });
    (eo.displayName = ei),
      e.s(
        [
          'Arrow',
          () => eo,
          'Content',
          () => $,
          'Portal',
          () => V,
          'Provider',
          () => K,
          'Root',
          () => U,
          'Tooltip',
          () => U,
          'TooltipArrow',
          () => eo,
          'TooltipContent',
          () => $,
          'TooltipPortal',
          () => V,
          'TooltipProvider',
          () => K,
          'TooltipTrigger',
          () => Y,
          'Trigger',
          () => Y,
          'createTooltipScope',
          () => j,
        ],
        86336
      );
    var es = e.i(86336),
      es = es,
      eu = e.i(14554),
      el = e.i(69931),
      ec = e.i(10712);
    let eh = {
        ...eu.asChildPropDef,
        hasBackground: { type: 'boolean', default: !0 },
        appearance: { type: 'enum', values: ['inherit', 'light', 'dark'], default: 'inherit' },
        accentColor: { type: 'enum', values: el.accentColors, default: 'indigo' },
        grayColor: { type: 'enum', values: el.grayColors, default: 'auto' },
        panelBackground: { type: 'enum', values: ['solid', 'translucent'], default: 'translucent' },
        radius: { type: 'enum', values: ec.radii, default: 'medium' },
        scaling: { type: 'enum', values: ['90%', '95%', '100%', '105%', '110%'], default: '100%' },
      },
      ed = () => {},
      ep = C.createContext(void 0),
      ef = C.forwardRef((e, t) =>
        void 0 === C.useContext(ep)
          ? C.createElement(
              es.Provider,
              { delayDuration: 200 },
              C.createElement(b.Provider, { dir: 'ltr' }, C.createElement(ey, { ...e, ref: t }))
            )
          : C.createElement(eg, { ...e, ref: t })
      );
    ef.displayName = 'Theme';
    let ey = C.forwardRef((e, t) => {
      let {
          appearance: r = eh.appearance.default,
          accentColor: a = eh.accentColor.default,
          grayColor: n = eh.grayColor.default,
          panelBackground: i = eh.panelBackground.default,
          radius: o = eh.radius.default,
          scaling: s = eh.scaling.default,
          hasBackground: u = eh.hasBackground.default,
          ...l
        } = e,
        [c, h] = C.useState(r);
      C.useEffect(() => h(r), [r]);
      let [d, p] = C.useState(a);
      C.useEffect(() => p(a), [a]);
      let [f, y] = C.useState(n);
      C.useEffect(() => y(n), [n]);
      let [g, m] = C.useState(i);
      C.useEffect(() => m(i), [i]);
      let [v, b] = C.useState(o);
      C.useEffect(() => b(o), [o]);
      let [x, w] = C.useState(s);
      return (
        C.useEffect(() => w(s), [s]),
        C.createElement(eg, {
          ...l,
          ref: t,
          isRoot: !0,
          hasBackground: u,
          appearance: c,
          accentColor: d,
          grayColor: f,
          panelBackground: g,
          radius: v,
          scaling: x,
          onAppearanceChange: h,
          onAccentColorChange: p,
          onGrayColorChange: y,
          onPanelBackgroundChange: m,
          onRadiusChange: b,
          onScalingChange: w,
        })
      );
    });
    ey.displayName = 'ThemeRoot';
    let eg = C.forwardRef((e, t) => {
      let r = C.useContext(ep),
        {
          asChild: a,
          isRoot: n,
          hasBackground: i,
          appearance: o = r?.appearance ?? eh.appearance.default,
          accentColor: s = r?.accentColor ?? eh.accentColor.default,
          grayColor: u = r?.resolvedGrayColor ?? eh.grayColor.default,
          panelBackground: l = r?.panelBackground ?? eh.panelBackground.default,
          radius: c = r?.radius ?? eh.radius.default,
          scaling: h = r?.scaling ?? eh.scaling.default,
          onAppearanceChange: d = ed,
          onAccentColorChange: p = ed,
          onGrayColorChange: f = ed,
          onPanelBackgroundChange: y = ed,
          onRadiusChange: g = ed,
          onScalingChange: m = ed,
          ...b
        } = e,
        w = a ? x.Slot.Root : 'div',
        E =
          'auto' === u
            ? (function (e) {
                switch (e) {
                  case 'tomato':
                  case 'red':
                  case 'ruby':
                  case 'crimson':
                  case 'pink':
                  case 'plum':
                  case 'purple':
                  case 'violet':
                    return 'mauve';
                  case 'iris':
                  case 'indigo':
                  case 'blue':
                  case 'sky':
                  case 'cyan':
                    return 'slate';
                  case 'teal':
                  case 'jade':
                  case 'mint':
                  case 'green':
                    return 'sage';
                  case 'grass':
                  case 'lime':
                    return 'olive';
                  case 'yellow':
                  case 'amber':
                  case 'orange':
                  case 'brown':
                  case 'gold':
                  case 'bronze':
                    return 'sand';
                  case 'gray':
                    return 'gray';
                }
              })(s)
            : u,
        T = 'light' === e.appearance || 'dark' === e.appearance;
      return C.createElement(
        ep.Provider,
        {
          value: C.useMemo(
            () => ({
              appearance: o,
              accentColor: s,
              grayColor: u,
              resolvedGrayColor: E,
              panelBackground: l,
              radius: c,
              scaling: h,
              onAppearanceChange: d,
              onAccentColorChange: p,
              onGrayColorChange: f,
              onPanelBackgroundChange: y,
              onRadiusChange: g,
              onScalingChange: m,
            }),
            [o, s, u, E, l, c, h, d, p, f, y, g, m]
          ),
        },
        C.createElement(w, {
          'data-is-root-theme': n ? 'true' : 'false',
          'data-accent-color': s,
          'data-gray-color': E,
          'data-has-background': (void 0 === i ? n || T : i) ? 'true' : 'false',
          'data-panel-background': l,
          'data-radius': c,
          'data-scaling': h,
          ref: t,
          ...b,
          className: (0, v.default)(
            'radix-themes',
            { light: 'light' === o, dark: 'dark' === o },
            b.className
          ),
        })
      );
    });
    eg.displayName = 'ThemeImpl';
    var em = e.i(61664);
    let eC = new g();
    function ev({ children: e }) {
      return (0, r.jsx)(ef, {
        appearance: 'dark',
        children: (0, r.jsx)(m.QueryClientProvider, {
          client: eC,
          children: (0, r.jsx)(a.IotaClientProvider, {
            networks: em.networkConfig,
            defaultNetwork: 'testnet',
            children: (0, r.jsx)(a.WalletProvider, { autoConnect: !0, children: e }),
          }),
        }),
      });
    }
    e.s(['Provider', () => ev], 78560);
  },
]);
