import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import StarRatingImg from "../../images/BarGraphPreview.svg"

const PositiveWords = () => {

    return (
        <div>
            <h3>Positive Words</h3>
            {/* <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="example" stroke="#B287A3" />;

            </LineChart> */}
        </div>
    );
}

export default PositiveWords;