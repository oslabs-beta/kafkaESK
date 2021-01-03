import React, { useEffect } from "react";
import Chart from "chart.js"; 
export default function BarChart() {
    useEffect(() => {
        const ctx = document.getElementById("barChart");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["404", "405", "406", "407"],
                datasets: [
                    {
                        label: "Errors per minute",
                        data: [12, 10, 14, 13],
                        backgroundColor: [
                            "Red",
                            "rgb(54, 162, 235)",
                            "Pink",
                            "Orange"
                        ]
                    }
                ]
            }
        });
    });
    return (
        <div className="BarChart">
            <canvas id="barChart" width="500" height="500" />
        </div>
    );
}