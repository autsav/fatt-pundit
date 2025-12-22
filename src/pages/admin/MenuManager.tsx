import { useState, useEffect } from "react";
import api from "../../services/api";
import { IoPencil, IoTrash, IoAdd, IoClose } from "react-icons/io5";

interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    imageUrl?: string;
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
    isSpicy: boolean;
    available: boolean;
}

const MenuManager = () => {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

    // Form State
    const [formData, setFormData] = useState<Partial<MenuItem>>({
        name: "",
        description: "",
        price: "",
        category: "",
        isVegetarian: false,
        isSpicy: false,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await api.get("/menu");
            setItems(res.data);
        } catch (error) {
            console.error("Failed to fetch menu", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await api.delete(`/menu/${id}`);
            setItems(items.filter((i) => i._id !== id));
        } catch (error) {
            console.error(error);
            alert("Failed to delete");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let imageUrl = formData.imageUrl;

        // Upload Image if selected
        if (imageFile) {
            const uploadData = new FormData();
            uploadData.append("image", imageFile);
            try {
                const res = await api.post("/upload", uploadData, {
                    headers: { "Content-Type": "multipart/form-data" }, // Axios auto-sets boundary check
                });
                imageUrl = `http://localhost:5001${res.data.filePath}`;
            } catch (error) {
                console.error(error);
                alert("Image upload failed");
                return;
            }
        }

        const payload = { ...formData, imageUrl };

        try {
            if (editingItem) {
                const res = await api.put(`/menu/${editingItem._id}`, payload);
                setItems(items.map((i) => (i._id === editingItem._id ? res.data : i)));
            } else {
                const res = await api.post("/menu", payload);
                setItems([...items, res.data]);
            }
            closeModal();
        } catch (err) {
            console.error(err);
            alert("Failed to save item");
        }
    };

    const openModal = (item?: MenuItem) => {
        if (item) {
            setEditingItem(item);
            setFormData(item);
        } else {
            setEditingItem(null);
            setFormData({
                name: "",
                description: "",
                price: "",
                category: "MOMO'S",
                isVegetarian: false,
                isSpicy: false,
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
        setImageFile(null);
    };

    if (loading) return <div style={{ padding: "2rem" }}>Loading menu...</div>;

    const categories = Array.from(new Set(items.map((i) => i.category)));

    return (
        <div style={{ color: "#111827" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem",
                }}
            >
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Menu Manager</h2>
                <button
                    onClick={() => openModal()}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "#10b981",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    <IoAdd size={20} /> Add Item
                </button>
            </div>

            {/* List by Category */}
            {categories.map((cat) => (
                <div key={cat} style={{ marginBottom: "2rem" }}>
                    <h3
                        style={{
                            borderBottom: "2px solid #e5e7eb",
                            paddingBottom: "0.5rem",
                            marginBottom: "1rem",
                            color: "#374151",
                        }}
                    >
                        {cat}
                    </h3>
                    <div style={{ display: "grid", gap: "1rem" }}>
                        {items
                            .filter((i) => i.category === cat)
                            .map((item) => (
                                <div
                                    key={item._id}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "white",
                                        padding: "1rem",
                                        borderRadius: "6px",
                                        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        {item.imageUrl && (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    objectFit: "cover",
                                                    borderRadius: 4,
                                                }}
                                            />
                                        )}
                                        <div>
                                            <div style={{ fontWeight: "bold" }}>
                                                {item.name}{" "}
                                                <span
                                                    style={{
                                                        fontWeight: "normal",
                                                        color: "#6b7280",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    ({item.price})
                                                </span>
                                            </div>
                                            <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                                                {item.isVegetarian && "🥬 "}
                                                {item.isSpicy && "🌶️ "}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button
                                            onClick={() => openModal(item)}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                color: "#3b82f6",
                                            }}
                                        >
                                            <IoPencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                color: "#ef4444",
                                            }}
                                        >
                                            <IoTrash size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}

            {/* Modal */}
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "2rem",
                            borderRadius: "8px",
                            width: "90%",
                            maxWidth: "500px",
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <h3 style={{ margin: 0, fontWeight: "bold" }}>
                                {editingItem ? "Edit Item" : "Add New Item"}
                            </h3>
                            <button
                                onClick={closeModal}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                        >
                            <div>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    style={{
                                        width: "100%",
                                        padding: "0.5rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "4px",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "1rem",
                                }}
                            >
                                <div>
                                    <label
                                        style={{
                                            display: "block",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        Price
                                    </label>
                                    <input
                                        required
                                        value={formData.price}
                                        onChange={(e) =>
                                            setFormData({ ...formData, price: e.target.value })
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
                                            fontSize: "0.9rem",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        Category
                                    </label>
                                    <input
                                        required
                                        list="categories"
                                        value={formData.category}
                                        onChange={(e) =>
                                            setFormData({ ...formData, category: e.target.value })
                                        }
                                        style={{
                                            width: "100%",
                                            padding: "0.5rem",
                                            border: "1px solid #d1d5db",
                                            borderRadius: "4px",
                                        }}
                                    />
                                    <datalist id="categories">
                                        <option value="MOMO'S" />
                                        <option value="VEG" />
                                        <option value="SEAFOOD" />
                                        <option value="MEAT, GAME + POULTRY" />
                                        <option value="BREAD, RICE & NOODLES" />
                                        <option value="SIDES" />
                                        <option value="DESSERT" />
                                    </datalist>
                                </div>
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    style={{
                                        width: "100%",
                                        padding: "0.5rem",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "4px",
                                    }}
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label
                                    style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setImageFile(e.target.files ? e.target.files[0] : null)
                                    }
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div style={{ display: "flex", gap: "1rem" }}>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.isVegetarian}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                isVegetarian: e.target.checked,
                                            })
                                        }
                                    />{" "}
                                    Vegetarian
                                </label>
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.isSpicy}
                                        onChange={(e) =>
                                            setFormData({ ...formData, isSpicy: e.target.checked })
                                        }
                                    />{" "}
                                    Spicy
                                </label>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    marginTop: "1rem",
                                    padding: "0.75rem",
                                    backgroundColor: "#3b82f6",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                Save Item
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuManager;
