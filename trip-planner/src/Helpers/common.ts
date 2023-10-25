import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";

export const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [stylisRTLPlugin]
});