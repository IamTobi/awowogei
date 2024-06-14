import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { sortAndAssignIcons } from "../utils/player-skills";
import { PlayerSkill } from "../types/player-skill.model";

function PlayerLookupPage() {
  const [playerSkillData, setPlayerSkillsData] = useState<PlayerSkill[]>([]);
  const [accountName, setAccountName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cors.bestkeystone.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${accountName}`,
        {
          headers: {
            Origin: "yourdomain.com", // Replace with your actual domain
          },
        }
      );
      // Assuming the response data structure is similar to SkillMock
      setPlayerSkillsData(sortAndAssignIcons(response.data.skills));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center bg-gray-800 rounded-md shadow-md mb-8"
          >
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Accountname..."
              className="flex-1 bg-transparent text-gray-300 px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 text-gray-300 px-4 py-2 rounded-r-md hover:bg-gray-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {loading ? (
            <div className="text-white flex flex-col text-center">
              Loading...
            </div>
          ) : playerSkillData.length ? (
            <div className="grid grid-cols-3 gap-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-lg">
              {playerSkillData.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-md"
                >
                  <h3 className="text-lg text-white font-bold mb-2">
                    {skill.level}
                  </h3>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default PlayerLookupPage;
