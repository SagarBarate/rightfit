export const getFeaturedProducts = async () => {
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"
    const res = await fetch(
        "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "GET",
        }
    );
    const featured_products = await res.json();
    return featured_products
}