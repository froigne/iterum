import { elementType } from "./schemas";
import { generator } from "endpoints/lib";

// elements
const elementGenerator = generator.with("/elements", elementType);
export const fetchElementList = elementGenerator.fetchEntityList;
