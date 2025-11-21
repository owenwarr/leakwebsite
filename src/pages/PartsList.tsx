import React, { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type BomItem = {
  item: string;
  qty: number | string;
  cost: string;      // display cost (e.g., "$2.50", "$50-$75", "50g")
  link: string;
};

export default function PartsList() {
  const bomItems: BomItem[] = [
    { item: "FireBeetle ESP32-E IoT Microcontroller", qty: 1, cost: "$15", link: "https://www.dfrobot.com/product-2195.html" },
    { item: "LIS2DW12 Accelerometer Module", qty: 1, cost: "$3.90", link: "https://www.dfrobot.com/product-2348.html?gad_source=1&gad_campaignid=22388643497&gbraid=0AAAAADucPlAi_VK0D1Zxl0fvlCz05hEfr&gclid=CjwKCAiAuIDJBhBoEiwAxhgyFnBdS4Tfs_6dWXgTB28-L0u0IsOmwlLtUOeUUuJ-u-DI6-kUSudrLhoClE8QAvD_BwE" },
    { item: "3.7V 4400mAh Li-Po Battery", qty: 1, cost: "$6", link: "https://www.amazon.com/dp/B0BJKFJ227?ref=ppx_yo2ov_dt_b_fed_asin_title" },
    { item: "Velcro Strap (1.5\" width)", qty: 1, cost: "$3", link: "https://www.walmart.com/ip/VELCRO-USA-Inc-Industrial-Strength-Sticky-Back-Hook-Loop-Fastener-Strips-4-x-2-Black/19311524?wmlspartner=wlpa&selectedSellerId=0&wl13=1024&gclsrc=aw.ds&adid=2222222227719311524_117755028669_12420145346&wl0=&wl1=g&wl2=c&wl3=501107745824&wl4=pla-394283752452&wl5=9010995&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=local&wl12=19311524&veh=sem_LIA&gclsrc=aw.ds&gad_source=1&gad_campaignid=12420145346&gbraid=0AAAAADmfBIr0hAjuRk-897OnEGwUbASb6&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFWFnHAZFaDSyb4AFpOj96Gnc3_zBIPU0c9SMaiis6qF6LBwc38WpIYaAhbTEALw_wcB" },
    { item: "3D Printing Filament (PLA)", qty: "50g", cost: "$2.00", link: "https://atomicfilament.com/products/black-pla-filament" },
    { item: "Jumper Wires x10 (Male-Male)", qty: 1, cost: "$2", link: "https://www.adafruit.com/product/1957?srsltid=AfmBOooGsyi4KqcGJqzcJNcyJdSbAl943DiR-bqoieDGuh1_y6BzBXvofE8" },
    { item: "USB-C Cable (charging)", qty: 1, cost: "$6", link: "https://www.amazon.com/Amazon-Basics-Charger-480Mbps-Certified/dp/B01GGKYN0A/ref=sr_1_7_ffob_sspa?dib=eyJ2IjoiMSJ9.kD_UX5cfSPk9-oqnhWXGj8CAbSOafH6GFMHA33knmhTjJySJfMCGsZLd9Ok09ZUQ6MqtaSn3tFi_bDtUD0NnxJEwV_oFVLj3Ylknc5-QkBSWykClXICeZX-TrTCSlUwNiAO01PDRSdqwdCNLhLnbhe6JXU9qx9jyyxIovfWj1COUIXcSqMi885JZS-Upv_KC9x4SqkwbudYx9ar8HNT3hRc1dgcakQPDsupHFYg1sEM.ktyLaCMcEVhDwJPFIxqUJSCUo-rsRYJmbTl5CvCfkd0&dib_tag=se&keywords=usb-c+charger&qid=1762283092&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1" },
    { item: "Heat Shrink Tubing", qty: "1ft", cost: "$1.00", link: "https://www.amazon.com/650pcs-Shrink-Tubing-innhom-Approved/dp/B07WWWPR2X/ref=sr_1_6?dib=eyJ2IjoiMSJ9.afAtOFc0AWv7IewHnY-SsuN5uE2l0bfL-h5TpNvDnE6kfQoqZkYohyqoxSNuMUcN_WNKaZcK90NvFGHhgy-ATxUo2xlVY1iVJF70EdInhxSFmSUhiM8_FjuUkms3YpVmmAsvh-AeOUPRW-ZONGB63Ffs5WEviLLJj3lcvO1fz9Nvp4-j3OuXJFpR_GMq8_4fzU8J-2Vh9LxqaReMRHN7da1Ez8rgElSgprNg1U8fnv8.Dlip_atTTl9fUNwMOXt7GzO38fO6ZNSqZG1FdQWqPLE&dib_tag=se&keywords=heat+shrink+tubing&qid=1762283113&sr=8-6" },
	{ item: "FPG5 Fuse Holder", qty: "1", cost: "$5.50", link: "https://www.digikey.com/en/products/detail/schurter-inc/3101.0055/2645423" },
  ];

  // Make category names match BOM item names exactly so they display cleanly
  const categories: Record<string, string[]> = {
    Electronics: [
      "FireBeetle ESP32-E IoT Microcontroller",
      "LIS2DW12 Accelerometer Module",
      "3.7V 4400mAh Li-Po Battery",
      "Jumper Wires (Male-Male)",
    ],
    Enclosure: [
      "3D Printing Filament (PLA)",
      "Velcro Strap",
    ],
    Accessories: [
      "USB-C Cable (charging)",
    ],
  };

  // Parse a cost like "$2.50" or "$50-$75" -> number or null (uses the FIRST $value only)
  function parseCostToNumber(cost: string): number | null {
    const match = cost.match(/(\d+(\.\d+)?)/); // first number
    return match ? Number(match[1]) : null;
  }

  // If qty is "1ft" or "50g", treat as 1 for total math
  function qtyToNumber(qty: number | string): number {
    return typeof qty === "number" ? qty : 1;
  }

  // Compute totals
  const { numericTotal, componentCount } = useMemo(() => {
    let total = 0;
    for (const row of bomItems) {
      const c = parseCostToNumber(row.cost);
      const q = qtyToNumber(row.qty);
      if (typeof c === "number") total += c * q;
    }
    return { numericTotal: total, componentCount: bomItems.length };
  }, [bomItems]);

  const formattedTotal = `$${numericTotal.toFixed(2)}`;

  // CSV download
  function handleDownloadCSV() {
    const headers = ["Item", "Quantity", "Est. Cost", "Link"];
    const rows = bomItems.map((b) => [
      b.item,
      String(b.qty),
      b.cost,
      b.link,
    ]);

    // Escape CSV (wrap each field in quotes, double up existing quotes)
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const csv =
      "\uFEFF" + // BOM for Excel
      [headers, ...rows]
        .map((row) => row.map((cell) => esc(cell)).join(","))
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bom.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Bill of Materials (BOM)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete parts list with estimated costs for prototype assembly
          </p>

          <Button onClick={handleDownloadCSV} className="bg-[#2CB1A1] hover:bg-[#2CB1A1]/90">
            <Download className="w-4 h-4 mr-2" />
            Download BOM (CSV)
          </Button>
        </div>

        {/* Cost Summary */}
        <section className="mb-12">
          <Card className="p-8 border-2 border-[#2CB1A1] bg-gradient-to-br from-white to-[#2CB1A1]/5">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#0E3A5D] mb-2">{formattedTotal}</div>
                <div className="text-sm text-gray-600">Total (summed from numeric costs)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0E3A5D] mb-2">{componentCount}</div>
                <div className="text-sm text-gray-600">Total Components</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0E3A5D] mb-2">$50–$75</div>
                <div className="text-sm text-gray-600">Target Cost Range</div>
              </div>
            </div>
          </Card>
        </section>

        {/* BOM Table */}
        <section className="mb-12">
          <Card className="overflow-hidden border-2 border-gray-200">
            <div className="bg-[#0E3A5D] text-white px-6 py-4">
              <h2 className="text-xl font-bold">Complete Parts List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Est. Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bomItems.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{row.item}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.qty}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-[#0E3A5D]">{row.cost}</span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#2CB1A1] hover:text-[#0E3A5D] transition-colors text-sm font-medium"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50 border-t-2 border-gray-200">
                  <tr>
                    <td colSpan={2} className="px-6 py-4 text-right font-bold text-gray-900">
                      Total:
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-[#0E3A5D]">{formattedTotal}</span>
                    </td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </section>

        {/* Categories Breakdown */}
        <section>
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8">Components by Category</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(categories).map(([category, items]) => (
              <Card
                key={category}
                className="p-6 border-2 border-gray-200 hover:border-[#2CB1A1] transition-all"
              >
                <h3 className="text-xl font-bold text-[#0E3A5D] mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((name, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-1.5 flex-shrink-0" />
                      {name}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mt-12">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0E3A5D] mb-4">Procurement Notes</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0" />
                <span>Prices are estimates based on single-unit retail purchases; bulk orders can reduce costs significantly.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0" />
                <span>3D printing filament cost assumes access to a printer; commercial printing services may increase cost.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0" />
                <span>All electronic components are readily available from major distributors (Adafruit, SparkFun, Amazon).</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2CB1A1] mt-2 flex-shrink-0" />
                <span>FireBeetle ESP32 includes built-in battery management and USB-C charging.</span>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
