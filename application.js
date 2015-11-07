console.log('LOADED APPLICATION');

// I am trying to fetch the user's ship, but unsure how to
// mainly unsure as to what is availible at my discretion
/*
function searchNearby(Ship shipObj)
{
	// assuming these variables are public
	Ship tempship = new Ship(shipObj.name, shipObj.player, shipObj.coordinates);
	// a temporary ship object
	Ship[] nearbyShips = null;
	
	for(int i = 0; i < 10; i++)
	{
		tempShip.setLongtitude(shipObj.longitude + i);
		if(tempShip.coordinates = )
	}
	
}
*/


// READ BELOW

// in Java, I would write it this way
// Some object "Coordinates" with attributes longtitude and latitude
// Some object "Ship" with attributes name, player, and Coordinates (object)
// this was written very quickly, so please excuse any logic errors and syntax shortcuts

/*

	class Coordinates
	{
		// we could make these private if needed
		public double latitude;
		public double longitude;
		
		Coordinates(double longitude, double latitude)
		{
			this.latitude = latitude;
			this.longitude = longitude;
		}
	}


	class Ship
	{
		String name;
		String player;
		Coordinates coords;
		
		public Ship(String name, String player, double x, double y)
		{
			this.name = name;
			this.player = player;
			coords = new Coordinates(x, y);
		}
		
		double getLongitude()
		{
			return coords.longitude;
		}
		
		double getLatitude()
		{
			return coords.latitude;
		}
		
		}
		
		
		.. set methods
	}
	
	class GameBoard
	{
		final int HEIGHT = 100;
		final int WIDTH = 300;
		
		ArrayList<Ship> fullBoard = new ArrayList<Ship>();
		
		void add(String player, String name, int x, int y)
		{
			Ship sh = new Ship(...);
			fullBoard.add(sh);
		}
		
		
		
		boolean searchNearby(Ship sh)
		{
			Ship temp = new Ship(sh.name, sh.player, sh.x, sh.y);
			
			// some really really shorthand code FOR ONE CRITERIA
			// if our definition of nearby was a y value of 10 above exactly, we could obviously change that
			temp.coords.latitude = temp.coords.latitude + 10;
			Coordinates co = new Coordinates(x, y);
			for(Ship shp : fullBoard)
				if(temp.coords == shp.coords)
				{
					return true;
				}
				else
				{
					return null;
				}
	}
	..
	import ...
	class Client
	{
		// A simple console style setup
		
		Scanner in = new Scanner(System.in);
		
		System.out.print("player name: ");
		String pName = in.next();
		
		System.out.print("Ship name: ");
		String sName = in.next();
		
		... ask for coords ...
		double xCord
		double yCord
		
		Ship pop = new Ship(pName, sName, xCord, yCord);
		
		GameBoard gb = new GameBoard();
		
		// in theory, there would be more ships already on the board
		
		gb.add(pop);
		
		System.out.print("Would you like to search nearby?");
		String val = in.next();
		
		if(val.equals("yes"))
		{
			boolean wax = gb.searchnearby(pop);
			System.out.println(wax);
		}
		else
		{
			System.out.println("we won't search!")
		}
		
		
		
		
	}
*/
