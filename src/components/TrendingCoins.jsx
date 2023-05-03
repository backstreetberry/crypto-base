import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrendingCoins = () => {
	const [trending, setTrending] = useState([]);

	const url = "https://api.coingecko.com/api/v3/search/trending";

	useEffect(() => {
		axios.get(url).then((response) => {
			setTrending(response.data.coins);
			console.log(response.data.coins);
		});
	}, []);

	return (
		<div className="rounded-div my-10 py-8 text-primary">
			<h1 className="text-2xl font-bold pb-4">TrendingCoins</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{trending.map((coin, idx) => (
					<Link key={idx} to={`/coin/${coin.item.id}`}>
						<div className="rounded-div flex p-4 hover:scale-105 ease-in-out duration-300">
							<div className="flex w-full items-center justify-between">
								<div className="flex items-center">
									<img className="rounded-full" src={coin.item.small} alt={coin.item.name} />
									<div className="ml-4">
										<p className="font-bold">{coin.item.name}</p>
										<p>{coin.item.symbol}</p>
									</div>
								</div>
								<div className="flex items-center">
									<img
										className="w-4 mr-2"
										src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
										alt="/"
									/>
									<p>{coin.item.price_btc.toFixed(10)}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TrendingCoins;
