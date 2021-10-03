import faunadb from "faunadb";
export const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: "db.eu.fauna.com",
});

export function extract_ref_id(payload) {
  let ref = payload.ref;
  let data = payload.data;
  return { id: ref.id, ...data };
}
