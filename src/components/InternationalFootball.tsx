
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Trophy, 
  Calendar, 
  Star, 
  Users,
  Flag
} from "lucide-react";

const InternationalFootball = () => {
  const [selectedTournament, setSelectedTournament] = useState("world-cup");

  const tournaments = [
    {
      id: "world-cup",
      name: "FIFA World Cup 2026",
      status: "Qualifying",
      nextPhase: "Group Stage",
      timeToNext: "18 months",
      participants: 48,
      currentPhase: "CONCACAF Qualifiers"
    },
    {
      id: "euro",
      name: "UEFA Euro 2024",
      status: "Completed",
      winner: "Spain",
      participants: 24,
      currentPhase: "Tournament Ended"
    },
    {
      id: "copa-america",
      name: "Copa América 2024",
      status: "Completed", 
      winner: "Argentina",
      participants: 16,
      currentPhase: "Tournament Ended"
    },
    {
      id: "afcon",
      name: "AFCON 2025",
      status: "Upcoming",
      nextPhase: "Group Stage",
      timeToNext: "6 months",
      participants: 24,
      currentPhase: "Preparations"
    }
  ];

  const nationalTeams = [
    {
      name: "England",
      ranking: 4,
      confederation: "UEFA",
      manager: "Gareth Southgate",
      captain: "Harry Kane",
      recentForm: ["W", "W", "D", "W", "L"],
      nextMatch: {
        opponent: "Germany",
        date: "Nov 15",
        competition: "UEFA Nations League"
      }
    },
    {
      name: "Brazil",
      ranking: 5,
      confederation: "CONMEBOL", 
      manager: "Dorival Júnior",
      captain: "Danilo",
      recentForm: ["W", "D", "W", "W", "W"],
      nextMatch: {
        opponent: "Argentina",
        date: "Nov 19",
        competition: "World Cup Qualifier"
      }
    },
    {
      name: "France",
      ranking: 2,
      confederation: "UEFA",
      manager: "Didier Deschamps",
      captain: "Kylian Mbappé",
      recentForm: ["W", "W", "W", "D", "W"],
      nextMatch: {
        opponent: "Italy",
        date: "Nov 17",
        competition: "UEFA Nations League"
      }
    },
    {
      name: "Argentina",
      ranking: 1,
      confederation: "CONMEBOL",
      manager: "Lionel Scaloni",
      captain: "Lionel Messi",
      recentForm: ["W", "W", "W", "W", "D"],
      nextMatch: {
        opponent: "Brazil",
        date: "Nov 19", 
        competition: "World Cup Qualifier"
      }
    }
  ];

  const upcomingMatches = [
    {
      homeTeam: "England",
      awayTeam: "Germany", 
      date: "Nov 15",
      time: "20:00",
      competition: "UEFA Nations League",
      venue: "Wembley Stadium"
    },
    {
      homeTeam: "France",
      awayTeam: "Italy",
      date: "Nov 17",
      time: "21:00", 
      competition: "UEFA Nations League",
      venue: "Stade de France"
    },
    {
      homeTeam: "Brazil",
      awayTeam: "Argentina",
      date: "Nov 19",
      time: "02:30",
      competition: "World Cup Qualifier",
      venue: "Maracanã Stadium"
    }
  ];

  const getFormColor = (result: string) => {
    switch (result) {
      case "W": return "bg-green-600";
      case "D": return "bg-yellow-600";
      case "L": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="h-5 w-5 mr-2 text-green-400" />
            International Football
          </CardTitle>
          <CardDescription className="text-green-400">
            World competitions, national teams, and international fixtures
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="tournaments" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full bg-slate-800/50 border border-green-500/20">
          <TabsTrigger value="tournaments" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <Trophy className="h-4 w-4 mr-2" />
            Tournaments
          </TabsTrigger>
          <TabsTrigger value="teams" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <Flag className="h-4 w-4 mr-2" />
            National Teams
          </TabsTrigger>
          <TabsTrigger value="fixtures" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Fixtures
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tournaments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-slate-800/50 border-green-500/20 hover:border-green-400/40 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{tournament.name}</h3>
                      <Badge 
                        variant="outline" 
                        className={
                          tournament.status === "Completed" ? "text-gray-400 border-gray-400" :
                          tournament.status === "Qualifying" ? "text-yellow-400 border-yellow-400" :
                          "text-green-400 border-green-400"
                        }
                      >
                        {tournament.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Participants:</span>
                        <span className="text-white">{tournament.participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Phase:</span>
                        <span className="text-white">{tournament.currentPhase}</span>
                      </div>
                      {tournament.winner && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Winner:</span>
                          <span className="text-green-400 font-semibold">{tournament.winner}</span>
                        </div>
                      )}
                      {tournament.timeToNext && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Next Phase:</span>
                          <span className="text-blue-400">{tournament.timeToNext}</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <div className="grid gap-4">
            {nationalTeams.map((team, index) => (
              <Card key={team.name} className="bg-slate-800/50 border-green-500/20 hover:border-green-400/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">#{team.ranking}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{team.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            {team.confederation}
                          </Badge>
                          <span>FIFA Ranking: {team.ranking}</span>
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          <span>Manager: {team.manager}</span>
                          <span className="mx-2">•</span>
                          <span>Captain: {team.captain}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Recent Form:</p>
                        <div className="flex space-x-1">
                          {team.recentForm.map((result, index) => (
                            <Badge key={index} className={`${getFormColor(result)} text-white text-xs`}>
                              {result}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        <p>Next: vs {team.nextMatch.opponent}</p>
                        <p>{team.nextMatch.date} • {team.nextMatch.competition}</p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                        View Squad
                      </Button>
                      <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                        Fixtures
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fixtures" className="space-y-4">
          <div className="space-y-4">
            {upcomingMatches.map((match, index) => (
              <Card key={index} className="bg-slate-800/50 border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold text-sm">{match.homeTeam.slice(0, 3).toUpperCase()}</span>
                        </div>
                        <h3 className="text-white font-semibold text-sm">{match.homeTeam}</h3>
                      </div>

                      <div className="text-center">
                        <div className="bg-slate-700 px-3 py-1 rounded mb-2">
                          <p className="text-white font-bold">VS</p>
                        </div>
                        <p className="text-gray-400 text-xs">{match.time}</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold text-sm">{match.awayTeam.slice(0, 3).toUpperCase()}</span>
                        </div>
                        <h3 className="text-white font-semibold text-sm">{match.awayTeam}</h3>
                      </div>
                    </div>

                    <div className="text-center md:text-right">
                      <Badge variant="outline" className="text-green-400 border-green-400 mb-2">
                        {match.date}
                      </Badge>
                      <p className="text-sm text-gray-400">{match.competition}</p>
                      <p className="text-xs text-gray-500">{match.venue}</p>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900"
                    >
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InternationalFootball;
