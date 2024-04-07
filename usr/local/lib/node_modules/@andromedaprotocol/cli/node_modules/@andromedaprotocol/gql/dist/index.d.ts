import { StrictTypedTypePolicies } from './__generated/apollo-helpers';
export * from './__generated/apollo-helpers';
export * from "./__generated/types";
/**
 * Typed Field Policy will be used with apollo client to provide information about key fields.
 * Keys fields are important from cache perspective and default key field (id) is missing from our results.
 * This field policy object is easy to create because of codegen policy type generated and also provides a
 * reusable object which can easily be integrated in different projects.
 */
export declare const TypedFieldPolicy: StrictTypedTypePolicies;
