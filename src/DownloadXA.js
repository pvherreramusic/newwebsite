import { Button } from "antd";
import React, { useState, useEffect } from "react";



export const DownloadLinkXanax = ({ url, fileName }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/counter?id=xanax', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'L6XvFN6mBJgwe5Ay7GRzHw==dQ9QMHkYL16Hiu88',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    const handleDownload = () => {
        fetch('https://api.api-ninjas.com/v1/counter?id=xanax&hit=true', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'L6XvFN6mBJgwe5Ay7GRzHw==dQ9QMHkYL16Hiu88',
                'Content-Type': 'application/json'
            }
        })



        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = fileName || "downloaded-file";
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            });
    };

    return (
        <div>

            <Button type="primary" onClick={handleDownload}>Download The Album for Free</Button>
            <p>Downloaded {data.value} times</p>
        </div>
    );
};
