import React from 'react';
import ReactDom from "react-dom/client";
import './style.css';

const name = "nhat";
const root = ReactDom.createRoot(document.getElementById("root"))
// gán giá trị vào thẻ có id là root

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry"
];

// C1 : cách bình thường

// root.render(
// React.createElement("h1", {style: { textAlign: "center"}}, name)
//     // dùng để tạo 1 element chứa thông tin của thẻ được khai báo
// );

// C2 : dùng jsx

// root.render(
//     <h1 style={{textAlign: "center"}}>
//         {name}
//     </h1>
// )


// root.render(
//     <div>
//         <h1>List of fruits</h1>
//         <ul>
//             {fruits.map(item => ( // dùng để lặp qua 1 mảng và tạo các thành phần jsx tương ứng
//                 <li>{item}</li>
//             ))}
//         </ul>
//     </div>
// )

// const tick = () => {
//     root.render(
//         <div>
//             <h1>Hello world</h1>
//             <h2>Is it {new Date().toLocaleDateString()}</h2>
//             {/*// lấy thời gian hiện tại*/}
//         </div>
//     );
// };
//
// setInterval(tick, 1000) // dùng để gọi hàn sau 1 khoảng thời gian

// root.render(
//     <h4>Browser's detail: {navigator.userAgent}</h4>
// )

const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
root.render(
    <div>
        <h1>Student</h1>
        <table>
            <tbody>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            </tbody>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
        </table>
    </div>
)


