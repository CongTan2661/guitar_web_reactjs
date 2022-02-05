import React, { Component } from "react";

class UserItem extends Component {
    render() {
        return (
            <tr>
                <th className = "text-center">1</th>
                <th className = "text-center">1</th>
                <th>Phan Nguyễn Chu Kiệt</th>
                <th className = "text-center"><span >03/09/2001</span></th>
                <th><span >phankiet0309@gmail.com</span></th>
                <th className = "text-center"><span >0911934598</span></th>
                <th className = "text-center"><span >103 Hùng Vương</span></th>
                <td className = "text-center"><span >1.000.000.000 </span></td>
                <th className = "text-center"><span >03k09i</span></th>
                <th className = "text-center"><span >pnck0309</span></th>
            </tr>
        );
    }
}

export default UserItem;
