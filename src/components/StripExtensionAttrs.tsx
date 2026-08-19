import Script from 'next/script'

export default function StripExtensionAttrs() {
    return (
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
            {`
                (function () {
                    function isInjected(name) {
                        return (
                            name === 'bis_skin_checked' ||
                            name === 'bis_register' ||
                            name === 'fdprocessedid' ||
                            name.indexOf('bis_') === 0 ||
                            name.indexOf('__processed') === 0
                        );
                    }

                    function clean(el) {
                        if (!el || !el.attributes) return;
                        var attrs = Array.from(el.attributes);
                        for (var i = 0; i < attrs.length; i++) {
                            if (isInjected(attrs[i].name)) {
                                el.removeAttribute(attrs[i].name);
                            }
                        }
                    }

                    function sweep(root) {
                        if (!root) return;
                        clean(root);
                        if (root.querySelectorAll) {
                            var nodes = root.querySelectorAll('*');
                            for (var i = 0; i < nodes.length; i++) clean(nodes[i]);
                        }
                    }

                    sweep(document.documentElement);

                    new MutationObserver(function (mutations) {
                        for (var i = 0; i < mutations.length; i++) {
                            var mutation = mutations[i];
                            if (mutation.type === 'attributes') {
                                clean(mutation.target);
                            }
                            var nodes = mutation.addedNodes;
                            if (!nodes) continue;
                            for (var j = 0; j < nodes.length; j++) {
                                sweep(nodes[j]);
                            }
                        }
                    }).observe(document.documentElement, {
                        attributes: true,
                        childList: true,
                        subtree: true
                    });
                })();
            `}
        </Script>
    )
}
