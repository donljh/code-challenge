-- Select addresses 
-- which have block_length > 730000 (recently made a trade)
-- has balance >= 500
-- where to calculate balance from denom:
-- usdc * 0.000001
-- swth * 0.00000005
-- tmz * 0.003

SELECT DISTINCT address 
FROM trades
WHERE address
IN
(
    -- calculate balance from each denom and group
    SELECT address, SUM(
        CASE
            WHEN denom = usdc THEN amount * 0.000001
            WHEN denom = swth THEN amount * 0.00000005
            WHEN denom = tmz THEN amount * 0.003
        END
    ) as totalValue
    FROM balances
    GROUP BY address
    -- group them by address and select those with >= 500 in balance value
    HAVING totalValue >= 500
)
-- check for recently made trade
AND block_height > 730000 