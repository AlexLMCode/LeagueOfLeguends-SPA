const API = 'http://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json';

const getData = async () => {
    const response = await fetch(API);
    return await response.json();
}

export default getData;