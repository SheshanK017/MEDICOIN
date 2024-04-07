import type { PackageDefinition } from "../../ADOP";
/**
 * Queries all valid ADO types
 * @returns
 */
export declare function queryADOTypes(): Promise<string[]>;
/**
 * Queries the package definition for a given ADO type
 * @param adoType
 * @returns
 */
export declare function queryADOPackageDefinition(adoType: string): Promise<PackageDefinition>;
