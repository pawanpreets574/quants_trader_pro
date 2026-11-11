import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, SafeAreaView, StatusBar, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [balance, setBalance] = useState(66.05);
  const [goldPrice, setGoldPrice] = useState(4046.20);
  const [pnl, setPnl] = useState(0.00);
  const [basketCount, setBasketCount] = useState(0);

  // Filter toggles
  const [m15Guard, setM15Guard] = useState(true);
  const [toleranceZone, setToleranceZone] = useState(true);
  const [sessionBuffer, setSessionBuffer] = useState(true);
  const [compounding, setCompounding] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header Bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>QUANT TRADER PRO</Text>
          <Text style={styles.headerSubtitle}>HFMarkets Live 17 • Account #211219636</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>AUTO HEALING</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Dynamic Island Style Live PnL Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.cardLabel}>ACCOUNT EQUITY</Text>
          <Text style={styles.balanceText}>${balance.toFixed(2)}</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.statsRow}>
            <View>
              <Text style={styles.subStatLabel}>GOLD SPOT (XAUUSD)</Text>
              <Text style={styles.subStatValue}>${goldPrice.toFixed(2)}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.subStatLabel}>ACTIVE FLOAT</Text>
              <Text style={[styles.subStatValue, { color: pnl >= 0 ? '#10B981' : '#EF4444' }]}>
                {pnl >= 0 ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Active Basket HUD */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ACTIVE BASKET EXECUTION</Text>
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.cardTitle}>Running Layers</Text>
              <Text style={styles.highlightVal}>{basketCount} of 4 Max</Text>
            </View>
            <Text style={styles.cardDesc}>
              {basketCount === 0 
                ? "Standing by. Guards scanning for London Open momentum."
                : "Layer 1 active. Dynamic step arming trailing lock."}
            </Text>
            
            <TouchableOpacity style={styles.flattenBtn} activeOpacity={0.8}>
              <Text style={styles.flattenBtnText}>EMERGENCY FLATTEN BASKET</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Core Safeguards Toggles */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>QUANT SAFEGUARDS & GUARDS</Text>
          <View style={styles.cardGroup}>
            
            <View style={styles.toggleRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.toggleTitle}>M15 Candle Guard</Text>
                <Text style={styles.toggleSub}>Blocks entries into opposing candle momentum</Text>
              </View>
              <Switch 
                value={m15Guard} 
                onValueChange={setM15Guard}
                trackColor={{ false: '#27272a', true: '#10B981' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.toggleRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.toggleTitle}>$1.25 Tolerance Zone</Text>
                <Text style={styles.toggleSub}>Enforces structural proximity buffer</Text>
              </View>
              <Switch 
                value={toleranceZone} 
                onValueChange={setToleranceZone}
                trackColor={{ false: '#27272a', true: '#10B981' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.toggleRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.toggleTitle}>Session Rollover Buffer</Text>
                <Text style={styles.toggleSub}>Protects 4-6 PM EST & London fixes</Text>
              </View>
              <Switch 
                value={sessionBuffer} 
                onValueChange={setSessionBuffer}
                trackColor={{ false: '#27272a', true: '#10B981' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.separator} />

            <View style={styles.toggleRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.toggleTitle}>Dynamic Auto-Compounding</Text>
                <Text style={styles.toggleSub}>Sub-$100 floor (0.02 base lots, max 5.0)</Text>
              </View>
              <Switch 
                value={compounding} 
                onValueChange={setCompounding}
                trackColor={{ false: '#27272a', true: '#10B981' }}
                thumbColor="#FFFFFF"
              />
            </View>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#18181b',
  },
  headerTitle: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#71717A',
    fontSize: 11,
    marginTop: 2,
  },
  badge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  balanceCard: {
    backgroundColor: '#18181b',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#27272a',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginBottom: 20,
  },
  cardLabel: {
    color: '#A1A1AA',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  balanceText: {
    color: '#FAFAFA',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#27272a',
    marginVertical: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subStatLabel: {
    color: '#71717A',
    fontSize: 10,
    fontWeight: '600',
  },
  subStatValue: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    color: '#71717A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#18181b',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#27272a',
  },
  cardTitle: {
    color: '#FAFAFA',
    fontSize: 14,
    fontWeight: '700',
  },
  highlightVal: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '800',
  },
  cardDesc: {
    color: '#A1A1AA',
    fontSize: 12,
    marginTop: 6,
    lineHeight: 16,
  },
  flattenBtn: {
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  flattenBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardGroup: {
    backgroundColor: '#18181b',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#27272a',
    overflow: 'hidden',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  toggleTitle: {
    color: '#FAFAFA',
    fontSize: 13,
    fontWeight: '700',
  },
  toggleSub: {
    color: '#71717A',
    fontSize: 10,
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#27272a',
    marginLeft: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
