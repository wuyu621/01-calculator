import React, { useState } from "react";
import "./index.css";

function App() {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [discount1, setDiscount1] = useState(1);
  const [discount2, setDiscount2] = useState(1);
  const [usShippingFee, setUsShippingFee] = useState(0);
  const [shippingWeight, setShippingWeight] = useState(0);
  const [shippingCostUnit, setShippingCostUnit] = useState(0);

  const [exchangeRate, setExchangeRate] = useState(6.7);
  const [profitRate, setProfitRate] = useState(20);

  const cost =
    originalPrice * discount1 * discount2 * (1 + tax / 100) * exchangeRate +
    usShippingFee * exchangeRate;

  const profit = (profitRate * cost) / (100 - profitRate);

  const shippingFee = shippingWeight * shippingCostUnit * exchangeRate;

  const salePrice = cost + shippingFee + profit;

  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>daigou calculator</h1>
          <div className="underline"></div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="mb-3 row">
              <label className="col-6 col-form-label">原价 $</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={originalPrice}
                  onChange={(e) => {
                    setOriginalPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">折扣1 %</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={discount1}
                  value={discount1}
                  onChange={(e) => {
                    setDiscount1(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">折扣2 %</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={discount2}
                  value={discount2}
                  onChange={(e) => {
                    setDiscount2(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">税率 %</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={tax}
                  onChange={(e) => {
                    setTax(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">US运费 $</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={usShippingFee}
                  onChange={(e) => {
                    setUsShippingFee(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">运费重量 lb</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={shippingWeight}
                  onChange={(e) => {
                    setShippingWeight(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">运费单价 $</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={shippingCostUnit}
                  onChange={(e) => {
                    setShippingCostUnit(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">汇率</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={exchangeRate}
                  value={exchangeRate}
                  onChange={(e) => {
                    setExchangeRate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-6 col-form-label">利润率 %</label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  name={profitRate}
                  value={profitRate}
                  onChange={(e) => {
                    setProfitRate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-5">
            <h4 className="text-primary">货物成本：￥{cost.toFixed(2)}</h4>
            <h4 className="text-primary">运费：￥{shippingFee.toFixed(2)}</h4>
            <h4 className="text-danger">卖价：￥{salePrice.toFixed(2)}</h4>
            <hr />
            <h4 className="text-success">你赚了：￥{profit.toFixed(2)}</h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
