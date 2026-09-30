interface Machine {
  name: string;
  brand: string;
  quantity: string;
}

interface MachineryCategory {
  title: string;
  totalLabel: string;
  total: string;
  machines: Machine[];
}

const machineryCategories: MachineryCategory[] = [
  {
    title: "Cutting Machinery",
    totalLabel: "Total Cutting Machinery",
    total: "20",
    machines: [
      {
        name: 'Cutting Machine 8"',
        brand: "KM",
        quantity: "03",
      },
      {
        name: 'Cutting Machine 8"',
        brand: "Open",
        quantity: "01",
      },
      {
        name: 'Cutting Machine 10"',
        brand: "KM",
        quantity: "03",
      },
      {
        name: "Fabric Inspection Machine",
        brand: "Open",
        quantity: "01",
      },
      {
        name: "Drill Machine",
        brand: "Open",
        quantity: "02",
      },
      {
        name: "Fusing Machine (Medium) HP-650",
        brand: "Open",
        quantity: "02",
      },
      {
        name: "Numbering Machine",
        brand: "Open",
        quantity: "05",
      },
      {
        name: "End Cutting Machine",
        brand: "Eastman",
        quantity: "02",
      },
      {
        name: "Band Knife Machine1",
        brand: "Open",
        quantity: "01",
      },
    ],
  },
  {
    title: "Sewing Machinery",
    totalLabel: "Total Sewing Machinery",
    total: "213",
    machines: [
      {
        name: "Plain Machine",
        brand: "Juki",
        quantity: "120",
      },
      {
        name: "Overlock Machine",
        brand: "Pegasus",
        quantity: "45",
      },
      {
        name: "Flat Lock Machine",
        brand: "Pegasus",
        quantity: "20",
      },
      {
        name: "Feed of the Arm",
        brand: "Juki",
        quantity: "08",
      },
      {
        name: "Button Hole Machine",
        brand: "Juki",
        quantity: "06",
      },
      {
        name: "Button Stitch Machine",
        brand: "Juki",
        quantity: "06",
      },
      {
        name: "Bar Tack Machine",
        brand: "Juki",
        quantity: "04",
      },
      {
        name: "Kansai Machine",
        brand: "Kansai",
        quantity: "04",
      },
    ],
  },
  {
    title: "Finishing Machinery",
    totalLabel: "Total Finishing Machinery",
    total: "54",
    machines: [
      {
        name: "Steam Iron",
        brand: "Tefal",
        quantity: "30",
      },
      {
        name: "Vacuum Iron Table",
        brand: "Open",
        quantity: "15",
      },
      {
        name: "Boiler",
        brand: "Open",
        quantity: "02",
      },
      {
        name: "Pressing Machine",
        brand: "Open",
        quantity: "04",
      },
      {
        name: "Hanger Clipping Machine",
        brand: "Open",
        quantity: "03",
      },
    ],
  },
  {
    title: "Embroidery Machinery",
    totalLabel: "Total Embroidery Machinery",
    total: "6",
    machines: [
      {
        name: "Embroidery Machine (15 Head)",
        brand: "Tajima",
        quantity: "02",
      },
      {
        name: "Embroidery Machine (6 Head)",
        brand: "Tajima",
        quantity: "01",
      },
      {
        name: "Embroidery Machine (2 Head)",
        brand: "Open",
        quantity: "03",
      },
    ],
  },
];

export function MachineryInventory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
            Our Machinery Inventory
          </h2>
        </div>

        {/* Tables */}
        <div className="mt-12 space-y-14">
          {machineryCategories.map((category) => (
            <div key={category.title}>

              <h3 className="mb-6 text-center text-lg font-medium text-slate-800">
                {category.title}
              </h3>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-800">
                          SL No.
                        </th>

                        <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-800">
                          Machine Name
                        </th>

                        <th className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-800">
                          Brand
                        </th>

                        <th className="border-b border-slate-200 px-6 py-4 text-right text-sm font-semibold text-slate-800">
                          Quantity
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {category.machines.map((machine, index) => (
                        <tr
                          key={`${category.title}-${machine.name}-${index}`}
                          className="transition hover:bg-slate-50"
                        >
                          <td className="border-b border-slate-100 px-6 py-4 text-sm text-slate-500">
                            {index + 1}
                          </td>

                          <td className="border-b border-slate-100 px-6 py-4 text-sm text-slate-700">
                            {machine.name}
                          </td>

                          <td className="border-b border-slate-100 px-6 py-4 text-sm text-slate-700">
                            {machine.brand}
                          </td>

                          <td className="border-b border-slate-100 px-6 py-4 text-right text-sm text-slate-700">
                            {machine.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr className="bg-slate-50">
                        <td
                          colSpan={3}
                          className="px-6 py-4 text-right text-sm font-bold text-slate-800"
                        >
                          {category.totalLabel}
                        </td>

                        <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                          {category.total}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Total */}
        <div className="mt-14 flex justify-end">
          <div className="flex items-center gap-8 rounded-xl border border-slate-200 bg-white px-7 py-5 shadow-sm">
            <span className="text-sm font-medium text-slate-700">
              Grand Total Machines
            </span>

            <span className="text-2xl font-bold text-slate-900">
              293
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}