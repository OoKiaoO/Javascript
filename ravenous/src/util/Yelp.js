const apiKey = 'FO33c9QvSiqxn30KESZda36omzE7ofis07yxbz_j1WU8rD5u62cn6cC8rxUF60pkcyg7McQwJwIdhpZZHGyT8ZC9XPZdZPoyVvog5SMp981FeNyAwQcX_9_0a-wcX3Yx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.postal_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                }))
            }
        })
    }
}

export default yelp;