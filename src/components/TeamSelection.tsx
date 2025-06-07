
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Shield, 
  Star, 
  Globe,
  Users,
  Trophy
} from "lucide-react";

interface Team {
  id: number;
  name: string;
  league: string;
  country: string;
  division: string;
  rating: number;
  budget: string;
  reputation: string;
  difficulty: "Beginner" | "Intermediate" | "Expert" | "Legendary";
}

interface TeamSelectionProps {
  onTeamSelect: (team: Team | null) => void;
}

const TeamSelection = ({ onTeamSelect }: TeamSelectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [leagueFilter, setLeagueFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const teams: Team[] = [
    {
      id: 1,
      name: "Manchester United",
      league: "Premier League",
      country: "England",
      division: "First Division",
      rating: 84,
      budget: "£200M",
      reputation: "World Class",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      name: "Real Madrid",
      league: "La Liga",
      country: "Spain", 
      division: "Primera División",
      rating: 89,
      budget: "£300M",
      reputation: "World Class",
      difficulty: "Beginner"
    },
    {
      id: 3,
      name: "Bayern Munich",
      league: "Bundesliga",
      country: "Germany",
      division: "1. Bundesliga",
      rating: 87,
      budget: "£250M",
      reputation: "World Class",
      difficulty: "Beginner"
    },
    {
      id: 4,
      name: "Napoli",
      league: "Serie A",
      country: "Italy",
      division: "Serie A",
      rating: 82,
      budget: "£120M",
      reputation: "Continental",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      name: "Brighton & Hove Albion",
      league: "Premier League",
      country: "England",
      division: "First Division",
      rating: 75,
      budget: "£80M",
      reputation: "National",
      difficulty: "Expert"
    },
    {
      id: 6,
      name: "FC Porto",
      league: "Liga Portugal",
      country: "Portugal",
      division: "Primeira Liga",
      rating: 78,
      budget: "£60M",
      reputation: "Continental",
      difficulty: "Expert"
    },
    {
      id: 7,
      name: "Burnley FC",
      league: "Championship",
      country: "England",
      division: "Second Division",
      rating: 68,
      budget: "£25M",
      reputation: "Regional",
      difficulty: "Legendary"
    },
    {
      id: 8,
      name: "Bayer Leverkusen",
      league: "Bundesliga",
      country: "Germany",
      division: "1. Bundesliga",
      rating: 81,
      budget: "£140M",
      reputation: "Continental",
      difficulty: "Intermediate"
    }
  ];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.league.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = leagueFilter === "all" || team.league === leagueFilter;
    const matchesDifficulty = difficultyFilter === "all" || team.difficulty === difficultyFilter;
    return matchesSearch && matchesLeague && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400 border-green-400";
      case "Intermediate": return "text-yellow-400 border-yellow-400";
      case "Expert": return "text-orange-400 border-orange-400";
      case "Legendary": return "text-red-400 border-red-400";
      default: return "text-gray-400 border-gray-400";
    }
  };

  const uniqueLeagues = [...new Set(teams.map(team => team.league))];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-5 w-5 mr-2 text-green-400" />
            Choose Your Team
          </CardTitle>
          <CardDescription className="text-green-400">
            Select a team to manage or simulate without picking a specific team
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Simulation Mode Button */}
          <div className="mb-6">
            <Button
              onClick={() => onTeamSelect(null)}
              className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold"
            >
              <Globe className="h-6 w-6 mr-3" />
              Simulation Mode - Watch All Leagues
            </Button>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Simulate matches without managing a specific team
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search teams or leagues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-700/50 border-green-500/20 text-white placeholder:text-gray-400 pl-10"
              />
            </div>
            <Select value={leagueFilter} onValueChange={setLeagueFilter}>
              <SelectTrigger className="bg-slate-700/50 border-green-500/20 text-white">
                <SelectValue placeholder="Filter by league" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-green-500/20">
                <SelectItem value="all">All Leagues</SelectItem>
                {uniqueLeagues.map(league => (
                  <SelectItem key={league} value={league}>{league}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="bg-slate-700/50 border-green-500/20 text-white">
                <SelectValue placeholder="Filter by difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-green-500/20">
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
                <SelectItem value="Legendary">Legendary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="bg-slate-800/50 border-green-500/20 hover:border-green-400/40 transition-all cursor-pointer group"
                onClick={() => onTeamSelect(team)}>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">
                    {team.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-sm text-gray-400">{team.league}</p>
                  <p className="text-xs text-gray-500">{team.country} • {team.division}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rating:</span>
                    <span className="text-white font-semibold">{team.rating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Budget:</span>
                    <span className="text-green-400 font-semibold">{team.budget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rep:</span>
                    <span className="text-blue-400">{team.reputation}</span>
                  </div>
                </div>

                <Badge variant="outline" className={getDifficultyColor(team.difficulty)}>
                  {team.difficulty}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamSelection;
