import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '~/store/ducks/podcasts';

import {
  Container, PodcastList, Podcast, Cover, Info, Title, Count, PageTitle,
} from './styles';

class Main extends Component {
  static propTypes = {
    loadRequest: PropTypes.func.isRequired,
    podcasts: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          cover: PropTypes.string,
          title: PropTypes.string,
          tracks: PropTypes.array.isRequired,
        }),
      ),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;
    navigation.navigate('Podcast', { podcast });
  };

  render() {
    const { podcasts } = this.props;
    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
