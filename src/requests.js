import axios from "axios";

const ACESS_TOKEN = 6760171314046660;

export const getBasicHeroInfoByID = async (id) => {
  const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACESS_TOKEN}/${id}/powerstats`);
  const { data: image } = await axios.get(`https://superheroapi.com/api/${ACESS_TOKEN}/${id}/image`);
  console.log(image, powerstats, powerstats.name);
  return { name: powerstats.name, powerstats, imgUrl: image.url };
};
