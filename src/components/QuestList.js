import React, { useState, useEffect } from "react";
import styled from "styled-components";

const QuestTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeading = styled.th`
  background-color: #333;
  color: #fff;
  padding: 12px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #444;
  }
`;

const TableCell = styled.td`
  padding: 12px;
`;

const Dropdown = styled.select`
  padding: 8px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const QuestList = () => {
  const [quests, setQuests] = useState([]);
  const [filteredQuests, setFilteredQuests] = useState([]);
  const [filter, setFilter] = useState(""); // State to manage selected life skill filter

  useEffect(() => {
    // Example quests with life skill and completion status
    const exampleQuests = [
      {
        id: 1,
        name: "Race with the Horse",
        type: "Daily",
        lifeSkill: "Horse",
        completed: false,
      },
      {
        id: 2,
        name: "Deliver Goods with Boat",
        type: "Weekly",
        lifeSkill: "Boat",
        completed: false,
      },
      // Add more quests as needed
    ];

    // Initialize quests and filtered quests
    setQuests(exampleQuests);
    setFilteredQuests(exampleQuests);
  }, []);

  useEffect(() => {
    // Filter quests based on selected life skill
    if (filter === "") {
      setFilteredQuests(quests);
    } else {
      const filtered = quests.filter((quest) => quest.lifeSkill === filter);
      setFilteredQuests(filtered);
    }
  }, [quests, filter]);

  const handleCompleteToggle = (id) => {
    const updatedQuests = quests.map((quest) =>
      quest.id === id ? { ...quest, completed: !quest.completed } : quest
    );
    setQuests(updatedQuests);
  };

  return (
    <div>
      <Dropdown onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Life Skills</option>
        <option value="Horse">Horse</option>
        <option value="Boat">Boat</option>
        {/* Add more options for other life skills */}
      </Dropdown>
      <QuestTable>
        <thead>
          <tr>
            <TableHeading>Quest Name</TableHeading>
            <TableHeading>Type</TableHeading>
            <TableHeading>Progress</TableHeading>
          </tr>
        </thead>
        <tbody>
          {filteredQuests.map((quest) => (
            <TableRow key={quest.id}>
              <TableCell>{quest.name}</TableCell>
              <TableCell>{quest.type}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={quest.completed}
                  onChange={() => handleCompleteToggle(quest.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </QuestTable>
    </div>
  );
};

export default QuestList;
