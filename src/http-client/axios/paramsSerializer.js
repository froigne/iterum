import qs from "qs";

const paramsSerializer = params => qs.stringify(params, { arrayFormat: "repeat" });

export default paramsSerializer;
