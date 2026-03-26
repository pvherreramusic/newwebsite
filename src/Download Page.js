import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import DownloadXA from "./DownloadXA";
import CigDownloadFiles from "./DownloadCigs";
import HACFDownloadFiles from "./DownloadHACF";

import picXanax from "./images/xanaxcover.jpg";
import picCigarettes from "./images/cigsicover.jpg";
import hercoverse from "./images/herAtmo.jpg";

const ALBUMS = [
    { id: "xa",   image: picXanax,      DownloadComponent: DownloadXA },
    { id: "cigs", image: picCigarettes, DownloadComponent: CigDownloadFiles },
    { id: "hacf", image: hercoverse,    DownloadComponent: HACFDownloadFiles },
];

function AlbumCard({ image, DownloadComponent }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Image src={image} rounded fluid />
            <DownloadComponent />
        </Card>
    );
}

const styles = {
    section: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    title: {
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "1rem",
        color: "#ffffff",
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "rgba(255, 255, 255, 0.7)",
        textAlign: "center",
        marginBottom: "4rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
    },
};

export default function DownloadPage() {
    return (
        <section style={styles.section} id="downloads">
            <h2 style={styles.title}>Available Albums to Download</h2>
            <p style={styles.subtitle}>Free to download — no sign-up or info required.</p>
            <div style={styles.grid}>
                {ALBUMS.map(({ id, image, DownloadComponent }) => (
                    <AlbumCard key={id} image={image} DownloadComponent={DownloadComponent} />
                ))}
            </div>
        </section>
    );
}