
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Trophy, 
  Clock, 
  Star, 
  Shield,
  Users,
  TrendingUp
} from "lucide-react";

const MatchSimulator = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  const nextMatch = {
    opponent: "Liverpool FC",
    date: "December 15, 2024",
    time: "16:30",
    competition: "Premier League",
    venue: "Old Trafford",
    homeTeam: "Manchester United FC",
    awayTeam: "Liverpool FC",
    weather: "Clear",
    temperature: "8°C"
  };

  const teamStats = {
    home: {
      name: "Manchester United",
      form: ["W", "W", "L", "W", "D"],
      rating: 84,
      morale: 82
    },
    away: {
      name: "Liverpool",
      form: ["W", "W", "W", "D", "W"],
      rating: 87,
      morale: 89
    }
  };

  const startingXI = [
    { name: "Andre Onana", position: "GK", rating: 84 },
    { name: "Diogo Dalot", position: "RB", rating: 78 },
    { name: "Raphael Varane", position: "CB", rating: 86 },
    { name: "Lisandro Martinez", position: "CB", rating: 84 },
    { name: "Luke Shaw", position: "LB", rating: 81 },
    { name: "Casemiro", position: "CDM", rating: 85 },
    { name: "Bruno Fernandes", position: "CM", rating: 88 },
    { name: "Mason Mount", position: "CM", rating: 82 },
    { name: "Alejandro Garnacho", position: "RW", rating: 76 },
    { name: "Marcus Rashford", position: "LW", rating: 86 },
    { name: "Rasmus Hojlund", position: "ST", rating: 79 }
  ];

  const simulateMatch = () => {
    setIsSimulating(true);
    
    // Simulate match for 3 seconds
    setTimeout(() => {
      const result = {
        homeScore: Math.floor(Math.random() * 4),
        awayScore: Math.floor(Math.random() * 4),
        events: [
          { minute: 23, type: "goal", player: "Marcus Rashford", team: "home" },
          { minute: 45, type: "yellow", player: "Casemiro", team: "home" },
          { minute: 67, type: "goal", player: "Mohamed Salah", team: "away" },
          { minute: 89, type: "goal", player: "Bruno Fernandes", team: "home" }
        ],
        stats: {
          possession: { home: 58, away: 42 },
          shots: { home: 14, away: 11 },
          shotsOnTarget: { home: 6, away: 4 },
          fouls: { home: 12, away: 15 }
        },
        motm: "Marcus Rashford"
      };
      
      setMatchResult(result);
      setIsSimulating(false);
    }, 3000);
  };

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
      {/* Next Match Preview */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-400" />
            Next Match
          </CardTitle>
          <CardDescription className="text-green-400">
            {nextMatch.competition} • {nextMatch.date} at {nextMatch.time}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Match Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-xl">MU</span>
                  </div>
                  <h3 className="text-white font-semibold">{teamStats.home.name}</h3>
                  <div className="flex space-x-1 mt-2 justify-center">
                    {teamStats.home.form.map((result, index) => (
                      <Badge key={index} className={`${getFormColor(result)} text-white text-xs`}>
                        {result}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Rating: {teamStats.home.rating}</p>
                </div>

                <div className="text-center">
                  <div className="bg-slate-700 px-4 py-2 rounded-lg mb-2">
                    <p className="text-white font-bold text-xl">VS</p>
                  </div>
                  <p className="text-gray-400 text-sm">{nextMatch.venue}</p>
                  <p className="text-green-400 text-sm">{nextMatch.weather} • {nextMatch.temperature}</p>
                </div>

                <div className="text-center">
                  <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-xl">LIV</span>
                  </div>
                  <h3 className="text-white font-semibold">{teamStats.away.name}</h3>
                  <div className="flex space-x-1 mt-2 justify-center">
                    {teamStats.away.form.map((result, index) => (
                      <Badge key={index} className={`${getFormColor(result)} text-white text-xs`}>
                        {result}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Rating: {teamStats.away.rating}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Team Morale</p>
                  <Progress value={teamStats.home.morale} className="h-2" />
                  <p className="text-xs text-white mt-1">{teamStats.home.morale}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Team Morale</p>
                  <Progress value={teamStats.away.morale} className="h-2" />
                  <p className="text-xs text-white mt-1">{teamStats.away.morale}%</p>
                </div>
              </div>
            </div>

            {/* Match Actions */}
            <div className="space-y-4">
              <Button 
                onClick={simulateMatch}
                disabled={isSimulating}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isSimulating ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Simulating...
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4 mr-2" />
                    Simulate Match
                  </>
                )}
              </Button>
              
              <Button variant="outline" className="w-full text-green-400 border-green-400 hover:bg-green-400 hover:text-slate-900">
                <Shield className="h-4 w-4 mr-2" />
                Set Tactics
              </Button>
              
              <Button variant="outline" className="w-full text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-slate-900">
                <Users className="h-4 w-4 mr-2" />
                Team Sheet
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Starting XI */}
      <Card className="bg-slate-800/50 border-green-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="h-5 w-5 mr-2 text-green-400" />
            Starting XI
          </CardTitle>
          <CardDescription className="text-green-400">
            4-2-3-1 Formation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {startingXI.map((player, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-700/30 p-3 rounded">
                <div>
                  <p className="text-white font-medium text-sm">{player.name}</p>
                  <p className="text-gray-400 text-xs">{player.position}</p>
                </div>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  {player.rating}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Match Result */}
      {matchResult && (
        <Card className="bg-slate-800/50 border-green-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-green-400" />
              Full Time Result
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-8 mb-4">
                <div className="text-center">
                  <h3 className="text-white font-semibold">{teamStats.home.name}</h3>
                  <p className="text-4xl font-bold text-green-400">{matchResult.homeScore}</p>
                </div>
                <div className="text-2xl text-gray-400">-</div>
                <div className="text-center">
                  <h3 className="text-white font-semibold">{teamStats.away.name}</h3>
                  <p className="text-4xl font-bold text-red-400">{matchResult.awayScore}</p>
                </div>
              </div>
              
              <Badge className="bg-yellow-600 text-white">
                <Star className="h-3 w-3 mr-1" />
                Man of the Match: {matchResult.motm}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Match Events */}
              <div>
                <h4 className="text-white font-semibold mb-3">Match Events</h4>
                <div className="space-y-2">
                  {matchResult.events.map((event, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{event.minute}'</span>
                      <span className="text-white">{event.player}</span>
                      <Badge 
                        variant="outline" 
                        className={event.type === 'goal' ? 'text-green-400 border-green-400' : 'text-yellow-400 border-yellow-400'}
                      >
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Match Stats */}
              <div>
                <h4 className="text-white font-semibold mb-3">Match Statistics</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Possession</span>
                      <span className="text-white">{matchResult.stats.possession.home}% - {matchResult.stats.possession.away}%</span>
                    </div>
                    <div className="flex">
                      <div className="h-2 bg-green-600 rounded-l" style={{width: `${matchResult.stats.possession.home}%`}}></div>
                      <div className="h-2 bg-red-600 rounded-r" style={{width: `${matchResult.stats.possession.away}%`}}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shots</span>
                    <span className="text-white">{matchResult.stats.shots.home} - {matchResult.stats.shots.away}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">On Target</span>
                    <span className="text-white">{matchResult.stats.shotsOnTarget.home} - {matchResult.stats.shotsOnTarget.away}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fouls</span>
                    <span className="text-white">{matchResult.stats.fouls.home} - {matchResult.stats.fouls.away}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MatchSimulator;
