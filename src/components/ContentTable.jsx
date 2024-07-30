import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import {
  FiMoreVertical,
  FiDownload,
  FiEdit,
  FiTrash,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import img from "../assets/img.jpg";

const ContentTable = () => {
  const data = useMemo(
    () => [
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
      {
        profile: img,
        name: "Cody Fisher",
        phone: "(848) 221 2999",
        email: "robertfox@example.com",
        company: {
          name: "Global SpaceX",
          logo: img,
        },
        status: "Deal Closed",
        location: "Austin",
        invoice: "#INV31122323",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Profile",
        accessor: "profile",
        Cell: ({ cell: { value }, row: { original } }) => (
          <div className="flex w-[200px] items-center gap-2">
            <input type="checkbox" />
            <img
              src={value}
              alt={original.name}
              className="w-6 h-6 rounded-full ml-5"
            />
            <span>{original.name}</span>
          </div>
        ),
      },
      {
        Header: "Contacts",
        accessor: "phone",
        Cell: ({ row: { original } }) => (
          <div className="flex w-[200px] flex-col items-start">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span>{original.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail />
              <a href="" className="underline">
                {original.email}
              </a>
            </div>
          </div>
        ),
      },
      {
        Header: "Company",
        accessor: "company.name",
        Cell: ({ row: { original } }) => (
          <div className="flex items-center w-[150px] gap-2">
            <img
              src={original.company.logo}
              alt={original.company.name}
              className="w-6 h-6 rounded-full"
            />
            <span>{original.company.name}</span>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <div className=" py-1 w-[90px] text-center rounded-md bg-green-100 text-green-600 text-xs">
            {value}
          </div>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: ({ cell: { value } }) => (
          <div className="flex w-[150px] items-center gap-2">
            <FiMapPin className="w-6 h-6" />
            <div className="w-[200px] text-[14px] text-gray-500">{value}</div>
          </div>
        ),
      },
      {
        Header: "Invoice",
        accessor: "invoice",
      },
      {
        Header: "Quick Action",
        accessor: "quickAction",
        Cell: ({ row: { original } }) => {
          const [menuOpen, setMenuOpen] = useState(false);

          const toggleMenu = () => {
            setMenuOpen(!menuOpen);
          };

          return (
            <div className="">
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 text-gray-500 hover:bg-gray-100"
              >
                <FiMoreVertical />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FiDownload className="mr-2" /> Download Invoice
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FiEdit className="mr-2" /> Edit Invoice
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FiTrash className="mr-2" /> Delete
                  </a>
                </div>
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead className="bg-gray-100 border-b-2 border-gray-200">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="p-3 text-left font-semibold text-gray-600"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className="border mt-3 border-gray-200"
              >
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()} className="p-3" key={index}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
