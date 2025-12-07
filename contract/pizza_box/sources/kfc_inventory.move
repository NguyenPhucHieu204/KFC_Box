module pizza_box::inventory {
    use std::string::String;
    use iota::object::{UID, new};
    use iota::tx_context::TxContext;
    use iota::transfer;

    /// Ingredient struct for managing inventory
    public struct Ingredient has store {
        name: String,
        quantity: u64,
        unit: String,
        price: u64,
    }

    /// Inventory for KFC box operations
    public struct Inventory has key, store {
        id: UID,
        owner: address,
        ingredients: vector<Ingredient>,
        total_value: u64,
    }

    /// Order struct for tracking orders
    public struct Order has store {
        order_id: u64,
        customer: address,
        items_count: u64,
        total_price: u64,
        status: u8, // 0: pending, 1: preparing, 2: ready, 3: completed
    }

    /// OrderBook to track all orders
    public struct OrderBook has key, store {
        id: UID,
        orders: vector<Order>,
        next_order_id: u64,
    }

    /// Reward system for loyal customers
    public struct RewardCard has key, store {
        id: UID,
        customer: address,
        points: u64,
        level: u8, // 0: bronze, 1: silver, 2: gold
    }

    const EInsufficientInventory: u64 = 1;
    const EInvalidPrice: u64 = 2;
    const EUnauthorized: u64 = 3;

    /// Create new inventory
    public fun create_inventory(ctx: &mut TxContext) {
        let sender = iota::tx_context::sender(ctx);
        let inventory = Inventory {
            id: new(ctx),
            owner: sender,
            ingredients: vector[],
            total_value: 0,
        };
        transfer::public_transfer(inventory, sender);
    }

    /// Add ingredient to inventory
    public fun add_ingredient(
        inventory: &mut Inventory,
        name: String,
        quantity: u64,
        unit: String,
        price: u64,
        ctx: &mut TxContext,
    ) {
        let sender = iota::tx_context::sender(ctx);
        assert!(inventory.owner == sender, EUnauthorized);
        assert!(price > 0, EInvalidPrice);

        let ingredient = Ingredient {
            name,
            quantity,
            unit,
            price,
        };
        vector::push_back(&mut inventory.ingredients, ingredient);
        inventory.total_value = inventory.total_value + (quantity * price);
    }

    /// Use ingredient from inventory
    public fun use_ingredient(
        inventory: &mut Inventory,
        ingredient_index: u64,
        quantity: u64,
        ctx: &mut TxContext,
    ) {
        let sender = iota::tx_context::sender(ctx);
        assert!(inventory.owner == sender, EUnauthorized);

        let ingredient = vector::borrow_mut(&mut inventory.ingredients, ingredient_index);
        assert!(ingredient.quantity >= quantity, EInsufficientInventory);

        ingredient.quantity = ingredient.quantity - quantity;
        inventory.total_value = inventory.total_value - (quantity * ingredient.price);
    }

    /// Create order book
    public fun create_order_book(ctx: &mut TxContext) {
        let order_book = OrderBook {
            id: new(ctx),
            orders: vector[],
            next_order_id: 0,
        };
        transfer::public_transfer(order_book, iota::tx_context::sender(ctx));
    }

    /// Create new order
    public fun create_order(
        order_book: &mut OrderBook,
        items_count: u64,
        total_price: u64,
        ctx: &mut TxContext,
    ) {
        let customer = iota::tx_context::sender(ctx);
        let order = Order {
            order_id: order_book.next_order_id,
            customer,
            items_count,
            total_price,
            status: 0, // pending
        };
        vector::push_back(&mut order_book.orders, order);
        order_book.next_order_id = order_book.next_order_id + 1;
    }

    /// Update order status
    public fun update_order_status(
        order_book: &mut OrderBook,
        order_index: u64,
        new_status: u8,
        ctx: &mut TxContext,
    ) {
        let _sender = iota::tx_context::sender(ctx);
        let order = vector::borrow_mut(&mut order_book.orders, order_index);
        order.status = new_status;
    }

    /// Create reward card
    public fun create_reward_card(ctx: &mut TxContext) {
        let customer = iota::tx_context::sender(ctx);
        let reward_card = RewardCard {
            id: new(ctx),
            customer,
            points: 0,
            level: 0, // bronze
        };
        transfer::public_transfer(reward_card, customer);
    }

    /// Add points to reward card
    public fun add_reward_points(
        reward_card: &mut RewardCard,
        points: u64,
        _ctx: &mut TxContext,
    ) {
        reward_card.points = reward_card.points + points;

        // Update level based on points
        if (reward_card.points >= 1000) {
            reward_card.level = 2; // gold
        } else if (reward_card.points >= 500) {
            reward_card.level = 1; // silver
        } else {
            reward_card.level = 0; // bronze
        };
    }

    /// Get inventory value
    public fun get_inventory_value(inventory: &Inventory): u64 {
        inventory.total_value
    }

    /// Get order count
    public fun get_order_count(order_book: &OrderBook): u64 {
        vector::length(&order_book.orders)
    }

    /// Get reward points
    public fun get_reward_points(reward_card: &RewardCard): u64 {
        reward_card.points
    }

    /// Get reward level
    public fun get_reward_level(reward_card: &RewardCard): u8 {
        reward_card.level
    }
}
