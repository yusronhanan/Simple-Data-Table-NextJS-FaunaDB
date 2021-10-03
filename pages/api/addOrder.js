import { query as q } from "faunadb";
import { faunaClient } from "../../lib/fauna";

function generateInvoiceID() {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
}
export default async (req, res) => {
  if (req.method == "POST") {
    const body = JSON.parse(req.body);
    let query = await faunaClient.query(
      q.Create(q.Collection("orders"), {
        data: {
          invoice_number: generateInvoiceID(),
          email: body.email,
          payment_status: body.payment_status == "1" ? 1 : 0,
          fulfillment_status: body.fulfillment_status == "1" ? 1 : 0,
          total_amount: parseInt(body.total_amount),
          created_at: new Date().toISOString(),
        },
      })
    );
    res.status(200).json({ data: query });
  }
};
