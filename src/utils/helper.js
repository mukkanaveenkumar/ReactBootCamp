export function filterData(searchText, restaurants)
{
    let filteredData = restaurants;
    if(searchText != '')
    {
        filteredData = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return filteredData;
}

