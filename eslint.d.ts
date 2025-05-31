declare module "eslint-plugin-no-commented-code";
declare module "eslint-plugin-only-warn" {
  import { RulesRecord } from "eslint";
  const rules: RulesRecord;
  export default { rules };
}
