import { useState, useEffect } from "react";
import api from "../../services/api";

interface OpeningHours {
    text: string;
    closed: boolean;
}

interface Settings {
    openingHours: {
        soho: {
            monday: OpeningHours;
            tuesday: OpeningHours;
            wednesday: OpeningHours;
            thursday: OpeningHours;
            friday: OpeningHours;
            saturday: OpeningHours;
            sunday: OpeningHours;
        };
        covent: {
            monday: OpeningHours;
            tuesday: OpeningHours;
            wednesday: OpeningHours;
            thursday: OpeningHours;
            friday: OpeningHours;
            saturday: OpeningHours;
            sunday: OpeningHours;
        };
    };
    contact: {
        addressSoho: string;
        addressCovent: string;
        email: string;
        phone: string;
    };
    branding: {
        siteTitle: string;
        tagline: string;
    };
}

const SettingsManager = () => {
    const [settings, setSettings] = useState<Settings | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await api.get("/settings");
            setSettings(res.data);
        } catch (error) {
            console.error("Failed to save settings", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.put("/settings", settings);
            alert("Settings saved successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to save settings");
        }
    };

    if (loading || !settings)
        return <div style={{ padding: "2rem" }}>Loading settings...</div>;

    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ] as const;

    return (
        <div style={{ color: "#111827", maxWidth: "800px" }}>
            <h2
                style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "2rem" }}
            >
                Site Settings
            </h2>

            <form onSubmit={handleSave}>
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "2rem",
                        borderRadius: "8px",
                        marginBottom: "2rem",
                        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                    }}
                >
                    <h3
                        style={{
                            borderBottom: "1px solid #e5e7eb",
                            paddingBottom: "0.5rem",
                            marginBottom: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Contact & Branding
                    </h3>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1.5rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Site Title
                            </label>
                            <input
                                value={settings.branding.siteTitle}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        branding: {
                                            ...settings.branding,
                                            siteTitle: e.target.value,
                                        },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Tagline
                            </label>
                            <input
                                value={settings.branding.tagline}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        branding: { ...settings.branding, tagline: e.target.value },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Soho Address
                            </label>
                            <input
                                value={settings.contact.addressSoho}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        contact: {
                                            ...settings.contact,
                                            addressSoho: e.target.value,
                                        },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Covent Garden Address
                            </label>
                            <input
                                value={settings.contact.addressCovent}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        contact: {
                                            ...settings.contact,
                                            addressCovent: e.target.value,
                                        },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Email
                            </label>
                            <input
                                value={settings.contact.email}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, email: e.target.value },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                        <div>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "0.25rem",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Phone
                            </label>
                            <input
                                value={settings.contact.phone}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        contact: { ...settings.contact, phone: e.target.value },
                                    })
                                }
                                style={{
                                    width: "100%",
                                    padding: "0.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "4px",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        backgroundColor: "white",
                        padding: "2rem",
                        borderRadius: "8px",
                        marginBottom: "2rem",
                        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                    }}
                >
                    <h3
                        style={{
                            borderBottom: "1px solid #e5e7eb",
                            paddingBottom: "0.5rem",
                            marginBottom: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Opening Hours
                    </h3>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "2rem",
                        }}
                    >
                        <div>
                            <h4
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "1rem",
                                    color: "#4b5563",
                                }}
                            >
                                Soho Hours
                            </h4>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {days.map((day) => (
                                    <div
                                        key={`soho-${day}`}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "80px 1fr 80px",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                textTransform: "capitalize",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {day}
                                        </span>
                                        <input
                                            type="text"
                                            value={settings.openingHours.soho?.[day]?.text || ""}
                                            onChange={(e) =>
                                                setSettings({
                                                    ...settings,
                                                    openingHours: {
                                                        ...settings.openingHours,
                                                        soho: {
                                                            ...settings.openingHours.soho,
                                                            [day]: {
                                                                ...settings.openingHours.soho[day],
                                                                text: e.target.value,
                                                            },
                                                        },
                                                    },
                                                })
                                            }
                                            placeholder="Times"
                                            style={{
                                                padding: "0.4rem",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "4px",
                                                width: "100%",
                                            }}
                                        />
                                        <label
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.2rem",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={settings.openingHours.soho?.[day]?.closed}
                                                onChange={(e) =>
                                                    setSettings({
                                                        ...settings,
                                                        openingHours: {
                                                            ...settings.openingHours,
                                                            soho: {
                                                                ...settings.openingHours.soho,
                                                                [day]: {
                                                                    ...settings.openingHours.soho[day],
                                                                    closed: e.target.checked,
                                                                },
                                                            },
                                                        },
                                                    })
                                                }
                                            />{" "}
                                            Closed
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "1rem",
                                    color: "#4b5563",
                                }}
                            >
                                Covent Garden Hours
                            </h4>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {days.map((day) => (
                                    <div
                                        key={`covent-${day}`}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "80px 1fr 80px",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                textTransform: "capitalize",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {day}
                                        </span>
                                        <input
                                            type="text"
                                            value={settings.openingHours.covent?.[day]?.text || ""}
                                            onChange={(e) =>
                                                setSettings({
                                                    ...settings,
                                                    openingHours: {
                                                        ...settings.openingHours,
                                                        covent: {
                                                            ...settings.openingHours.covent,
                                                            [day]: {
                                                                ...settings.openingHours.covent[day],
                                                                text: e.target.value,
                                                            },
                                                        },
                                                    },
                                                })
                                            }
                                            placeholder="Times"
                                            style={{
                                                padding: "0.4rem",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "4px",
                                                width: "100%",
                                            }}
                                        />
                                        <label
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.2rem",
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={settings.openingHours.covent?.[day]?.closed}
                                                onChange={(e) =>
                                                    setSettings({
                                                        ...settings,
                                                        openingHours: {
                                                            ...settings.openingHours,
                                                            covent: {
                                                                ...settings.openingHours.covent,
                                                                [day]: {
                                                                    ...settings.openingHours.covent[day],
                                                                    closed: e.target.checked,
                                                                },
                                                            },
                                                        },
                                                    })
                                                }
                                            />{" "}
                                            Closed
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                        type="submit"
                        style={{
                            padding: "0.75rem 2rem",
                            backgroundColor: "#3b82f6",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "1rem",
                        }}
                    >
                        Save All Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SettingsManager;
