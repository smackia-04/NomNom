
export function filterData(searchText, rest){
    const data = rest?.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
    return data;
}