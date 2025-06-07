
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Search, 
  Download, 
  Upload,
  Globe,
  Trophy,
  Users,
  Calendar
} from "lucide-react";

const DatabaseViewer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTable, setSelectedTable] = useState("players");

  const databaseStats = {
    totalPlayers: 50000,
    totalClubs: 2500,
    totalLeagues: 45,
    totalCountries: 80,
    lastUpdate: "December 1, 2024"
  };

  const samplePlayers = [
    { id: 1, name: "Lionel Messi", club: "Inter Miami", league: "MLS", nationality: "Argentina", age: 36, position: "RW", overall: 90 },
    { id: 2, name: "Cristiano Ronaldo", club: "Al Nassr", league: "Saudi Pro League", nationality: "Portugal", age: 38, position: "ST", overall: 87 },
    { id: 3, name: "Kylian Mbappé", club: "PSG", league: "Ligue 1", nationality: "France", age: 24, position: "ST", overall: 91 },
    { id: 4, name: "Erling Haaland", club: "Manchester City", league: "Premier League", nationality: "Norway", age: 23, position: "ST", overall: 91 },
    { id: 5, name: "Jude Bellingham", club: "Real Madrid", league: "La Liga", nationality: "England", age: 20, position: "CM", overall: 89 }
  ];

  const sampleClubs = [
    { id: 1, name: "Manchester United", league: "Premier League", country: "England", reputation: 9.5, budget: "£150M" },
    { id: 2, name: "Real Madrid", league: "La Liga", country: "Spain", reputation: 10, budget: "£200M" },
    { id: 3, name: "Bayern Munich", league: "Bundesliga", country: "Germany", reputation: 9.8, budget: "£180M" },
    { id: 4, name: "PSG", league: "Ligue 1", country: "France", reputation: 9.2, budget: "£220M" },
    { id: 5, name: "Liverpool", league: "Premier League", country: "England", reputation: 9.6, budget: "£120M" }
  ];

  const sampleLeagues = [
    { id: 1, name: "Premier League", country: "England", tier: 1, teams: 20, reputation: 10 },
    { id: 2, name: "La Liga", country: "Spain", tier: 1, teams: 20, reputation: 9.8 },
    { id: 3, name: "Bundesliga", country: "Germany", tier: 1, teams: 18, reputation: 9.5 },
    { id: 4, name: "Serie A", country: "Italy", tier: 1, teams: 20, reputation: 9.3 },
    { id: 5, name: "Ligue 1", country: "France", tier: 1, teams: 20, reputation: 8.8 }
  ];

  const databaseTables = [
    { name: "players", count: databaseStats.totalPlayers, description: "Player attributes, stats, and career data" },
    { name: "clubs", count: databaseStats.totalClubs, description: "Club information, finances, and reputation" },
    { name: "leagues", count: databaseStats.totalLeagues, description: "League structures and competition rules" },
    { name: "matches", count: 125000, description: "Historical match results and statistics" },
    { name: "transfers", count: 75000, description: "Transfer history and market values" },
    { name: "staff", count: 15000, description: "Coaches, scouts, and support staff data" }
  ];

  const getCurrentData = () => {
    switch (selectedTable) {
      case "players": return samplePlayers;
      case "clubs": return sampleClubs;
      case "leagues": return sampleLeagues;
      default: return samplePlayers;
    }
  };

  const getCurrentColumns = () => {
    switch (selectedTable) {
      case "players": return ["Name", "Club", "League", "Nationality", "Age", "Position", "Overall"];
      case "clubs": return ["Name", "League", "Country", "Reputation", "Budget"];
      case "leagues": return ["Name", "Country", "Tier", "Teams", "Reputation"];
      default: return ["Name", "Club", "League", "Nationality", "Age", "Position", "Overall"];
    }
  };

  return (
    <div className="space-y-6">
      {/* Database Overview */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Database className="h-5 w-5 mr-2 text-green-400" />
            Football Manager Database
          </CardTitle>
          <CardDescription className="text-green-400">
            SQLite-powered data management system • Last updated: {databaseStats.lastUpdate}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{databaseStats.totalPlayers.toLocaleString()}</p>
              <p className="text-sm text-gray-400">Players</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Trophy className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{databaseStats.totalClubs.toLocaleString()}</p>
              <p className="text-sm text-gray-400">Clubs</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{databaseStats.totalLeagues}</p>
              <p className="text-sm text-gray-400">Leagues</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{databaseStats.totalCountries}</p>
              <p className="text-sm text-gray-400">Countries</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Upload className="h-4 w-4 mr-2" />
              Import CSV Data
            </Button>
            <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
              <Download className="h-4 w-4 mr-2" />
              Export Database
            </Button>
            <Button variant="outline" className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-slate-900">
              <Database className="h-4 w-4 mr-2" />
              Backup Database
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Database Tables */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white">Database Tables</CardTitle>
          <CardDescription className="text-green-400">
            Explore the structured data that powers the game simulation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseTables.map((table, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedTable === table.name 
                    ? 'bg-green-600/20 border-green-400' 
                    : 'bg-slate-700/30 border-slate-600 hover:border-green-400/50'
                }`}
                onClick={() => setSelectedTable(table.name)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold capitalize">{table.name}</h3>
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    {table.count.toLocaleString()}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm">{table.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Viewer */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Search className="h-5 w-5 mr-2 text-green-400" />
            Data Viewer - {selectedTable.charAt(0).toUpperCase() + selectedTable.slice(1)} Table
          </CardTitle>
          <CardDescription className="text-green-400">
            Browse and search through the {selectedTable} data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder={`Search ${selectedTable}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-700/50 border-green-500/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-green-500/20">
                  {getCurrentColumns().map((column, index) => (
                    <th key={index} className="text-left text-green-400 font-semibold p-3 text-sm">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getCurrentData().map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                    {selectedTable === "players" && (
                      <>
                        <td className="p-3 text-white">{row.name}</td>
                        <td className="p-3 text-gray-300">{row.club}</td>
                        <td className="p-3 text-gray-300">{row.league}</td>
                        <td className="p-3 text-gray-300">{row.nationality}</td>
                        <td className="p-3 text-gray-300">{row.age}</td>
                        <td className="p-3">
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            {row.position}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Badge className="bg-blue-600 text-white">
                            {row.overall}
                          </Badge>
                        </td>
                      </>
                    )}
                    {selectedTable === "clubs" && (
                      <>
                        <td className="p-3 text-white">{row.name}</td>
                        <td className="p-3 text-gray-300">{row.league}</td>
                        <td className="p-3 text-gray-300">{row.country}</td>
                        <td className="p-3">
                          <Badge className="bg-yellow-600 text-white">
                            {row.reputation}
                          </Badge>
                        </td>
                        <td className="p-3 text-green-400 font-semibold">{row.budget}</td>
                      </>
                    )}
                    {selectedTable === "leagues" && (
                      <>
                        <td className="p-3 text-white">{row.name}</td>
                        <td className="p-3 text-gray-300">{row.country}</td>
                        <td className="p-3">
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            Tier {row.tier}
                          </Badge>
                        </td>
                        <td className="p-3 text-gray-300">{row.teams}</td>
                        <td className="p-3">
                          <Badge className="bg-purple-600 text-white">
                            {row.reputation}
                          </Badge>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <p>Showing 5 of {getCurrentData().length} records</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="text-gray-400 border-gray-400">
                Previous
              </Button>
              <Button size="sm" variant="outline" className="text-gray-400 border-gray-400">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample SQLite Schema */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white">Database Schema Sample</CardTitle>
          <CardDescription className="text-green-400">
            Example SQLite table structure for players
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900/50 p-4 rounded-lg font-mono text-sm">
            <pre className="text-green-400">
{`CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    nationality TEXT,
    position TEXT,
    club_id INTEGER,
    overall_rating INTEGER,
    potential_rating INTEGER,
    market_value INTEGER,
    wage INTEGER,
    contract_end DATE,
    morale INTEGER,
    fitness INTEGER,
    
    -- Technical Attributes
    dribbling INTEGER,
    finishing INTEGER,
    first_touch INTEGER,
    passing INTEGER,
    technique INTEGER,
    
    -- Mental Attributes
    aggression INTEGER,
    anticipation INTEGER,
    composure INTEGER,
    concentration INTEGER,
    decisions INTEGER,
    determination INTEGER,
    
    -- Physical Attributes
    acceleration INTEGER,
    agility INTEGER,
    balance INTEGER,
    jumping_reach INTEGER,
    pace INTEGER,
    stamina INTEGER,
    strength INTEGER,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (club_id) REFERENCES clubs(id)
);`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabaseViewer;
